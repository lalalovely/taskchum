import React from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { DropdownOption } from '../../../commons/types/DropdownOption.type';

import { Container, Menu, MenuItem, MenuItemLabel } from './styles';

type Props = {
  options: DropdownOption[];
  onSelect: (optionId: number) => void;
  onClose: () => void;
  header?: React.ReactNode;
};

export default function DropdownMenu(props: Props) {
  const { options, onSelect, onClose, header } = props;

  const menuItems = options.map((option: DropdownOption) => {
    function handleSelect() {
      onSelect(option.id);
      onClose();
    }

    return (
      <MenuItem key={option.id} onClick={handleSelect}>
        {option.icon}
        <MenuItemLabel>{option.name}</MenuItemLabel>
      </MenuItem>
    );
  });

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Container>
        <Menu>
          {header}
          {menuItems}
        </Menu>
      </Container>
    </ClickAwayListener>
  );
}
