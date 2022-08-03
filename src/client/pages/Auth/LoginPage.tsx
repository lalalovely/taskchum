import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/client/contexts/AuthContext';

import googleIcon from '../../assets/images/google-icon.svg';
import { useForm } from '../../hooks/useForm';

import {
  FormContainer,
  FormHeader,
  FormMain,
  Form,
  FormSeparator,
  FormFooter,
  Input,
  Label,
  ActionButton,
  ErrorMessage,
  LoginMethodsContainer,
  LoginMethodSeparator,
  GoogleButton,
  GoogleIcon,
} from './formStyles';
import { PageContainer, Section, Main, LogoText } from './styles';

interface LoginInfo {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { logIn, googleSignIn, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate('/', { replace: true });
    }
  }, [currentUser]);

  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<LoginInfo>({
    validations: {
      email: {
        required: {
          value: true,
          message: 'Email is required',
        },
        pattern: {
          value: '^[^s@]+@[^s@]+.[^s@]{2,}$',
          message: 'This is not a valid email format.',
        },
      },
      password: {
        required: {
          value: true,
          message: 'Password is required',
        },
      },
    },
    onSubmit: (details) => onLogin(details['email'] || '', details['password'] || ''),
  });

  async function onLogin(email: string, password: string) {
    try {
      await logIn(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async function onGoogleSignIn() {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PageContainer>
      <LogoText>taskchum</LogoText>
      <Section>
        <Main>
          <FormContainer>
            <FormHeader>Login</FormHeader>
            <FormMain>
              <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input
                  placeholder="example@mail.com"
                  value={user.email || ''}
                  onChange={handleChange('email')}
                ></Input>
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                <Label>Password</Label>
                <Input placeholder="" type="password" onChange={handleChange('password')}></Input>
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                <ActionButton type="submit">Login</ActionButton>
              </Form>
              <LoginMethodsContainer>
                <LoginMethodSeparator>OR</LoginMethodSeparator>
                <GoogleButton onClick={onGoogleSignIn}>
                  <GoogleIcon alt="googleIcon" src={googleIcon} />
                  Continue with Google
                </GoogleButton>
              </LoginMethodsContainer>
            </FormMain>
            <FormSeparator />
            <FormFooter>
              No account yet? <Link to="/signup">Sign up</Link>
            </FormFooter>
          </FormContainer>
        </Main>
      </Section>
    </PageContainer>
  );
}
