import React from 'react';
import { MdClose } from 'react-icons/md';

import Portal from '../Portal';

import {
  ModalBackground,
  ModalContainer,
  ModalTitle,
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderCloseButton,
  ContentContainer,
  ChildrenContainer,
} from './styles';

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  children?: React.ReactNode;
  label?: React.ReactNode;
  background?: boolean;
  zIndex: string;
};

export default function Modal(props: Props) {
  const { children, onClose, isOpen, zIndex, label, background, size } = props;

  if (!isOpen) return null;

  function handleClick(e: React.KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <ModalBackground onClick={onClose} zIndex={zIndex} background={background}>
        <ModalContainer size={size} onClick={handleClick as any}>
          <HeaderContainer>
            <ModalTitle>{label}</ModalTitle>
            <HeaderButtonsContainer>
              <HeaderCloseButton onClick={onClose} title="Close Modal">
                <MdClose size="20px" />
              </HeaderCloseButton>
            </HeaderButtonsContainer>
          </HeaderContainer>
          <ContentContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
          </ContentContainer>
        </ModalContainer>
      </ModalBackground>
    </Portal>
  );
}
