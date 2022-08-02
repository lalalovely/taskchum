import { User } from '../../commons/types/User.type';
import firestore from '../libs/FirestoreClient';

async function createUser(params: User): Promise<User> {
  const user = {
    ...params,
  } as unknown as User;

  const userRef = firestore.doc(`users/${params.id}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    userRef.set({ name: params.name, email: params.email, photoURL: params.photoURL });
  }
  return user;
}

async function getUser(userId: string): Promise<User | null> {
  const userRef = firestore.doc(`users/${userId}`);
  const snapshot = await userRef.get();
  if (snapshot.exists) {
    const data = snapshot.data();
    return {
      id: userId,
      name: data?.name,
      email: data?.email,
      photoURL: data?.photoURL,
    } as User;
  }
  return null;
}

export default { createUser, getUser };
