import styled, { css } from 'styled-components';

import { ModalSize } from '.';

type ModalBgProps = {
  zIndex: string;
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
  background-color: ${(props) => props.theme.colors.modalBg};
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  padding: 25px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  align-self: center;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  background-color: ${(props) => props.theme.colors.modalContainerBg};

  ${(props) =>
    props.size === ModalSize.SMALL &&
    css`
      width: 480px;
    `}

  ${(props) =>
    props.size === ModalSize.MEDIUM &&
    css`
      width: 600px;
    `}

  ${(props) =>
    props.size === ModalSize.LARGE &&
    css`
      width: 1000px;
    `}
`;

export const ModalHeader = styled.div``;

export const ModalTitle = styled.div`
  display: flex;
  padding: 0;
  outline: none;
  font-size: 2rem;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.labelColor};
  background-color: transparent;
`;

export const ModalBody = styled.div`
  padding-top: 1.25rem;
`;

export const BodyContainer = styled.div`
  height: 100%;
`;
