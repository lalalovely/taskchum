import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 25px 40px;
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadows.bigCard};
  background-color: ${(props) => props.theme.colors.cardBg};
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

export const FormSeparator = styled.hr`
  display: block;
  margin: 1em 0;
  margin-top: 25px;
  padding: 0;
  height: 1px;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};
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
  //border-radius: 3px;
  outline: none;
  justify-content: space-between;
  //box-shadow: ${(props) => props.theme.shadows.smallCard};

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
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
  padding: 3px;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray1};
  }
`;

export const ActionButton = styled.button`
  display: inline-flex;
  margin-bottom: 12px;
  margin-top: 28px;
  padding-left: 12px;
  padding-right: 12px;
  height: 36px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.smallCard};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LoginMethodsContainer = styled.div`
  width: 100%;
`;

export const LoginMethodSeparator = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const GoogleLabel = styled.span`
  display: inline-block;
  padding: 3px;
  height: 32px;
  vertical-align: middle;
  font-size: 14px;
  font-weight: bold;
  line-height: 32px;
  color: ${(props) => props.theme.colors.formLabelColor};
`;

export const Icon = styled.img`
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 1px;
  vertical-align: middle;
`;

export const LoginMethodButton = styled.div`
  display: inline-flex;
  margin-bottom: 12px;
  padding: 0 1.5rem;
  height: 39px;
  width: 100%;
  gap: 2rem;
  font-size: 14px;
  font-weight: 600;
  //font-weight: bold;
  text-align: center;
  align-items: center;
  cursor: pointer;
  //box-shadow: ${(props) => props.theme.shadows.smallCard};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.labelColor};
  //background: ${(props) => props.theme.colors.white};
  background: transparent;

  &:active {
    transform: scale(0.98);
  }
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
