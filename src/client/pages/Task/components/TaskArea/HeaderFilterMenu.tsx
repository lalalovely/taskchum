import React from 'react';
import { MdCheckCircle, MdCheckCircleOutline, MdOutlineFormatListBulleted } from 'react-icons/md';
import DropdownSelect from 'src/client/components/DropdownSelect';

type HeaderFilterMenuProps = {
  setFilter: (filter: string) => void;
};

export default function HeaderFilterMenu(props: HeaderFilterMenuProps) {
  const { setFilter } = props;

  const dropdownMenuOptions = [
    {
      id: 1,
      name: 'All',
      icon: <MdOutlineFormatListBulleted />,
      disabled: false,
    },
    { id: 2, name: 'Active', icon: <MdCheckCircleOutline />, disabled: false },
    { id: 3, name: 'Completed', icon: <MdCheckCircle />, disabled: false },
  ];

  function handleSelect(optionId: number) {
    setFilter(dropdownMenuOptions[optionId - 1].name.toLocaleLowerCase());
  }

  return <DropdownSelect options={dropdownMenuOptions} onSelect={handleSelect} />;
}
