import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';

import { Task } from '../../../../../commons/types/Task.type';
import TaskModal from '../TaskModal';
import HeaderDropdownMenu from './HeaderDropdownMenu';

import {
  MainHeader,
  HeaderLabel,
  HeaderControls,
  MenuButton,
  DropContainer,
  Filters,
  Filter,
} from './styles';

type Props = {
  isTaskListEmpty: boolean;
  currentFilter: string;
  activeCount: number;
  completedCount: number;
  setFilter: (filter: string) => void;
};

export default function Header(props: Props) {
  const { isTaskListEmpty, setFilter, currentFilter, activeCount, completedCount } = props;
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
      <HeaderLabel>My Tasks</HeaderLabel>
      <HeaderControls>
        {/* <MenuButton onClick={openAddTaskModal}>
          <MdAdd size="20px" />
        </MenuButton> */}
        <Filters>
          <Filter role="button" selected={currentFilter === 'all'} onClick={() => setFilter('all')}>
            All
          </Filter>
          <Filter
            role="button"
            selected={currentFilter === 'active'}
            onClick={() => setFilter('active')}
          >
            Active<sup>{activeCount}</sup>
          </Filter>
          <Filter
            role="button"
            selected={currentFilter === 'completed'}
            onClick={() => setFilter('completed')}
          >
            Completed<sup>{completedCount}</sup>
          </Filter>
        </Filters>
        <DropContainer>
          <MenuButton onClick={() => setOpenDropdownMenu(!openDropdownMenu)}>
            <BiDotsVertical size="25px" color="#505f79" />
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
