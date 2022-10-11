import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { MdExpandMore } from 'react-icons/md';

import { DropdownOption } from '../../../commons/types/DropdownOption.type';

import { Button, Container, Menu, MenuItem, MenuItemLabel } from './styles';

type Props = {
  options: DropdownOption[];
  selected: DropdownOption;
  onSelect: (optionId: number) => void;
};

export default function DropdownSelect(props: Props) {
  const { options, onSelect, selected } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggleVisibility() {
    setIsOpen(!isOpen);
  }

  const menuItems = options.map((option: DropdownOption) => {
    function handleSelect() {
      onSelect(option.id);
      handleToggleVisibility();
    }

    return (
      <MenuItem
        key={option.id}
        onClick={handleSelect}
        disabled={option.disabled}
        active={option.id === selected.id}
      >
        {option.icon}
        <MenuItemLabel>{option.name}</MenuItemLabel>
      </MenuItem>
    );
  });

  return (
    <>
      <Button title="Filter tasks" role="button" onClick={handleToggleVisibility}>
        {selected.name}
        <MdExpandMore size="20px" />
      </Button>
      {isOpen && (
        <ClickAwayListener onClickAway={handleToggleVisibility}>
          <Container>
            <Menu>{menuItems}</Menu>
          </Container>
        </ClickAwayListener>
      )}
    </>
  );
}
