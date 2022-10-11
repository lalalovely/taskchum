import React from 'react';
import Modal, { ModalSize } from '../Modal';
import { DialogMessage } from './styles';

export interface AlertOptions {
  catchOnCancel?: boolean;
  variant: 'error' | 'info' | 'warning';
  message: string;
  title: string;
  confirmText?: string;
}

interface AlertDialogProps extends AlertOptions {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AlertDialog(props: AlertDialogProps) {
  const { variant, confirmText, title, message, open, onConfirm, onCancel } = props;

  return (
    <Modal
      isOpen={open}
      order="999"
      title={title}
      type={variant}
      confirmLabel={confirmText ? confirmText : title}
      size={ModalSize.SMALL}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      <DialogMessage>{message}</DialogMessage>
    </Modal>
  );
}
