import styled, { css, keyframes } from 'styled-components';

export const MainContainer = styled.div`
  padding: 0px 12px;
  max-width: 620px;
  margin: auto;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgb(165, 48, 1, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const Main = styled.div`
  margin: 0 auto;
  padding-bottom: 80px;
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
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  // background: linear-gradient(
  //   90deg,
  //   rgba(165, 48, 1, 1) 0%,
  //   rgba(242, 105, 49, 1) 35%,
  //   rgba(252, 169, 29, 1) 100%
  // );
  &:hover {
    background-color: ${(props) => props.theme.colors.gray1};
  }
`;

export const AddButtonLabel = styled.div`
  //opacity: 0.8;
  font-weight: 600;
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

export const AddForm = styled.div`
  margin-top: 12px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray1};
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  -webkit-animation: ${scaleUp} 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: ${scaleUp} 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

/**Header */

export const MainHeader = styled.div`
  display: flex;
  padding: 30px 0 14px 0;
  justify-content: space-between;
  align-items: center;
  //border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const HeaderControls = styled.div`
  display: flex;
  gap: 18px;
  //position: relative;
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
  background-color: ${(props) => props.theme.colors.gray6};

  &:hover {
    background-color: ${(props) => props.theme.colors.gray1};
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
  //margin-right: 18px;
`;

type FilterProps = {
  selected: boolean;
};

export const Filter = styled.div<FilterProps>`
  cursor: pointer;

  &:active,
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.colors.primary};
    `}
`;
