import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 0px 12px;
  max-width: 620px;
  margin: auto;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Main = styled.div`
  margin: 0 auto;
  padding-bottom: 100px;
  max-width: 480px;
  text-align: center;
  z-index: 2;
`;

export const TaskList = styled.ul`
  margin-top: 18px;
`;

export const AddTaskButton = styled.div`
  display: flex;
  margin-top: 30px;
  height: 60px;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px dashed ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
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
  margin-top: 12px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  animation: 0.1s ease-in-out 0s 1 normal none running expand;
`;

/**Header */

export const MainHeader = styled.div`
  display: flex;
  padding: 30px 0 14px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

export const HeaderLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderControls = styled.div`
  display: flex;
  position: relative;
`;

export const MenuButton = styled.button`
  display: flex;
  margin-left: 8px;
  padding: 8px;
  min-width: auto;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: none;
  color: ${(props) => props.theme.colors.primary} !important;
  background-color: #ededed;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const DropContainer = styled.div`
  position: relative;
`;
