import { MdClear } from 'react-icons/md';
import styled, { css } from 'styled-components';

import { ModalSize } from '.';
//import { media } from "styled-bootstrap-grid";

type ModalBgProps = {
  zIndex: string;
  background?: boolean;
};

type ModalContainerProps = {
  size?: ModalSize;
};

export const ModalBackground = styled.div<ModalBgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 100%;
  width: 100%;
  position: fixed;
  inset: 0;
  // left: 0;
  // top: 0;
  //top: 70px;
  transition: all 0.3s ease-in-out;
  z-index: ${(props) => props.zIndex};

  ${(props) =>
    props.background === true &&
    css`
      background-color: ${(props) => props.theme.colors.infoModal};
    `}
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  //margin: 0 auto;
  // align-self: center;
  // position: relative;
  padding: 15px 30px;
  border-radius: 10px;
  //height: 100%;
  width: 100%;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  overflow: hidden;
  // width: 580px;
  // max-width: 550px;
  align-self: center;
  //margin-top: 80px;
  background-color: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.size === ModalSize.SMALL &&
    css`
      width: 480px;
    `}

  ${(props) =>
    props.size === ModalSize.MEDIUM &&
    css`
      width: 500px;
    `}

  ${(props) =>
    props.size === ModalSize.LARGE &&
    css`
      width: 1000px;
    `}
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
`;

/////////////////////////////////////////

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  //padding: 0px 5px 5px 5px;
  //padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  margin-bottom: 15px;
  padding-bottom: 10px;
  //padding-top: 25px;
`;

export const ModalButtonClose = styled.button`
  border: none;
  outline: none;
  color: grey;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ModalTitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  //color: rgba("#666", 0.2);
  background-color: transparent;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  //cursor: none;
  //padding: 2px;
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  margin-left: 8px;
`;

export const ModalContent = styled.div`
  //padding: 5px;
`;

///////
export const ClearIcon = styled(MdClear)`
  color: ${(props) => props.theme.colors.gray3};
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.size5};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`;

export const HeaderContainer = styled.div`
  margin-bottom: 15px;
  // padding-bottom: 25px;
  // padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HeaderCloseButton = styled.button`
  color: rgba(0, 0, 0, 0.5);
  //color: rgba("#666", 0.2);
  background-color: transparent;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.btnSecondaryHoverFill};
  }
`;

export const ContentContainer = styled.div`
  // padding: 0px 20px 20px;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ChildrenContainer = styled.div`
  //padding-bottom: 25px;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
`;
