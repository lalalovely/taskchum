import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import LoadingPage from '../pages/LoadingPage';

type ProtectedPageProps = {
  children?: any;
};
export default function ProtectedPage(props: ProtectedPageProps) {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <LoadingPage />;
  }
  if (!currentUser) {
    return <Navigate to="/login" replace={true} />;
  }
  return props.children;
}
