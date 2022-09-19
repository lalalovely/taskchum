import { Task } from '../../commons/types/Task.type';
import BadRequestError from '../errors/BadRequestError';
import NotFoundError from '../errors/NotFoundError';
import firestore from '../libs/FirestoreClient';

async function createTask(params: Task): Promise<Task> {
  if (params.name === '') {
    throw new BadRequestError();
  }

  const task = {
    ...params,
    isDone: false,
    dateCreated: new Date(),
    dateUpdated: new Date(),
  } as Task;

  const collectionRef = firestore.collection('tasks');
  await collectionRef.add(task);
  return task;
}

async function deleteTask(id: string): Promise<string> {
  if (id === '') {
    throw new BadRequestError();
  }

  const documentRef = firestore.doc(`tasks/${id}`);

  if (!documentRef) {
    throw new NotFoundError();
  }

  await documentRef.delete();

  return id;
}

async function updateTask(params: Task): Promise<Task> {
  const task = {
    ...params,
    dateUpdated: new Date(),
  } as Task;
  const { dateCreated, userId, ...dataToUpdate } = params;
  const documentRef = firestore.doc(`tasks/${params.id}`);

  if (!documentRef) {
    throw new NotFoundError();
  }

  await documentRef.update({
    ...dataToUpdate,
    dateUpdated: new Date(),
  });

  return task;
}

async function getTasks(): Promise<Task[]> {
  const collectionRef = await firestore.collection('tasks').orderBy('dateCreated').get();
  const docsRef = collectionRef.docs;
  return Promise.all(
    docsRef.map(async (doc) => {
      const task = { ...doc.data(), id: doc.id } as Task;
      return task;
    }),
  );
}

async function getTasksByUserId(userId: string): Promise<Task[]> {
  const collectionRef = await firestore
    .collection('tasks')
    .where('userId', '==', userId)
    .orderBy('dateCreated', 'asc')
    .get();

  const docsRef = collectionRef.docs;
  if (docsRef.length <= 0) {
    return [];
  }

  return Promise.all(
    docsRef.map((doc) => {
      const task = { ...doc.data(), id: doc.id } as Task;
      return task;
    }),
  );
}

async function deleteTasks(userId: string, isDone: boolean): Promise<boolean> {
  const batchSize = 100;
  const collectionRef = firestore.collection('tasks');

  let query = collectionRef.where('userId', '==', userId);

  if (isDone) {
    query = query.where('isDone', '==', true);
  }
  query = query.limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(query, resolve).catch(reject);
  });
}

async function deleteQueryBatch(query: FirebaseFirestore.Query, resolve: any): Promise<void> {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // Delete documents in a batch
  const batch = firestore.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  process.nextTick(() => {
    deleteQueryBatch(query, resolve);
  });
}

export default {
  createTask,
  deleteTask,
  updateTask,
  getTasks,
  getTasksByUserId,
  deleteTasks,
};
