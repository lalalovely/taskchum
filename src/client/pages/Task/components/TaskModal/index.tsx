import React from 'react';

import { Task } from '../../../../../commons/types/Task.type';
import { Modal } from '../../../../components';
import { ModalSize } from '../../../../components/Modal';
import TaskForm from '../TaskForm';

type Props = {
  isOpen: boolean;
  task: Task;
  isNew?: boolean;
  onClose: () => void;
};

export default function TaskModal(props: Props) {
  const { isOpen, task, onClose, isNew } = props;

  return (
    <Modal
      isOpen={isOpen}
      order="5"
      size={ModalSize.MEDIUM}
      label={isNew ? 'Add task' : 'Update task'}
    >
      <TaskForm taskData={task} onClose={onClose} />
    </Modal>
  );
}
