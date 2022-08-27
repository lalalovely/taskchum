import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useMutation, useQueryClient } from 'react-query';
import TextareaAutosize from 'react-textarea-autosize';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import { Button, Dialog } from '../../../../components';
import { DialogType } from '../../../../components/Dialog';
import { showEvent } from '../../../../components/Toast';

import {
  Container,
  Form,
  InputFields,
  FormActionsWrapper,
  FormActions,
  ButtonContainer,
  InputFieldWrapper,
  FormFieldsWrapper,
  TextAreaContainer,
  Input,
} from './styles';

type Props = {
  taskData: Task;
  onClose: () => void;
};

export default function TaskForm(props: Props) {
  const { taskData, onClose } = props;
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();
  const [name, setName] = useState<string>(taskData.name);
  const [description, setDescription] = useState<string>(taskData.description);
  const [isDiscarding, setIsDiscarding] = useState<boolean>(false);

  const submitLabel = taskData.name === '' ? 'Add' : 'Save';
  const disableSubmit = taskData.name === '' ? name.trim().length < 1 : false;

  function onChangeDescription(evt: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(evt.target.value);
  }

  function onChangeName(evt: ChangeEvent<HTMLInputElement>) {
    setName(evt.target.value);
  }

  function onKeyInputDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ('Enter' === e.key && !e.shiftKey) {
      e.preventDefault();
      if (name === '') {
        showEvent('Task name cannot be empty', 'error');
      } else {
        handleSubmit();
      }
    }
  }

  function reset() {
    setName('');
    setDescription('');
  }

  function preventSubmit(e: FormEvent) {
    e.preventDefault();
    reset();
  }

  function handleSubmit() {
    if (taskData.name === '') {
      handleAddTask();
      reset();
    } else {
      handleUpdateTask();
      onClose();
    }
  }

  const { mutateAsync: createTask } = useMutation(TaskApi.createTask, {
    onError: () => {
      showEvent("There's an error in adding the task", 'error');
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks').then(() => {
        showEvent('Task is successfully added', 'success');
      });
    },
  });

  function handleAddTask() {
    createTask({
      name: name.trim(),
      description: description.trim(),
      userId: currentUser.id,
    });
  }

  const { mutateAsync: updateTask } = useMutation(TaskApi.updateTask, {
    onError: () => {
      showEvent("There's an error in adding the task", 'error');
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('tasks').then(() => {
        showEvent('Task is successfully updated', 'success');
      });
    },
  });

  function handleUpdateTask() {
    updateTask({
      ...taskData,
      name: name.trim(),
      description: description.trim(),
    } as Task);
  }

  function handleCancel() {
    if (name.trim() !== taskData.name) {
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
    <Container>
      {discardDialog}
      <Form onSubmit={preventSubmit}>
        <FormFieldsWrapper>
          <InputFields>
            <InputFieldWrapper>
              <Input
                placeholder="Task Name"
                onChange={onChangeName}
                onKeyDown={onKeyInputDown}
                value={name}
                autoFocus={true}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <TextAreaContainer>
                <TextareaAutosize
                  className="textarea"
                  placeholder="Enter description"
                  value={description}
                  onChange={onChangeDescription}
                />
              </TextAreaContainer>
            </InputFieldWrapper>
          </InputFields>
        </FormFieldsWrapper>
        <FormActionsWrapper>
          <FormActions>
            <ButtonContainer>
              <Button isDisabled={false} type="secondary" onClick={handleCancel} label="Cancel" />
            </ButtonContainer>
            <ButtonContainer>
              <Button
                isDisabled={disableSubmit}
                type="primary"
                onClick={handleSubmit}
                label={submitLabel}
              />
            </ButtonContainer>
          </FormActions>
        </FormActionsWrapper>
      </Form>
    </Container>
  );
}
