import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

import { auth } from '../../../../services/FirebaseService';

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
  LoginButton,
} from './styles';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = async () => {
    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormContainer>
      <FormContent>
        <FormHeader>Sign up</FormHeader>
        <FormMain>
          <GoogleLogin>Continue with Google</GoogleLogin>
          <FormWrapper>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSignUp();
              }}
            >
              <LineBreak>
                <Line />
              </LineBreak>
              <InputField>
                <Input
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                ></Input>
              </InputField>
              <InputField>
                <Input
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></Input>
              </InputField>
              <InputField>
                <Input
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                ></Input>
              </InputField>
              <LoginButton type="submit">Sign up</LoginButton>
            </Form>
          </FormWrapper>
        </FormMain>
      </FormContent>
    </FormContainer>
  );
}
