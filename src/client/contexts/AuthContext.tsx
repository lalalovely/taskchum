import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { User } from '../../commons/types/User.type';
import UserApi from '../api/UserApi';
import googleProvider, { auth } from '../services/FirebaseService';

type AuthContextType = {
  currentUser: User;
  loading: boolean;
  error: Error;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  googleSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | Record<string, unknown>>({});

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

type AuthProviderProps = {
  children?: React.ReactNode;
};

export function AuthProvider(props: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { mutateAsync: createUser } = useMutation(UserApi.createUser, {});

  async function logIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function signUp(name: string, email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = await createUser({ id: user.user.uid, name: name, email: email });
    setCurrentUser(newUser);
  }

  async function googleSignIn() {
    signInWithPopup(auth, googleProvider).then(async (userDetails) => {
      const user = await UserApi.getUser(userDetails.user.uid);
      if (!user) {
        const newUser = await createUser({
          id: userDetails.user.uid,
          name: userDetails.user.displayName ?? '',
          email: userDetails.user.email ?? '',
        });
        setCurrentUser(newUser);
      }
    });
  }

  async function logOut() {
    await auth.signOut();
  }

  useEffect(() => {
    const authStateChanged = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await UserApi.getUser(userAuth.uid);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        setError(new Error('Unauthenticated'));
      }
      setLoading(false);
    });

    return () => {
      authStateChanged();
    };
  }, []);

  const value = {
    currentUser,
    error,
    loading,
    logIn,
    signUp,
    googleSignIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{!loading && props.children}</AuthContext.Provider>;
}
