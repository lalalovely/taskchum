import React, { useEffect, useState } from 'react';
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
  const [tasksToDisplay, setTasksToDisplay] = useState<Task[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [activeTasksCount, setActiveTasksCount] = useState<number>(0);
  const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);
  const { currentUser } = useAuth();

  const task = { name: '', description: '' } as Task;

  const { data: tasks, isLoading } = useQuery(['tasks', currentUser.id], getTasks);

  useEffect(() => {
    if (tasks) {
      const completedTasks = tasks.filter((task) => task.isDone === true);
      const activeTasks = tasks.filter((task) => task.isDone === false);
      setCompletedTasksCount(completedTasks.length);
      setActiveTasksCount(activeTasks.length);

      filterTasks(currentFilter);
    }
  }, [tasks, currentFilter]);

  function getTasks() {
    return TaskApi.getTasksByUserId(currentUser.id);
  }

  function openAddTaskForm() {
    setCurrentFilter('all');
    setIsAdding(true);
  }

  function closeAddTaskForm() {
    setIsAdding(false);
  }

  const displayAddTaskForm = isAdding && <TaskForm taskData={task} onClose={closeAddTaskForm} />;

  function filterTasks(filter: string) {
    switch (filter) {
      case 'completed':
        if (tasks) {
          const completedTasks = tasks.filter((task) => task.isDone === true);
          setTasksToDisplay(completedTasks);
        }
        break;
      case 'active':
        if (tasks) {
          const activeTasks = tasks.filter((task) => task.isDone === false);
          setTasksToDisplay(activeTasks);
        }
        break;
      default:
        if (tasks) {
          setTasksToDisplay(tasks);
        }
        break;
    }
  }

  return (
    <MainContainer>
      <Wrapper>
        <Main>
          <Header
            isTaskListEmpty={tasks?.length === 0}
            currentFilter={currentFilter}
            activeCount={activeTasksCount}
            completedCount={completedTasksCount}
            setFilter={setCurrentFilter}
          />
          <TaskList>
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              tasksToDisplay?.map((task: Task) => <TaskItem task={task} key={task.id} />)
            )}
          </TaskList>

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
