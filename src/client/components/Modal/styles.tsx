import styled, { css } from 'styled-components';

import { ModalSize } from '.';

type ModalBgProps = {
  zIndex: string;
};

type ModalContainerProps = {
  type?: string;
  size?: ModalSize;
};

export const Background = styled.div<ModalBgProps>`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
  inset: 0;
  transition: all 0.3s ease-in-out;
  z-index: ${(props) => props.zIndex};
  background-color: ${(props) => props.theme.colors.modalOverlayBackground};
`;

export const Container = styled.div<ModalContainerProps>`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  background-color: ${(props) => props.theme.colors.modalCardBackground};

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

  @media (max-width: 425px) {
    width: 90%;

    ${(props) =>
      props.type !== 'default' &&
      css`
        width: 80%;
      `}
  }
`;

export const Header = styled.header`
  padding: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.div`
  margin: 0;
  flex-grow: 1;
  font-size: 18px;
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.modalTitle};
`;

export const Body = styled.div`
  margin-bottom: 16px;
  padding: 20px;
`;

export const BodyContainer = styled.div`
  height: 100%;
`;

export const Footer = styled.div`
  position: relative;
  padding: 20px;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  margin-top: 0;
  width: 100%;
`;

export const ButtonClose = styled.button`
  margin: 0;
  background-color: transparent;
  border-style: none;
  color: inherit;
  font-size: 18px;
  color: ${(props) => props.theme.colors.modalClose};
  cursor: pointer;
  transition: all 0.18s ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.modalCloseHover};
  }
`;

export const ButtonContainer = styled.div`
  padding: 0;
  margin-right: 10px;
`;

export const ExtraOperation = styled.a`
  color: #e54e40;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;
