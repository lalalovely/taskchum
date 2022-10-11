import React, { useState } from 'react';
import { MdAddTask } from 'react-icons/md';

import { Task } from './../../../../../../../commons/types/Task.type';
import TaskModal from '../../../TaskModal';
import HeaderDropdownMenu from '../HeaderDropdownMenu';

import {
  MainHeader,
  HeaderLabel,
  HeaderControls,
  MenuButton,
  DropContainer,
  HeaderContainer,
} from './styles';
import HeaderFilterMenu from '../HeaderFilterMenu';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

type Props = {
  isTaskListEmpty: boolean;
  currentFilter: string;
  isFixed: boolean;
  setFilter: (filter: string) => void;
};

export default function Header(props: Props) {
  const { isTaskListEmpty, currentFilter, setFilter, isFixed } = props;
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
      isModal={true}
      isOpen={openAddModal}
      onClose={handleAddTaskModalVisibility}
      task={{ name: '', description: '' } as Task}
    />
  );

  return (
    <HeaderContainer isFixed={isFixed}>
      <MainHeader className="main">
        {displayAddTaskModal}
        <HeaderLabel>My Tasks</HeaderLabel>
        <HeaderControls>
          <HeaderFilterMenu setFilter={setFilter} currentFilter={currentFilter} />
          <MenuButton title="Add task" onClick={handleAddTaskModalVisibility}>
            <MdAddTask />
          </MenuButton>
          <DropContainer>
            <MenuButton title="More" onClick={handleDropdownMenuVisibility}>
              <HiOutlineDotsHorizontal />
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
