import React, { useContext, useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import DropdownMenu from '../../../../components/DropdownMenu';
import { showEvent } from '../../../../components/Toast';
import { UserContext } from '../../../../contexts/UserContext';
import TaskModal from '../TaskModal';

import { MainHeader, HeaderLabel, HeaderControls, MenuButton, DropContainer } from './styles';

export default function Header() {
  const user = useContext(UserContext);
  const queryClient = useQueryClient();
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

  const deleteIcon = <MdDeleteOutline size="20px" />;
  const dropdownMenuOptions = [
    { id: 1, name: 'Delete finished tasks', icon: deleteIcon },
    { id: 2, name: 'Delete all tasks', icon: deleteIcon },
  ];

  function onSelectDropdown(optionId: number) {
    switch (optionId) {
      case dropdownMenuOptions[0].id:
        handleDelete(true);
        break;
      case dropdownMenuOptions[1].id:
        handleDelete();
        break;
      default:
        return;
    }
  }

  function handleDelete(completed = false) {
    if (completed) {
      deleteAllCompletedTasks(user.id);
    } else {
      deleteAllTasks(user.id);
    }
  }

  const { mutateAsync: deleteAllTasks } = useMutation(TaskApi.deleteAllTasks, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks').then(() => {
        showEvent('Tasks are deleted', 'success');
      });
    },
  });

  const { mutateAsync: deleteAllCompletedTasks } = useMutation(TaskApi.deleteAllCompletedTasks, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks').then(() => {
        showEvent('Finished tasks are deleted', 'success');
      });
    },
  });

  function openAddTaskModal() {
    setOpenAddModal(true);
  }

  function closeAddTaskModal() {
    setOpenAddModal(false);
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
            <DropdownMenu
              options={dropdownMenuOptions}
              onSelect={onSelectDropdown}
              onClose={() => setOpenDropdownMenu(false)}
            />
          )}
        </DropContainer>
      </HeaderControls>
    </MainHeader>
  );
}
