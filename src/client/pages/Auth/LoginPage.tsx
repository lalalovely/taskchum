import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
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
  ValidationErrorMessage,
  InputContainer,
  IconContainer,
  FormGroup,
  LoginMethodButton,
  Icon,
} from './formStyles';
import { PageContainer, Section, Main, LogoText } from './styles';

interface LoginInfo {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { logIn, googleSignIn, logInAsGuest, currentUser } = useAuth();
  const [loginError, setLoginError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
          value: '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$', //'^[^s@]+@[^s@]+.[^s@]{2,}$',
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

  useEffect(() => {
    if (loginError.length > 1) {
      if (Object.keys(errors).length > 0) {
        setLoginError('');
      }
      if (user.email || user.password) {
        if (user.email.length > 0 || user.password.length > 0) {
          setLoginError('');
        }
      }
    }
  }, [errors, user.email, user.password]);

  async function onLogin(email: string, password: string) {
    await logIn(email, password).catch((error) => {
      setLoginError('Wrong email or password');
    });
  }

  async function onGoogleSignIn() {
    await googleSignIn();
  }

  async function onLogInAsGuest() {
    await logInAsGuest();
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <PageContainer>
      <LogoText>taskchum</LogoText>
      <Section>
        <Main>
          <FormContainer>
            {loginError !== '' && Object.keys(errors).length === 0 && (
              <ErrorMessage>{loginError}</ErrorMessage>
            )}
            <FormHeader>Login</FormHeader>
            <FormMain>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Email</Label>
                  <InputContainer>
                    <Input
                      className="input"
                      placeholder="example@mail.com"
                      onChange={handleChange('email')}
                    ></Input>
                  </InputContainer>
                  {errors.email && <ValidationErrorMessage>{errors.email}</ValidationErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Password</Label>
                  <InputContainer>
                    <Input
                      className="input"
                      placeholder=""
                      type={showPassword ? 'text' : 'password'}
                      onChange={handleChange('password')}
                    ></Input>
                    <IconContainer onClick={togglePassword}>
                      {showPassword ? <BsEye color="#a8a9ad" /> : <BsEyeSlash color="#a8a9ad" />}
                    </IconContainer>
                  </InputContainer>
                  {errors.password && (
                    <ValidationErrorMessage>{errors.password}</ValidationErrorMessage>
                  )}
                </FormGroup>

                <ActionButton type="submit">Login</ActionButton>
              </Form>
              <LoginMethodsContainer>
                <LoginMethodSeparator>or</LoginMethodSeparator>
                <LoginMethodButton onClick={onGoogleSignIn}>
                  <Icon alt="googleIcon" src={googleIcon} />
                  Continue with Google
                </LoginMethodButton>
                <LoginMethodButton onClick={onLogInAsGuest}>
                  <HiOutlineUser size="20px" color="#f26931" />
                  Continue as Guest
                </LoginMethodButton>
              </LoginMethodsContainer>
            </FormMain>
            <FormSeparator />
            <FormFooter>
              No account yet?
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </FormFooter>
          </FormContainer>
        </Main>
      </Section>
    </PageContainer>
  );
}
