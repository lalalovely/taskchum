import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/client/contexts/AuthContext';

import { User } from '../../../commons/types/User.type';
import UserApi from '../../api/UserApi';
import { NavBar } from '../../components';
import { useForm } from '../../hooks/useForm';
import { auth } from '../../services/FirebaseService';

import { SignupForm } from './components/Form';

import {
  FormContainer,
  FormContent,
  FormHeader,
  FormMain,
  GoogleLogin,
  FormWrapper,
  Form,
  LineBreak,
  Line,
  InputField,
  Input,
  ActionButton,
  Divider,
  Label,
  ErrorMessage,
} from './formStyles';

import { PageContainer, MainWrapper, Main, Option, LogoText } from './styles';

interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, currentUser } = useAuth();

  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<SignUpInfo>({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "You're not allowed to use special characters or numbers in your name.",
        },
      },
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
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at least 6 characters long.',
        },
      },
    },
    onSubmit: (details) =>
      onSignUp(details['name'] || '', details['email'] || '', details['password'] || ''),
  });

  async function onSignUp(name: string, email: string, password: string) {
    try {
      await signUp(name, email, password);
    } catch (e) {
      console.log(e);
    } finally {
      navigate('/', { replace: true });
    }
  }

  return (
    <PageContainer>
      <Main>
        <LogoText>taskchum</LogoText>

        <FormContainer>
          <FormHeader>Sign up</FormHeader>
          <FormMain>
            <Form onSubmit={handleSubmit}>
              <Label>Name</Label>
              <Input placeholder="" value={user.name || ''} onChange={handleChange('name')} />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <Label>Email</Label>
              <Input
                placeholder="example@mail.com"
                value={user.email || ''}
                onChange={handleChange('email')}
              ></Input>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <Label>Password</Label>
              <Input
                placeholder=""
                type="password"
                value={user.password || ''}
                onChange={handleChange('password')}
              ></Input>
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              {/* <Label>Confirm Password</Label>
              <Input
                placeholder=""
                value={user.confirmPassword || ""}
                onChange={handleChange("confirmPassword")}
              ></Input>
              {errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
              )} */}
              <ActionButton type="submit">Sign up</ActionButton>
            </Form>
          </FormMain>
        </FormContainer>
        <Option>
          Already have an account? <Link to="/login">Login</Link>
        </Option>
      </Main>
    </PageContainer>
  );
}
