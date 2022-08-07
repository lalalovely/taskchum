import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';

import { Task } from '../../../../../commons/types/Task.type';
import TaskModal from '../TaskModal';
import HeaderDropdownMenu from './HeaderDropdownMenu';

import { MainHeader, HeaderLabel, HeaderControls, MenuButton, DropContainer } from './styles';

type Props = {
  isTaskListEmpty: boolean;
};

export default function Header(props: Props) {
  const { isTaskListEmpty } = props;
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

  function openAddTaskModal() {
    setOpenAddModal(true);
  }

  function closeAddTaskModal() {
    setOpenAddModal(false);
  }

  function handleCloseDropdownMenu() {
    setOpenDropdownMenu(false);
  }

  const displayAddTaskModal = openAddModal && (
    <TaskModal
      isNew={true}
      isOpen={openAddModal}
      onClose={closeAddTaskModal}
      task={{ name: '', description: '' } as Task}
    />
  );

  return (
    <MainHeader>
      {displayAddTaskModal}
      <HeaderLabel>My tasks</HeaderLabel>
      <HeaderControls>
        <MenuButton onClick={openAddTaskModal}>
          <MdAdd size="20px" />
        </MenuButton>
        <DropContainer>
          <MenuButton onClick={() => setOpenDropdownMenu(!openDropdownMenu)}>
            <BiDotsVertical size="20px" />
          </MenuButton>
          {openDropdownMenu && (
            <HeaderDropdownMenu
              isTaskListEmpty={isTaskListEmpty}
              onClose={handleCloseDropdownMenu}
            />
          )}
        </DropContainer>
      </HeaderControls>
    </MainHeader>
  );
}
