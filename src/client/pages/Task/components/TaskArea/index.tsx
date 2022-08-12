import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { LoadingIndicator } from 'src/client/components';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import TaskForm from '../TaskForm';
import TaskItem from '../TaskItem';
import Header from './Header';

import {
  MainContainer,
  Wrapper,
  Main,
  TaskList,
  AddTaskButton,
  AddButtonLabel,
  AddForm,
} from './styles';

export default function TaskArea() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const { currentUser } = useAuth();

  const task = { name: '', description: '' } as Task;

  const { data: tasks, isLoading } = useQuery(['tasks', currentUser.id], getTasks);

  const taskListElement = (
    <ul>
      {tasks?.map((task: Task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );

  function getTasks() {
    return TaskApi.getTasksByUserId(currentUser.id);
  }

  function openAddTaskForm() {
    setIsAdding(true);
  }

  function closeAddTaskForm() {
    setIsAdding(false);
  }

  const displayAddTaskForm = isAdding && <TaskForm taskData={task} onClose={closeAddTaskForm} />;

  return (
    <MainContainer>
      <Wrapper>
        <Main>
          <Header isTaskListEmpty={tasks?.length === 0} />
          <TaskList>{isLoading ? <LoadingIndicator /> : taskListElement}</TaskList>
          {isAdding ? (
            <AddForm>{displayAddTaskForm}</AddForm>
          ) : (
            <AddTaskButton onClick={openAddTaskForm}>
              <AddButtonLabel>Add Task</AddButtonLabel>
            </AddTaskButton>
          )}
        </Main>
      </Wrapper>
    </MainContainer>
  );
}
