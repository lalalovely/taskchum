import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
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
  logInAsGuest: () => Promise<void>;
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
    await createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
      updateProfile(userCred.user, {
        displayName: name,
      });
    });
  }

  async function googleSignIn() {
    await signInWithPopup(auth, googleProvider);
  }

  async function logInAsGuest() {
    await signInAnonymously(auth);
  }

  async function logOut() {
    await auth.signOut();
  }

  useEffect(() => {
    const authStateChanged = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await UserApi.getUser(userAuth.uid);
        if (!user) {
          let newUserData = {
            id: userAuth.uid,
            name: userAuth.displayName || '',
            email: userAuth.email || '',
            photoURL: userAuth.photoURL || '',
            isGuest: false,
          };

          if (userAuth.isAnonymous) {
            newUserData = {
              ...newUserData,
              name: userAuth.displayName || 'Guest',
              isGuest: true,
            };
          }

          const newUser = await createUser(newUserData);
          setCurrentUser(newUser);
        } else {
          setCurrentUser(user);
        }
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
    logInAsGuest,
    logOut,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}
