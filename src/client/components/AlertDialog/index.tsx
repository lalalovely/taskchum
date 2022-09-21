import React from 'react';
import { MdOutlineErrorOutline, MdOutlineInfo, MdOutlineWarningAmber } from 'react-icons/md';
import Button from '../Button';
import Modal, { ModalSize } from '../Modal';
import {
  ButtonContainer,
  DialogActionButtons,
  DialogBody,
  DialogFooter,
  DialogMessage,
} from './styles';

export interface AlertOptions {
  catchOnCancel?: boolean;
  variant: 'error' | 'info' | 'warning';
  message: string;
  confirmText?: string;
}

interface AlertDialogProps extends AlertOptions {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AlertDialog(props: AlertDialogProps) {
  const { variant, confirmText, message, open, onConfirm, onCancel } = props;

  const icon = () => {
    switch (variant) {
      case 'info':
        return <MdOutlineInfo color="#ffcb72" />;
      case 'error':
        return <MdOutlineErrorOutline color="#b00020" />;
      case 'warning':
        return <MdOutlineWarningAmber color="#cc3300" />;
      default:
        return <></>;
    }
  };

  return (
    <Modal isOpen={open} order="999" label={icon()} size={ModalSize.SMALL}>
      <DialogBody>
        <DialogMessage>{message}</DialogMessage>
      </DialogBody>
      <DialogFooter>
        <DialogActionButtons>
          {variant === 'error' ? (
            <ButtonContainer>
              <Button type="primary" onClick={onConfirm} label="OK" />
            </ButtonContainer>
          ) : (
            <>
              <ButtonContainer>
                <Button type="secondary" onClick={onCancel} label="Cancel" />
              </ButtonContainer>
              <ButtonContainer>
                <Button type="primary" onClick={onConfirm} label={confirmText} />
              </ButtonContainer>
            </>
          )}
        </DialogActionButtons>
      </DialogFooter>
    </Modal>
  );
}
