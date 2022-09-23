import React, { useState } from 'react';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';

import { Task } from '../../../../../commons/types/Task.type';
import TaskModal from '../TaskModal';
import HeaderDropdownMenu from './HeaderDropdownMenu';

import {
  MainHeader,
  HeaderLabel,
  HeaderControls,
  MenuButton,
  DropContainer,
  HeaderContainer,
} from './styles';
import HeaderFilterMenu from './HeaderFilterMenu';

type Props = {
  isTaskListEmpty: boolean;
  setFilter: (filter: string) => void;
};

export default function Header(props: Props) {
  const { isTaskListEmpty, setFilter } = props;
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

  function handleAddTaskModalVisibility() {
    setOpenAddModal(!openAddModal);
  }

  function handleDropdownMenuVisibility() {
    setOpenDropdownMenu(!openDropdownMenu);
  }

  const displayAddTaskModal = openAddModal && (
    <TaskModal
      isNew={true}
      isOpen={openAddModal}
      onClose={handleAddTaskModalVisibility}
      task={{ name: '', description: '' } as Task}
    />
  );

  return (
    <HeaderContainer>
      <MainHeader>
        {displayAddTaskModal}
        <HeaderLabel>My Tasks</HeaderLabel>
        <HeaderControls>
          <HeaderFilterMenu setFilter={setFilter} />
          <MenuButton onClick={handleAddTaskModalVisibility}>
            <MdAdd size="20px" color="#505f79" />
          </MenuButton>
          <DropContainer>
            <MenuButton onClick={handleDropdownMenuVisibility}>
              <MdDeleteOutline size="20px" color="#505f79" />
            </MenuButton>
            {openDropdownMenu && (
              <HeaderDropdownMenu
                isTaskListEmpty={isTaskListEmpty}
                onClose={handleDropdownMenuVisibility}
              />
            )}
          </DropContainer>
        </HeaderControls>
      </MainHeader>
    </HeaderContainer>
  );
}
