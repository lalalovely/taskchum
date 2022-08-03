import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/client/contexts/AuthContext';

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
} from './formStyles';
import { PageContainer, Section, Main, LogoText } from './styles';

interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

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
      <LogoText>taskchum</LogoText>
      <Section>
        <Main>
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
                <ActionButton type="submit">Sign up</ActionButton>
              </Form>
            </FormMain>
            <FormSeparator />
            <FormFooter>
              Already have an account? <Link to="/login">Login</Link>
            </FormFooter>
          </FormContainer>
        </Main>
      </Section>
    </PageContainer>
  );
}
