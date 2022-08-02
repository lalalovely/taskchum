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

export default function LoginForm() {
  return (
    <FormContainer>
      <FormContent>
        <FormHeader>Log in</FormHeader>
        <FormMain>
          <GoogleLogin>Continue with Google</GoogleLogin>
          <FormWrapper>
            <Form>
              <LineBreak>
                <Line />
              </LineBreak>
              <InputField>
                <Input placeholder="Email"></Input>
              </InputField>
              <InputField>
                <Input placeholder="Password"></Input>
              </InputField>
              <LoginButton>Log in</LoginButton>
            </Form>
          </FormWrapper>
        </FormMain>
      </FormContent>
    </FormContainer>
  );
}
