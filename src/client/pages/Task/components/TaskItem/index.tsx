import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import { Dialog } from '../../../../components';
import { DialogType } from '../../../../components/Dialog';
import { showEvent } from '../../../../components/Toast';
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
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(task.isDone);

  const openUpdateDialog = () => {
    setIsUpdating(true);
  };

  const closeUpdateDialog = () => {
    setIsUpdating(false);
  };

  const handleMouseOver = () => {
    if (task.isDone) {
      setIsHovering(false);
    } else {
      setIsHovering(true);
    }
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { mutateAsync: deleteTask } = useMutation(TaskApi.deleteTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks').then(() => {
        showEvent('Task is successfully deleted', 'success');
      });
    },
  });

  const { mutateAsync: completeTask } = useMutation(TaskApi.updateTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks');
    },
  });

  function confirmDelete() {
    deleteTask(task.id);
    setIsDeleting(false);
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setIsDeleting(true);
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
      openUpdateDialog();
    }
  }

  const displayUpdateTaskModal = isUpdating && (
    <TaskModal onClose={closeUpdateDialog} isOpen={isUpdating} task={task} isNew={false} />
  );

  const displayDeleteDialog = isDeleting && (
    <Dialog
      isOpen={isDeleting}
      onCancel={() => {
        setIsDeleting(false);
      }}
      onConfirm={confirmDelete}
      type={DialogType.INFO}
      message="Are you sure you want to delete?"
      confirmText="Delete"
    />
  );

  return (
    <>
      {displayUpdateTaskModal}
      {displayDeleteDialog}
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
              <ItemActionButton onClick={openUpdateDialog} title="Update task">
                <MdEdit size="20px" />
              </ItemActionButton>
              <ItemActionButton>
                <BiDotsVertical size="20px" />
              </ItemActionButton>
            </ItemActionButtons>
          )}
        </ItemContainer>
      </Container>
    </>
  );
}
