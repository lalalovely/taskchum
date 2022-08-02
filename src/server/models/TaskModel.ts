import { Task } from '../../commons/types/Task.type';
import firestore from '../libs/FirestoreClient';

async function createTask(params: Task): Promise<Task> {
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
  const documentRef = firestore.doc(`tasks/${id}`);
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

async function deleteAllTasksByUserId(userId: string): Promise<void> {
  const collectionRef = await firestore.collection('tasks').where('userId', '==', userId).get();

  await Promise.all(collectionRef.docs.map((doc) => doc.ref.delete()));
}

async function deleteCompletedTasks(userId: string): Promise<void> {
  const collectionRef = await firestore
    .collection('tasks')
    .where('userId', '==', userId)
    .where('isDone', '==', true)
    .get();

  await Promise.all(collectionRef.docs.map((doc) => doc.ref.delete()));
}

export default {
  createTask,
  deleteTask,
  updateTask,
  getTasks,
  getTasksByUserId,
  deleteCompletedTasks,
  deleteAllTasksByUserId,
};
