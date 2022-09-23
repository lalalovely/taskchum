import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './themes/default';
import darkTheme from './themes/dark';

import { GlobalStyle } from './App.styles';
import { ProtectedPage, Toast } from './components';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { LoginPage, SignUpPage } from './pages/Auth';
import LoadingPage from './pages/LoadingPage';
import PageNotFound from './pages/PageNotFound';
import TaskPage from './pages/Task';
import { AlertDialogProvider } from './contexts/AlertDialogContext';

function App() {
  const { loading } = useAuth();
  const [theme, setTheme] = useState<string>('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <AlertDialogProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedPage>
                    <TaskPage toggleTheme={toggleTheme} />
                  </ProtectedPage>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </AlertDialogProvider>
        <Toast />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
