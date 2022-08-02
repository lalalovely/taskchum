import React from 'react';

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
  return (
    <FormContainer>
      <FormContent>
        <FormHeader>Sign up</FormHeader>
        <FormMain>
          <GoogleLogin>Continue with Google</GoogleLogin>
          <FormWrapper>
            <Form>
              <LineBreak>
                <Line />
              </LineBreak>
              <InputField>
                <Input placeholder="Name"></Input>
              </InputField>
              <InputField>
                <Input placeholder="Email"></Input>
              </InputField>
              <InputField>
                <Input placeholder="Password"></Input>
              </InputField>
              <LoginButton>Sign up</LoginButton>
            </Form>
          </FormWrapper>
        </FormMain>
      </FormContent>
    </FormContainer>
  );
}
