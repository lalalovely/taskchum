import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Logo } from '../../components';

import LoginForm from './components/Form/LoginForm';
import SignupForm from './components/Form/SignupForm';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  function onSignUp() {
    setIsLogin(false);
  }

  return (
    <>
      <LoginPageContainer>
        <HeaderContainer>
          <HeaderContent>
            <HeaderLogo>
              <Logo />
            </HeaderLogo>
            <Filler></Filler>
          </HeaderContent>
        </HeaderContainer>
        <MainWrapper>
          <Main>
            {/* {isLogin ? <LoginForm /> : <SignupForm />} */}
            <LoginForm />
            <SignUpWrapper>
              {/* <SignUp onClick={onSignUp}>Sign up</SignUp> */}
              <Link to="/auth/signup">Sign up</Link>
            </SignUpWrapper>
            <Routes>
              <Route path="/auth/signup" element={<SignupForm />} />
            </Routes>
          </Main>
        </MainWrapper>
      </LoginPageContainer>
    </>
  );
}

export const SignUpWrapper = styled.div`
  color: rgba(55, 53, 47, 0.65);
  font-size: 14px;
  line-height: 1.6;
  margin-top: 8px;
  text-align: center;
`;

export const SignUp = styled.a`
  display: inline;
  text-decoration: underline;
  user-select: none;
  cursor: pointer;
`;

export const LoginPageContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 50px;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  padding: 0 12px;
`;

export const MainWrapper = styled.div`
  display: block;
`;

export const Main = styled.main`
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  margin: 0px auto;
  overflow: visible;
`;

export const Filler = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
`;
