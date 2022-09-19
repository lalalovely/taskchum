import React, { Ref, useContext, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import { Dialog, Modal } from '../../../../components';
import { DialogType } from '../../../../components/Dialog';
import { ModalSize } from '../../../../components/Modal';
import { showEvent } from '../../../../components/Toast';
import TaskForm from '../TaskForm';

import { ModalTitle } from './styles';

type Props = {
  isOpen: boolean;
  task: Task;
  isNew?: boolean;
  onClose: () => void;
};

export default function TaskModal(props: Props) {
  const { isOpen, task, onClose } = props;
  const [taskData, setTaskData] = useState<Task>(task);
  const [isDiscarding, setIsDiscarding] = useState(false);

  function handleClose() {
    if (task.name !== taskData.name || task.description !== taskData.description) {
      setIsDiscarding(true);
    } else {
      onClose();
    }
  }

  function discardTask() {
    setIsDiscarding(false);
    onClose();
  }

  const discardDialog = isDiscarding && (
    <Dialog
      isOpen={isDiscarding}
      onCancel={() => {
        setIsDiscarding(false);
      }}
      onConfirm={discardTask}
      type={DialogType.WARNING}
      message="Discard changes?"
      confirmText="Discard"
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      zIndex="5"
      size={ModalSize.MEDIUM}
      background={true}
    >
      {discardDialog}
      <TaskForm taskData={task} onClose={handleClose} />
    </Modal>
  );
}
