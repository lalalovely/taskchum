import styled, { css } from 'styled-components';

import { ModalSize } from '.';

type ModalBgProps = {
  zIndex: string;
  background?: boolean;
};

type ModalContainerProps = {
  size?: ModalSize;
};

export const ModalBackground = styled.div<ModalBgProps>`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
  inset: 0;
  transition: all 0.3s ease-in-out;
  z-index: ${(props) => props.zIndex};

  ${(props) =>
    props.background === true &&
    css`
      background-color: ${(props) => props.theme.colors.infoModal};
    `}
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  padding: 25px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  align-self: center;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
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

export const ModalTitle = styled.div`
  display: flex;
  padding: 0;
  outline: none;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const HeaderCloseButton = styled.button`
  display: flex;
  padding: 0;
  color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.btnSecondaryHoverFill};
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
`;

export const ChildrenContainer = styled.div`
  //padding-bottom: 25px;
`;
