import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/client/contexts/AuthContext';

import UserApi from '../../api/UserApi';
import googleIcon from '../../assets/images/google-icon.svg';
import { useForm } from '../../hooks/useForm';
import googleProvider, { auth } from '../../services/FirebaseService';

import {
  FormContainer,
  FormHeader,
  FormMain,
  Form,
  Line,
  Input,
  ActionButton,
  GoogleLoginButton,
  Divider,
  Label,
  GoogleIcon,
  ErrorMessage,
} from './formStyles';
import { PageContainer, Main, Option, LogoText } from './styles';

interface LoginInfo {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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

  const onLogInWithGoogle = async () => {
    try {
      // await signInWithPopup(auth, googleProvider).then((result) => {
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential?.accessToken;
      // });
      const result = await signInWithPopup(auth, googleProvider);
      const user = await queryClient.fetchQuery(result.user.uid, () =>
        UserApi.getUser(result.user.uid),
      );
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  function FormDivider() {
    return (
      <Divider>
        <Line />
        <div style={{ color: 'rgb(196, 196, 196)' }}>or</div>
        <Line />
      </Divider>
    );
  }

  return (
    <PageContainer>
      <Main>
        <LogoText>taskchum</LogoText>
        <FormContainer>
          <FormHeader>Login</FormHeader>
          <FormMain>
            <GoogleLoginButton onClick={onGoogleSignIn}>
              <GoogleIcon alt="googleIcon" src={googleIcon} />
              Continue with Google
            </GoogleLoginButton>
            <FormDivider />
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
          </FormMain>
        </FormContainer>
        <Option>
          No account yet? <Link to="/signup">Sign up</Link>
        </Option>
      </Main>
    </PageContainer>
  );
}
