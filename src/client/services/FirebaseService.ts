import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import config from '../configs/config';

const firebaseApp = firebase.initializeApp(config.firebaseCredentials);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export default googleProvider;
