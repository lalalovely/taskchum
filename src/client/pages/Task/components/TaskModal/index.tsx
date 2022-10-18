import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useMutation, useQueryClient } from 'react-query';
import TaskApi from 'src/client/api/TaskApi';
import { showToast } from 'src/client/components/Toast';
import { useAlertDialog } from 'src/client/contexts/AlertDialogContext';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import { Modal } from '../../../../components';
import { ModalSize } from '../../../../components/Modal';
import TaskForm from '../TaskForm';
import { AddForm, AddFormContainer } from './styles';

type Props = {
  isOpen: boolean;
  task: Task;
  isNew?: boolean;
  isModal: boolean;
  onClose: () => void;
};

export default function TaskModal(props: Props) {
  const { isOpen, task, onClose, isNew, isModal } = props;
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();
  const alertDialog = useAlertDialog();
  const [taskData, setTaskData] = useState<Task>(task);

  const { mutateAsync: createTask } = useMutation(TaskApi.createTask, {
    onError: () => {
      showToast("There's an error in adding the task", 'error');
    },
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
      showToast('Task is successfully added', 'success');
    },
  });

  const { mutateAsync: updateTask } = useMutation(TaskApi.updateTask, {
    onError: () => {
      showToast("There's an error in adding the task", 'error');
    },
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
      showToast('Task is successfully updated', 'success');
    },
  });

  function handleAddTask() {
    createTask({
      name: taskData.name.trim(),
      description: taskData.description.trim(),
      userId: currentUser.id,
    });
  }

  function handleUpdateTask() {
    updateTask({
      ...taskData,
      name: taskData.name.trim(),
      description: taskData.description.trim(),
    });
  }

  function onChangeTaskName(name: string) {
    setTaskData((prevState) => ({
      ...prevState,
      name,
    }));
  }

  function onChangeTaskDescription(description: string) {
    setTaskData((prevState) => ({
      ...prevState,
      description,
    }));
  }

  function resetForm() {
    onChangeTaskName('');
    onChangeTaskDescription('');
  }

  function handleSubmit() {
    if (isNew) {
      handleAddTask();
      resetForm();
    } else {
      handleUpdateTask();
    }

    if (isModal) {
      onClose();
    }
  }

  function handleClose() {
    if (task.name !== taskData.name || task.description !== taskData.description) {
      alertDialog({
        variant: 'warning',
        title: 'Discard',
        confirmText: 'Discard',
        message: 'Discard changes?',
      }).then(() => onClose());
    } else {
      onClose();
    }
  }

  function handleEnter() {
    if (taskData.name === '') {
      alertDialog({
        variant: 'error',
        title: 'Error',
        catchOnCancel: false,
        message: 'Task name cannot be empty',
      });
    } else {
      handleSubmit();
    }
  }

  const submitLabel = isNew ? 'Add' : 'Save';

  if (!isModal) {
    return (
      <ClickAwayListener onClickAway={handleClose}>
        <AddFormContainer>
          <AddForm>
            <TaskForm
              taskData={taskData}
              onEnter={handleEnter}
              onChangeName={onChangeTaskName}
              onChangeDescription={onChangeTaskDescription}
            />
          </AddForm>
        </AddFormContainer>
      </ClickAwayListener>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      order="5"
      size={ModalSize.MEDIUM}
      type="default"
      confirmLabel={submitLabel}
      confirmDisable={taskData.name === ''}
      title={isNew ? 'Create task' : 'Task details'}
      onCancel={handleClose}
      onConfirm={handleSubmit}
    >
      <TaskForm
        taskData={taskData}
        onEnter={handleEnter}
        onChangeName={onChangeTaskName}
        onChangeDescription={onChangeTaskDescription}
      />
    </Modal>
  );
}
