import React from 'react';
import { MdClose } from 'react-icons/md';
import Button from '../Button';

import Portal from '../Portal';

import {
  Background,
  Container,
  Title,
  Header,
  Body,
  BodyContainer,
  Footer,
  ButtonClose,
  HeaderContent,
  FooterContent,
  ActionButtons,
  ButtonContainer,
  ExtraOperation,
} from './styles';

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type Props = {
  isOpen: boolean;
  order: string;
  title: string;
  confirmLabel: string;
  type: 'info' | 'error' | 'warning' | 'default';
  confirmDisable?: boolean;
  size?: ModalSize;
  children?: React.ReactNode;
  extraOperationLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
  onOtherOperation?: () => void;
};

export default function Modal(props: Props) {
  const {
    children,
    isOpen,
    order,
    title,
    size,
    type,
    confirmLabel,
    confirmDisable,
    extraOperationLabel,
    onCancel,
    onConfirm,
    onOtherOperation,
  } = props;

  if (!isOpen) return null;

  function handleClick(e: React.KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Background zIndex={order}>
        <Container type={type} size={size} onClick={handleClick as any}>
          <Header>
            <HeaderContent>
              <Title>{title}</Title>
              <ButtonClose onClick={onCancel}>
                <MdClose />
              </ButtonClose>
            </HeaderContent>
          </Header>
          <Body>
            <BodyContainer>{children}</BodyContainer>
          </Body>
          <Footer>
            <FooterContent>
              <>
                <ExtraOperation onClick={onOtherOperation}>{extraOperationLabel}</ExtraOperation>
              </>
              <ActionButtons>
                <ButtonContainer style={{ marginRight: 0 }}>
                  <Button
                    label={type === 'error' ? 'OK' : confirmLabel}
                    type="primary"
                    isDisabled={confirmDisable}
                    onClick={onConfirm}
                  />
                </ButtonContainer>

                {type === 'error' ? (
                  <></>
                ) : (
                  <ButtonContainer>
                    <Button label="Cancel" type="secondary" onClick={onCancel} />
                  </ButtonContainer>
                )}
              </ActionButtons>
            </FooterContent>
          </Footer>
        </Container>
      </Background>
    </Portal>
  );
}
