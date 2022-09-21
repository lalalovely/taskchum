import React from 'react';

import Portal from '../Portal';

import {
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalHeader,
  ModalBody,
  BodyContainer,
} from './styles';

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  isOpen: boolean;
  order: string;
  size?: ModalSize;
  children?: React.ReactNode;
  label?: React.ReactNode;
};

export default function Modal(props: Props) {
  const { children, isOpen, order, label, size } = props;

  if (!isOpen) return null;

  function handleClick(e: React.KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <ModalBackground zIndex={order}>
        <ModalContainer size={size} onClick={handleClick as any}>
          <ModalHeader>
            <ModalTitle>{label}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <BodyContainer>{children}</BodyContainer>
          </ModalBody>
        </ModalContainer>
      </ModalBackground>
    </Portal>
  );
}
