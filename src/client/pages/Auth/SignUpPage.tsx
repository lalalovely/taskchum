import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { useAuth } from 'src/client/contexts/AuthContext';

import googleIcon from '../../assets/images/google-icon.svg';
import { useForm } from '../../hooks';

import {
  FormContainer,
  FormHeader,
  FormMain,
  Form,
  FormFooter,
  Input,
  Label,
  ErrorMessage,
  ValidationErrorMessage,
  LoginMethodSeparator,
  LoginMethodsContainer,
  InputContainer,
  IconContainer,
  FormGroup,
  Icon,
  ButtonContainer,
} from './formStyles';
import { PageContainer, Section, Main, LogoText } from './styles';
import LoadingPage from '../LoadingPage';
import { Button } from 'src/client/components';
import Loading from 'src/client/components/Loading';

interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { loading, signUp, googleSignIn, logInAsGuest, currentUser } = useAuth();
  const [signUpError, setSignUpError] = useState<string>('');
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
  } = useForm<SignUpInfo>({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z ]*$',
          message: "You're not allowed to use special characters or numbers in your name.",
        },
      },
      email: {
        required: {
          value: true,
          message: 'Email is required',
        },
        pattern: {
          value: '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$',
          message: 'This is not a valid email format.',
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at least 6 characters long.',
        },
      },
    },
    onSubmit: (details) =>
      onSignUp(details['name'] || '', details['email'] || '', details['password'] || ''),
  });

  useEffect(() => {
    if (signUpError.length > 1) {
      if (Object.keys(errors).length > 0) {
        setSignUpError('');
      }
      if (user.email || user.password || user.name) {
        if (user.email.length > 0 || user.password.length > 0 || user.name.length > 0) {
          setSignUpError('');
        }
      }
    }
  }, [errors, user.name, user.email, user.password]);

  async function onSignUp(name: string, email: string, password: string) {
    await signUp(name, email, password).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        setSignUpError('Email is already in use');
      } else {
        setSignUpError(error.message);
      }
    });
  }

  async function onGoogleSignUp() {
    await googleSignIn();
  }

  async function onSignUpAsGuest() {
    await logInAsGuest();
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  function preventSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const showLoading = loading && <Loading />;

  return (
    <PageContainer>
      {showLoading}
      <LogoText>taskchum</LogoText>
      <Section>
        <Main>
          <FormContainer>
            {signUpError !== '' && Object.keys(errors).length === 0 && (
              <ErrorMessage>{signUpError}</ErrorMessage>
            )}
            <FormHeader>Sign up</FormHeader>
            <FormMain>
              <Form onSubmit={preventSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <InputContainer>
                    <Input
                      className="input"
                      placeholder=""
                      value={user.name || ''}
                      onChange={handleChange('name')}
                    />
                  </InputContainer>
                  {errors.name && <ValidationErrorMessage>{errors.name}</ValidationErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Email</Label>
                  <InputContainer>
                    <Input
                      className="input"
                      placeholder="example@mail.com"
                      value={user.email || ''}
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
                      value={user.password || ''}
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

                <ButtonContainer>
                  <Button label="Sign up" type="primary" onClick={handleSubmit} />
                </ButtonContainer>
              </Form>
              <LoginMethodSeparator>or</LoginMethodSeparator>
              <LoginMethodsContainer>
                <Button
                  label="Continue with Google"
                  type="secondary"
                  icon={<Icon alt="googleIcon" src={googleIcon} />}
                  onClick={onGoogleSignUp}
                />
                <Button
                  label="Continue as Guest"
                  type="secondary"
                  icon={<HiOutlineUser size="20px" color="#f26931" />}
                  onClick={onSignUpAsGuest}
                />
              </LoginMethodsContainer>
            </FormMain>
            <FormFooter>
              Already have an account?{' '}
              <Link className="link" to="/login">
                Login
              </Link>
            </FormFooter>
          </FormContainer>
        </Main>
      </Section>
    </PageContainer>
  );
}
