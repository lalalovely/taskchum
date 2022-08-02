import React from 'react';

import { StyledText } from './styles';

type Props = {
  className?: string;
  label: string;
  type?: string;
};

export default function Text(props: Props) {
  const { className, label, type } = props;

  return (
    <StyledText className={className} type={type}>
      {label}
    </StyledText>
  );
}
