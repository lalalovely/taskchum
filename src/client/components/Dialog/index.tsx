import React, { useState } from 'react';
import { MdOutlineErrorOutline, MdOutlineInfo, MdOutlineWarningAmber } from 'react-icons/md';

import Button from '../Button';
import Modal, { ModalSize } from '../Modal';

import {
  DialogMessage,
  DialogActionButtonsContainer,
  DialogActionButtons,
  ButtonContainer,
} from './styles';

export enum DialogType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

type Props = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  type: DialogType;
  message: string;
  confirmText: string;
};

const SHOW_DIALOG = 'dialog:show';
const HIDE_DIALOG = 'dialog:hide';

export default function Dialog(props: Props) {
  const { isOpen, onCancel, onConfirm, type, message, confirmText } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const infoIcon = <MdOutlineInfo size="20px" />;
  const errorIcon = <MdOutlineErrorOutline size="20px" />;
  const warningIcon = <MdOutlineWarningAmber size="20px" />;
  const defaultIcon = <></>;

  const iconTitle = () => {
    switch (type) {
      case DialogType.INFO:
        return infoIcon;
      case DialogType.WARNING:
        return warningIcon;
      case DialogType.ERROR:
        return errorIcon;
      default:
        return defaultIcon;
    }
  };

  function showDialog(event: CustomEvent) {
    setIsVisible(true);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      zIndex="999"
      label={iconTitle()}
      size={ModalSize.SMALL}
      background={true}
    >
      <DialogMessage>{message}</DialogMessage>
      <DialogActionButtonsContainer>
        <DialogActionButtons>
          <ButtonContainer>
            <Button type="secondary" onClick={onCancel} label="Cancel" />
          </ButtonContainer>
          <ButtonContainer>
            <Button type="primary" onClick={onConfirm} label={confirmText} />
          </ButtonContainer>
        </DialogActionButtons>
      </DialogActionButtonsContainer>
    </Modal>
  );
}
