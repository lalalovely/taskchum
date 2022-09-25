import React, { useState } from 'react';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';
import { BiDotsVertical } from 'react-icons/bi';

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
import { Button } from 'src/client/components';

type Props = {
  isTaskListEmpty: boolean;
  currentFilter: string;
  setFilter: (filter: string) => void;
};

export default function Header(props: Props) {
  const { isTaskListEmpty, currentFilter, setFilter } = props;
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
          <HeaderFilterMenu setFilter={setFilter} currentFilter={currentFilter} />
          {/* <MenuButton onClick={handleAddTaskModalVisibility}>
            <MdAdd />
          </MenuButton> */}
          <Button label="Add Task" type={'primary'} onClick={handleAddTaskModalVisibility} />
          <DropContainer>
            <MenuButton onClick={handleDropdownMenuVisibility}>
              <BiDotsVertical />
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
