import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0px 12px;
  max-width: 620px;
  margin: auto;
`;

export const Wrapper = styled.div`
  text-align: center;
  //overflow: hidden;
`;

export const DividerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin-bottom: 15px;
`;

export const Divider = styled.div`
  height: 3px;
  background-color: white;
  border-radius: 100px;
  transform: translateY(-1px);
  width: 0%;
`;

export const Main = styled.div`
  max-width: 480px;
  //margin: 20px auto 42px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 100px;
  z-index: 2;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  padding: 30px 0 14px 0;
  //position: sticky;
  //z-index: 5;
`;

export const HeaderLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderControls = styled.div`
  position: relative;
  display: flex;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  //opacity: 0.9;
  //background: none rgba(255, 255, 255, 0.2);
  //background-color: ${(props) => props.theme.colors.primary};
  //border: 1px solid ${(props) => props.theme.colors.primary};
  border: none;
  box-shadow: none;
  margin-left: 8px;
  font-size: 13px;
  padding: 8px;
  min-width: auto;
  //border: none;
  color: ${(props) => props.theme.colors.primary} !important;
  background-color: #ededed;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const TaskList = styled.div`
  margin-top: 18px;
`;

export const AddTaskButton = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 30px;
  //background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  //opacity: 0.8;
  //margin-top: 12px;
  // border: 2px dashed rgba(255, 255, 255, 0.4);
  border: 2px dashed ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  //opacity: 0.9;
  background-color: #ededed;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const AddButtonLabel = styled.div`
  opacity: 0.8;
  font-weight: bold;
`;

export const AddForm = styled.div`
  //background-color: white;
  border-radius: 8px;
  margin-top: 12px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  animation: 0.1s ease-in-out 0s 1 normal none running expand;
  border: 1px solid #e5e5e5;
`;

export const DropContainer = styled.div`
  position: relative;
`;
