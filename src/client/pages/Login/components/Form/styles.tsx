import styled from 'styled-components';

import { Button } from '../../../../components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0px auto;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.div`
  font-size: 50px;
  margin-top: 12vh;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  line-height: 1.1;
`;

export const GoogleLogin = styled.div`
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 36px;
  border-radius: 4px;
  color: rgb(17, 17, 17);
  font-size: 14px;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500;
  background: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  width: 100%;
  box-shadow: rgb(15 15 15 / 5%) 0px 1px 2px;
  margin-bottom: 4px;
`;

export const FormMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  margin-bottom: 16vh;
`;

export const FormWrapper = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: block;
  margin-top: 0em;
`;

export const LineBreak = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 100%;
  height: 42px;
  flex: 0 0 auto;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  visibility: visible;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 15px;
  line-height: 26px;
  padding: 4px 10px;
  position: relative;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset;
  background: ${(props) => props.theme.colors.input};
  border-color: ${(props) => props.theme.colors.border};
  cursor: text;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: inherit;
  line-height: inherit;
  border: none;
  background: none;
  width: 100%;
  display: block;
  resize: none;
  padding: 0px;
  outline: none;
`;

export const LoginButton = styled.button`
  margin-top: 6px;
  border: none;
  margin-bottom: 12px;
  width: 100%;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 36px;
  border-radius: 4px;
  color: #fff; //rgb(235, 87, 87);
  font-size: 14px;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500;
  background: ${(props) => props.theme.colors.primary}; //rgb(253, 245, 242);
  box-shadow: rgb(15 15 15 / 10%) 0px 1px 2px, rgb(235 87 87 / 30%) 0px 0px 0px 1px inset;

  &:active,
  &:hover {
    background-color: ${(props) => props.theme.colors.btnPrimaryHoverFill};
    color: ${(props) => props.theme.colors.btnPrimaryHoverTint};
  }
`;

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
