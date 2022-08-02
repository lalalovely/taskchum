import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../client/themes/default';

import { GlobalStyle } from './App.styles';
import { ProtectedPage, Toast } from './components';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
//import useAuth from './hooks/useAuth';
import { LoginPage, SignUpPage } from './pages/Auth';
import LoadingPage from './pages/LoadingPage';
import PageNotFound from './pages/PageNotFound';
import TaskPage from './pages/Task';

const queryClient = new QueryClient();

function App() {
  const { loading } = useAuth();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      {/* <UserContext.Provider value={user as any}> */}
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
      {/* </UserContext.Provider> */}
    </QueryClientProvider>
  );
}

export default App;
