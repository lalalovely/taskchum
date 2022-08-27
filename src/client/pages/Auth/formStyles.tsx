import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 25px 40px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  background-color: ${(props) => props.theme.colors.white};
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

export const FormHeader = styled.h1`
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  text-align: center;
  color: ${(props) => props.theme.colors.formLabel};
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  color: #37352fa6; //rgba(55, 53, 47, 0.65);
`;

export const FormSeparator = styled.hr`
  display: block;
  margin: 1em 0;
  margin-top: 25px;
  padding: 0;
  height: 1px;
  border: 0;
  border-top: 1px solid hsl(0, 0%, 80%);
`;

export const Label = styled.div`
  margin: 15px 0 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.fieldLabel};
`;

export const Input = styled.input`
  padding: 0.5em;
  height: 44px;
  width: 100%;
  max-width: 400px;
  font-size: 14px;
  background-color: #fafbfc;
  border: 1px solid #dfe1e6;
  border-radius: 3px;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
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
  font-weight: 500;
  line-height: 1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary}; //rgb(253, 245, 242);
  box-shadow: rgb(15 15 15 / 10%) 0px 1px 2px, rgb(235 87 87 / 30%) 0px 0px 0px 1px inset;

  &:hover {
    color: ${(props) => props.theme.colors.btnPrimaryHoverTint};
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
  color: rgba(55, 53, 47, 0.65);
`;

export const GoogleLabel = styled.span`
  display: inline-block;
  padding: 3px;
  height: 32px;
  vertical-align: middle;
  font-size: 14px;
  font-weight: bold;
  line-height: 32px;
  color: ${(props) => props.theme.colors.formLabel};
`;

export const GoogleIcon = styled.img`
  display: inline-block;
  margin-right: 10px;
  height: 18px;
  width: 18px;
  border-radius: 1px;
  vertical-align: middle;
`;

export const GoogleButton = styled.div`
  display: inline-flex;
  margin-bottom: 12px;
  padding-top: 0;
  height: 39px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
  border-radius: 3px;
  color: #505f79;
  background: ${(props) => props.theme.colors.white};

  &:active {
    transform: scale(0.98);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;
