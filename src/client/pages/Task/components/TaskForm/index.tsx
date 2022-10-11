import React, { FormEvent } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import { Task } from '../../../../../commons/types/Task.type';

import {
  Form,
  InputFields,
  InputFieldWrapper,
  FormFieldsWrapper,
  TextAreaContainer,
  Input,
} from './styles';

type Props = {
  taskData: Task;
  onEnter: () => void;
  onChangeName: (e: string) => void;
  onChangeDescription: (e: string) => void;
};

export default function TaskForm(props: Props) {
  const { taskData, onChangeName, onChangeDescription, onEnter } = props;

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if ('Enter' === e.key && !e.shiftKey) {
      e.preventDefault();
      onEnter();
    }
  }

  function onHandleChangeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (onChangeDescription) {
      onChangeDescription(e.target.value ?? '');
    }
  }

  function onHandleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChangeName) {
      onChangeName(e.target.value ?? '');
    }
  }

  function preventSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={preventSubmit}>
      <FormFieldsWrapper>
        <InputFields>
          <InputFieldWrapper>
            <Input
              placeholder="Task Name"
              onChange={onHandleChangeName}
              onKeyDown={handleEnter}
              value={taskData.name}
              autoFocus={true}
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <TextAreaContainer>
              <TextareaAutosize
                className="textarea"
                placeholder="Enter note"
                value={taskData.description}
                onChange={onHandleChangeDescription}
              />
            </TextAreaContainer>
          </InputFieldWrapper>
        </InputFields>
      </FormFieldsWrapper>
    </Form>
  );
}
