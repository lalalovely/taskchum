import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: rgb(196 196 196) 0px 1px 0px;
  padding: 8px 18px 20px;
  width: 350px;
  border: 1px solid #e5e5e5;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 18px;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
  opacity: 0.9;
  font-size: 14px;
  padding: 12px;
  min-width: 70px;
  background-color: white;
  color: rgb(119, 119, 119);
  font-weight: bold;
  letter-spacing: 0.02em;
  width: 100%;
  border: 1px solid rgb(238, 238, 238);

  &:active {
    transform: scale(0.98);
    //box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.h2`
  font-size: 20px;
  margin: 8px 0;
  text-align: center;
  line-height: 1.1;
`;

export const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 0px;
  width: 100%;
`;

export const Label = styled.div`
  color: rgb(196, 196, 196);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  margin: 15px 0 10px;
`;

export const GoogleIcon = styled.img`
  width: 18px;
  margin-right: 8px;
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

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export const FormMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //max-width: 320px;
`;

export const FormWrapper = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
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
  width: 42%;
  height: 1px;
  background-color: #e5e5e5;
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
  border-radius: 4px;
  background-color: rgb(239, 239, 239);
  font-size: 14px;
  padding: 12px 10px;
  box-shadow: none;
  border: none;
  color: rgb(85, 85, 85);
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;

export const ActionButton = styled.button`
  margin-top: 28px;
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

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    color: ${(props) => props.theme.colors.btnPrimaryHoverTint};
  }

  &:active {
    transform: scale(0.98);
    //box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
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

export const ErrorMessage = styled.p`
  color: red;
`;
