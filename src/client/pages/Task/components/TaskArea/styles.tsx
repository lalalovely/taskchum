import styled, { css, keyframes } from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
`;

export const Main = styled.div`
  padding: 0 30px;
  max-width: 620px;
  margin: 20px auto;
  background: transparent;
  box-shadow: 0 8px 32px 0 rgb(165, 48, 1, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: calc(100vh - 100px);
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
    background-color: ${(props) => props.theme.colors.fieldLabelColor};
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const TaskList = styled.ul`
  margin-top: 18px;
  width: 100%;
  list-style-type: none;
  padding-right: 20px;
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

/**Header */

export const HeaderContainer = styled.div``;

export const MainHeader = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  // .filterBtn {
  //   display: none;
  // }

  // @media (max-width: 425px) {
  //   .filters {
  //     display: none;
  //   }

  //   .filterBtn {
  //     display: block;
  //   }
  // }
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
  //background-color: ${(props) => props.theme.colors.gray6};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.gray2};

  &:hover {
    background-color: ${(props) => props.theme.colors.gray2};
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
