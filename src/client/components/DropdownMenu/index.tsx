import React from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { DropdownOption } from '../../../commons/types/DropdownOption.type';

import { Container, Menu, MenuItem, MenuItemLabel } from './styles';

type Props = {
  options: DropdownOption[];
  onSelect: (optionId: number) => void;
  onClose: () => void;
};

export default function DropdownMenu(props: Props) {
  const { options, onSelect, onClose } = props;

  const menuItems = options.map((option: DropdownOption) => {
    function handleSelect() {
      onSelect(option.id);
    }

    return (
      <MenuItem key={option.id} onClick={handleSelect} disabled={option.disabled}>
        {option.icon}
        <MenuItemLabel>{option.name}</MenuItemLabel>
      </MenuItem>
    );
  });

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Container>
        <Menu>{menuItems}</Menu>
      </Container>
    </ClickAwayListener>
  );
}
