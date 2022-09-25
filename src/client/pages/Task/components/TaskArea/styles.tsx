import styled, { css, keyframes } from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
`;

export const Main = styled.div`
  padding: 0 30px;
  margin: 10px auto;
  max-width: 620px;
  //height: 100vh;
  height: calc(100vh - 100px);
  background: ${(props) => props.theme.colors.cardBg};
  box-shadow: ${(props) => props.theme.shadows.bigCard}};
  //border-radius: 10px;
  //border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;

  @media (max-width: 425px) {
    border: none;
    box-shadow: none;
  }
`;

export const TaskListContainer = styled.div`
  height: 82%;
  overflow: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray2};

    &:hover {
      background-color: ${(props) => props.theme.colors.gray3};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const TaskList = styled.ul`
  margin-top: 18px;
  width: 100%;
  list-style-type: none;
  padding: 0 15px 0 10px;
`;

export const AddTaskContainer = styled.div`
  display: flex;
  height: 82%;
  align-items: center;
  justify-content: center;
`;

export const AddTaskBtn = styled.button`
  display: inline-flex;
  background-color: transparent;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: none;
  content: none;
  color: ${(props) => props.theme.colors.primary};

  &:active {
    transform: scale(0.98);
  }
`;

const scaleUp = keyframes`
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }

  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
`;

export const AddTaskBtnContainer = styled.div`
  padding: 20px 10px;
`;

export const AddForm = styled.div`
  margin-top: 12px;
  padding: 20px;
  // border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray1};
  // box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  -webkit-animation: ${scaleUp} 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${scaleUp} 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

/**Header */

export const HeaderContainer = styled.div``;

export const MainHeader = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border}; //rgba(255, 255, 255, 0.1);
`;

export const HeaderLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  //gap: 16px;
`;

export const MenuButton = styled.button`
  display: flex;
  margin-left: 8px;
  padding: 8px;
  height: 32px;
  min-width: auto;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: ${(props) => props.theme.shadows.icon};
  background-color: ${(props) => props.theme.colors.iconBg};
  font-size: 20px;
  color: ${(props) => props.theme.colors.iconColor};
  //border: 1px solid ${(props) => props.theme.colors.gray2};

  &:hover {
    //background-color: ${(props) => props.theme.colors.gray2};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const DropContainer = styled.div`
  position: relative;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.fieldLabelColor};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

type FilterProps = {
  selected: boolean;
};

export const Filter = styled.div<FilterProps>`
  cursor: pointer;

  &:active,
  &:hover {
    //color: ${(props) => props.theme.colors.primary};
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.colors.primaryLight};
      // padding-bottom: 3px;
      // border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    `}
`;
