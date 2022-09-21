import React, { createContext, useContext, useEffect, useState } from 'react';
import AlertDialog, { AlertOptions } from '../components/AlertDialog';

const SHOW_DIALOG_EVENT = 'dialog:show';
const HIDE_DIALOG_EVENT = 'dialog:hide';

const AlertDialogContext = createContext<(options: AlertOptions) => Promise<void>>(Promise.reject);

export const useAlertDialog = () => useContext(AlertDialogContext);

type AlertDialogProviderProps = {
  children?: React.ReactNode;
};

export function AlertDialogProvider(props: AlertDialogProviderProps) {
  const [alertDialogState, setAlertDialogState] = useState<AlertOptions | null>();

  const awaitingPromiseRef = React.useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openAlertDialog = (options: AlertOptions) => {
    setAlertDialogState(options);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleCancel = () => {
    if (alertDialogState) {
      if (alertDialogState.catchOnCancel && awaitingPromiseRef.current) {
        awaitingPromiseRef.current.reject();
      }

      hideDialog();
    }
  };

  const handleConfirm = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    hideDialog();
  };

  function showDialog(event: CustomEvent) {
    setAlertDialogState({
      variant: event.detail.variant,
      message: event.detail.message,
    });
  }

  function hideDialog() {
    setAlertDialogState(null);
  }

  useEffect(() => {
    document.addEventListener(SHOW_DIALOG_EVENT, showDialog as any);
    document.addEventListener(HIDE_DIALOG_EVENT, hideDialog);

    return () => {
      document.removeEventListener(SHOW_DIALOG_EVENT, showDialog as any);
      document.removeEventListener(HIDE_DIALOG_EVENT, hideDialog);
    };
  }, []);

  return (
    <>
      <AlertDialogContext.Provider value={openAlertDialog}>
        {props.children}
      </AlertDialogContext.Provider>

      <AlertDialog
        open={Boolean(alertDialogState)}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        variant={alertDialogState?.variant || 'info'}
        message={alertDialogState?.message || ''}
        {...alertDialogState}
      />
    </>
  );
}

export function showError(message: string, variant: string) {
  const event = new CustomEvent(SHOW_DIALOG_EVENT, { detail: { message, variant } });
  document.dispatchEvent(event);
}

export function hideError() {
  const event = new CustomEvent(HIDE_DIALOG_EVENT);
  document.dispatchEvent(event);
}
