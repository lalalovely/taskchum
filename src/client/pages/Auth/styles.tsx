import styled from 'styled-components';

export const LogoText = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary};
  margin: 0px;
  padding: 10px 0px;
  font-size: 50px;
`;

export const PageContainer = styled.div`
  //height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  width: 100%;
  //transition: background-color 0.5s ease-in-out 0s;
  padding-bottom: 15px;
  // padding-top: 0px;
  margin: 0 auto;
`;

export const MainWrapper = styled.div`
  min-height: calc(100vh - 5px);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // padding: 0px 18px;
  width: 100%;
  margin: 0 auto;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
`;

export const Option = styled.div`
  color: rgba(55, 53, 47, 0.65);
  font-size: 14px;
  line-height: 1.6;
  margin-top: 20px;
  text-align: center;
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: rgb(196 196 196) 0px 1px 0px;
  padding: 8px 18px 32px;
  width: 350px;
`;

export const ButtonContainer = styled.div`
  margin-top: 18px;
`;

export const GoogleButton = styled.button`
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
  margin-bottom: 5vh;
`;

export const FormWrapper = styled.div`
  width: 100%;
`;
