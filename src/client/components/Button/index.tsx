import React from 'react';

import { ButtonLabel, StyledButton } from './styles';

type ButtonProps = {
  type: 'primary' | 'secondary';
  isDisabled?: boolean;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { type, isDisabled, label, icon, onClick } = props;

  function handleClick() {
    if (isDisabled) {
      return;
    }
    onClick();
  }

  return (
    <StyledButton buttonType={type} onClick={handleClick} disabled={isDisabled} type="button">
      {icon}
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  );
}
