import React from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from '../../hooks';

type Props = {
  children?: React.ReactNode;
};

export default function Portal(props: Props) {
  const { children } = props;
  const { loaded, portalId } = usePortal();
  return loaded ? createPortal(children, document.getElementById(portalId) as any) : <></>;
}
