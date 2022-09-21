import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';

import {
  ToastContainer,
  ToastBody,
  MessageContainer,
  ButtonContainer,
  CloseButton,
  ActionsArea,
} from './styles';

const SHOW_TOAST_EVENT = 'toast:show';
const HIDE_TOAST_EVENT = 'toast:hide';

export default function Toast() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<string>('success');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function showToast(event: CustomEvent) {
    setIsVisible(true);
    setMessage(event.detail.message);
    setType(event.detail.type);
  }

  function hideToast() {
    setIsVisible(false);
    setMessage('');
  }

  useEffect(() => {
    document.addEventListener(SHOW_TOAST_EVENT, showToast as any);
    document.addEventListener(HIDE_TOAST_EVENT, hideToast);

    if (containerRef.current) {
      containerRef.current?.addEventListener('animationend', () => {
        hideToast();
      });
    }
    return () => {
      document.removeEventListener(SHOW_TOAST_EVENT, showToast as any);
      document.removeEventListener(HIDE_TOAST_EVENT, hideToast);
    };
  }, []);

  return (
    <ToastContainer isVisible={isVisible} ref={containerRef}>
      <ToastBody type={type}>
        <MessageContainer>{message}</MessageContainer>
        <ActionsArea>
          <ButtonContainer>
            <CloseButton onClick={hideToast}>
              <MdClose size="18px" />
            </CloseButton>
          </ButtonContainer>
        </ActionsArea>
      </ToastBody>
    </ToastContainer>
  );
}

export function showToast(message: string, type: string) {
  const event = new CustomEvent(SHOW_TOAST_EVENT, { detail: { message, type } });
  document.dispatchEvent(event);
}

export function hideToast() {
  const event = new CustomEvent(HIDE_TOAST_EVENT);
  document.dispatchEvent(event);
}
