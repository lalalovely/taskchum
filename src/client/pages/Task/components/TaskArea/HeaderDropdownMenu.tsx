import React, { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import TaskApi from 'src/client/api/TaskApi';
import { Dialog } from 'src/client/components';
import { DialogType } from 'src/client/components/Dialog';
import DropdownMenu from 'src/client/components/DropdownMenu';
import { showEvent } from 'src/client/components/Toast';
import { useAuth } from 'src/client/contexts/AuthContext';

type Props = {
  isTaskListEmpty: boolean;
  onClose: () => void;
};

export default function HeaderDropdownMenu(props: Props) {
  const { isTaskListEmpty, onClose } = props;
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [menuItemId, setMenuItemId] = useState<number>();
  const [dialogMessage, setDialogMessage] = useState<string>('');

  const deleteIcon = <MdDeleteOutline size="20px" />;
  const dropdownMenuOptions = [
    { id: 1, name: 'Delete finished tasks', icon: deleteIcon, disabled: isTaskListEmpty },
    { id: 2, name: 'Delete all tasks', icon: deleteIcon, disabled: isTaskListEmpty },
  ];

  function handleSelect(optionId: number) {
    setMenuItemId(optionId);
    switch (optionId) {
      case dropdownMenuOptions[0].id:
        setDialogMessage('Are you sure you want to delete all completed tasks?');
        setIsDelete(true);
        break;
      case dropdownMenuOptions[1].id:
        setDialogMessage('Are you sure you want to delete all tasks?');
        setIsDelete(true);
        break;
      default:
        break;
    }
  }

  const { mutateAsync: deleteAllTasks } = useMutation(TaskApi.deleteAllTasks, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
      showEvent('Tasks are deleted', 'success');
    },
  });

  const { mutateAsync: deleteAllCompletedTasks } = useMutation(TaskApi.deleteAllCompletedTasks, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
      showEvent('Tasks are deleted', 'success');
    },
  });

  function handleDelete() {
    switch (menuItemId) {
      case 1:
        deleteAllCompletedTasks(currentUser.id);
        closeDeleteDialog();
        break;
      case 2:
        deleteAllTasks(currentUser.id);
        closeDeleteDialog();
        break;
      default:
        return;
    }
  }

  function handleClose() {
    if (!isDelete) {
      onClose();
    }
  }

  function closeDeleteDialog() {
    setIsDelete(false);
    onClose();
  }

  const deleteTasksDialog = (
    <Dialog
      isOpen={isDelete}
      onCancel={closeDeleteDialog}
      onConfirm={handleDelete}
      type={DialogType.INFO}
      message={dialogMessage}
      confirmText="Delete"
    />
  );

  return (
    <>
      {isDelete && deleteTasksDialog}
      <DropdownMenu options={dropdownMenuOptions} onSelect={handleSelect} onClose={handleClose} />
    </>
  );
}
