import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 25px 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.formCard};

  @media (max-width: 425px) {
    width: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
  }
`;

export const FormMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div``;

export const FormHeader = styled.h1`
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  text-align: center;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  color: ${(props) => props.theme.colors.labelColor};
  opacity: 0.8;

  .link {
    padding-left: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const LoginMethodsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

export const LoginMethodSeparator = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.fieldLabelColor};
`;

export const Label = styled.div`
  margin: 15px 0 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.fieldLabelColor};
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 0.5em;
  height: 44px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.inputBgColor};
  border: 1px solid ${(props) => props.theme.colors.inputBorderColor};
  border-radius: 5px;
  outline: none;
  justify-content: space-between;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.inputHoverBorderColor};
  }

  .input {
    color: ${(props) => props.theme.colors.labelColor};
    background: transparent;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export const IconContainer = styled.span`
  display: flex;
  padding: 8px;
  align-items: center;
  background-color: transparent;
  border-radius: 9999px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.passwordIconColor};

  &:hover {
    background-color: ${(props) => props.theme.colors.iconHoverBackground};
    border-color: ${(props) => props.theme.colors.iconBorder};
    color: ${(props) => props.theme.colors.mainTextColor};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 12px;
  margin-top: 28px;
  width: 100%;
  border: none;
`;

export const Icon = styled.img`
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 1px;
  vertical-align: middle;
`;

export const ValidationErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;

export const ErrorMessage = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: red;
`;
