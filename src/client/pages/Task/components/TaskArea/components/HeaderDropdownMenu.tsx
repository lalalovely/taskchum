import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import TaskApi from 'src/client/api/TaskApi';
import DropdownMenu from 'src/client/components/DropdownMenu';
import { showToast } from 'src/client/components/Toast';
import { useAlertDialog } from 'src/client/contexts/AlertDialogContext';
import { useAuth } from 'src/client/contexts/AuthContext';

type Props = {
  isTaskListEmpty: boolean;
  onClose: () => void;
};

export default function HeaderDropdownMenu(props: Props) {
  const { isTaskListEmpty, onClose } = props;
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();
  const alertDialog = useAlertDialog();

  const deleteIcon = <MdDeleteOutline size="20px" />;
  const dropdownMenuOptions = [
    { id: 1, name: 'Delete completed tasks', icon: deleteIcon, disabled: isTaskListEmpty },
    { id: 2, name: 'Delete all tasks', icon: deleteIcon, disabled: isTaskListEmpty },
  ];

  function handleSelect(optionId: number) {
    switch (optionId) {
      case dropdownMenuOptions[0].id:
        alertDialog({
          variant: 'warning',
          title: 'Delete',
          confirmText: 'Delete',
          message: 'Are you sure you want to delete all completed tasks?',
        }).then(() => deleteAllCompletedTasks(currentUser.id));
        break;
      case dropdownMenuOptions[1].id:
        alertDialog({
          variant: 'warning',
          title: 'Delete',
          confirmText: 'Delete',
          message: 'Are you sure you want to delete all tasks?',
        }).then(() => deleteAllTasks(currentUser.id));
        break;
      default:
        break;
    }
  }

  const { mutateAsync: deleteAllTasks } = useMutation(TaskApi.deleteAllTasks, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks').then(() => {
        showToast('All tasks are deleted', 'success');
      });
    },
  });

  const { mutateAsync: deleteAllCompletedTasks } = useMutation(TaskApi.deleteAllCompletedTasks, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks').then(() => {
        showToast('Completed tasks are deleted', 'success');
      });
    },
  });

  function handleClose() {
    onClose();
  }

  return (
    <DropdownMenu options={dropdownMenuOptions} onSelect={handleSelect} onClose={handleClose} />
  );
}
