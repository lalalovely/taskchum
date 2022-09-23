import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { useAlertDialog } from 'src/client/contexts/AlertDialogContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import { showToast } from '../../../../components/Toast';
import TaskModal from '../TaskModal';

import {
  ItemContainer,
  Text,
  ItemActionButtons,
  ItemActionButton,
  Container,
  TextContainer,
  LabelContainer,
  CompleteTaskButton,
} from './styles';

type Props = {
  task: Task;
};

export default function TaskItem(props: Props) {
  const { task } = props;

  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(task.isDone);

  const queryClient = useQueryClient();
  const alertDialog = useAlertDialog();

  function handleUpdateDialogVisibility() {
    setIsUpdating(!isUpdating);
  }

  function handleMouseOver() {
    setIsHovering(!task.isDone);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  const { mutateAsync: deleteTask } = useMutation(TaskApi.deleteTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks').then(() => {
        showToast('Task is successfully deleted', 'success');
      });
    },
  });

  const { mutateAsync: completeTask } = useMutation(TaskApi.updateTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks');
    },
  });

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    alertDialog({
      variant: 'warning',
      catchOnCancel: false,
      confirmText: 'Delete',
      message: 'Are you sure you want to delete the task?',
    }).then(() => deleteTask(task.id));
  }

  function handleComplete(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    setIsHovering(false);
    setIsDone(true);
    completeTask({
      ...task,
      isDone: true,
    } as Task);
  }

  function handleClick() {
    if (!task.isDone) {
      handleUpdateDialogVisibility();
    }
  }

  const displayUpdateTaskModal = isUpdating && (
    <TaskModal
      onClose={handleUpdateDialogVisibility}
      isOpen={isUpdating}
      task={task}
      isNew={false}
    />
  );

  return (
    <>
      {displayUpdateTaskModal}
      <Container isCompleted={isDone}>
        <ItemContainer
          role="button"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
        >
          <LabelContainer>
            <CompleteTaskButton onClick={handleComplete} className="completeButton" />
            <TextContainer>
              <Text className="taskName">{task.name}</Text>
            </TextContainer>
          </LabelContainer>

          {isDone && (
            <ItemActionButtons>
              <ItemActionButton
                onClick={handleDelete}
                title="Delete task"
                style={{ color: '#FCA91D' }}
              >
                <MdDelete size="20px" />
              </ItemActionButton>
            </ItemActionButtons>
          )}

          {isHovering && !isDone && (
            <ItemActionButtons>
              <ItemActionButton onClick={handleDelete} title="Delete task">
                <MdDelete size="20px" />
              </ItemActionButton>
              <ItemActionButton onClick={handleUpdateDialogVisibility} title="Update task">
                <MdEdit size="20px" />
              </ItemActionButton>
            </ItemActionButtons>
          )}
        </ItemContainer>
      </Container>
    </>
  );
}
