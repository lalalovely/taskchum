import styled from 'styled-components';

import { Input, Text } from '../../components';

export const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  padding-bottom: 10rem;
`;

export const MainArea = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
`;

export const HeaderText = styled(Text)`
  margin: 16px 0;
  color: white;
`;

export const InputWrapper = styled.div`
  display: inline-flex;
  //margin: 10px 0;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  //margin-right: 10px;
`;

//---------------------------------------------------
export const TaskPageContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  width: 100%;
  color: white;
  transition: background-color 0.5s ease-in-out 0s;
  //overflow: hidden;
`;

export const MainWrapper = styled.div`
  //position: relative;
  // unhide this if needed
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: block;
`;

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-height: 380px;
  background-color: ${(props) => props.theme.colors.background};
  // unhide this if needed
  overflow: auto;
  position: relative;
  height: 100%;
  margin: 0 auto;
  // padding-left: 70px;
  // padding-right: 60px;
  // add media query
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 2;
  // padding-left: 55px;
  // padding-right: 55px;
  padding-top: 12px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const TaskListWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  width: 100%;
  position: relative;
  //z-index: 1;
  padding-left: 55px;
  //padding-right: 55px;
  flex: 5;
`;

export const TaskList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.iconDisabled};
  margin-left: auto;
  margin-top: 6px;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8px;
  max-width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid transparent;
  align-items: center; //flex-start
  word-break: break-word;
  justify-content: space-between;
`;

export const HeaderLabel = styled.h1`
  border-radius: 5px;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
