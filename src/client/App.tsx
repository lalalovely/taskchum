import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../client/themes/default';

import { GlobalStyle } from './App.styles';
import { ProtectedPage, Toast } from './components';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { LoginPage, SignUpPage } from './pages/Auth';
import LoadingPage from './pages/LoadingPage';
import PageNotFound from './pages/PageNotFound';
import TaskPage from './pages/Task';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedPage>
                  <TaskPage />
                </ProtectedPage>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toast />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
