import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
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

  const { data: tasks } = useQuery(['tasks', currentUser.id], () =>
    TaskApi.getTasksByUserId(currentUser.id),
  );

  const taskListElement = (
    <ul>
      {tasks?.map((task: Task, idx: number) => (
        <TaskItem task={task} key={idx} />
      ))}
    </ul>
  );

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
          <TaskList>{taskListElement}</TaskList>
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
