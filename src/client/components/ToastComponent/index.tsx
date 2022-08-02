import React from 'react';
import { MdClose } from 'react-icons/md';

import Portal from '../Portal';

import {
  ToastContainer,
  ToastBody,
  MessageContainer,
  ButtonContainer,
  ButtonClose,
  CloseButton,
  ActionsArea,
  Open,
} from './styles';

export enum ToastType {
  ERROR = 'error',
  SUCCESS = 'success',
}

type Props = {
  type: ToastType;
  message: string;
  onClose?: () => void;
};

export default function ToastComponent(props: Props) {
  const { type, message, onClose } = props;

  console.log('MESSAGE:: ', message);
  return (
    <ToastContainer>
      <ToastBody type={type}>
        <MessageContainer>{message}</MessageContainer>
        <ActionsArea>
          <ButtonContainer>
            <CloseButton onClick={onClose}>
              <MdClose size="18px" />
            </CloseButton>
          </ButtonContainer>
        </ActionsArea>
      </ToastBody>
    </ToastContainer>
  );
}
