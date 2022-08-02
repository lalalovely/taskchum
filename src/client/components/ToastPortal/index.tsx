import React, { forwardRef, FunctionComponent, Ref, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';

import { uuid } from '../../../commons/utils/GenerateUuid';
import Portal from '../Portal';
import ToastComponent, { ToastType } from '../ToastComponent';

export type ToastObj = {
  id: string;
  message: string;
  type: ToastType;
};

export type ToastAction = {
  addToast: (toast: ToastObj) => void;
};

type Props = {
  autoCloseTime?: 500;
};

const ToastPortal = forwardRef<ToastAction, Props>((props, ref) => {
  const [toasts, setToasts] = useState<ToastObj[]>([]);

  useImperativeHandle(ref, () => ({
    addToast(toast: ToastObj) {
      setToasts([...toasts, { ...toast, id: uuid() }]);
      console.log('HERE TO DISPLAY TOAST', toast);
    },
  }));

  const removeToast = (id: string) => {
    setToasts(toasts.filter((t) => t.id !== id));
  };

  const displayToastList = () => {
    return toasts.map((toast) => {
      return (
        <ToastComponent
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      );
    });
  };

  return (
    <Portal>
      <ToastListContainer>{displayToastList()}</ToastListContainer>
    </Portal>
  );
});

ToastPortal.displayName = 'ToastPortal';

export default ToastPortal;

export const ToastListContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 500px;
`;
