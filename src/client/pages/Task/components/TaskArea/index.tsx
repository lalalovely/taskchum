import React, { useEffect, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useQuery } from 'react-query';
import { FadeLoader } from 'react-spinners';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import TaskItem from '../TaskItem';
import TaskModal from '../TaskModal';
import Header from './components/Header';

import {
  MainContainer,
  Main,
  TaskList,
  TaskListContainer,
  AddTaskBtn,
  AddTaskBtnContainer,
  LoadingContainer,
} from './styles';

export default function TaskArea() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [tasksToDisplay, setTasksToDisplay] = useState<Task[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const itemsListRef = useRef<HTMLUListElement>(null);
  const { currentUser } = useAuth();

  const emptyTask = { name: '', description: '' } as Task;

  const { data: tasks, isLoading } = useQuery(['tasks', currentUser.id], getTasks);

  useEffect(() => {
    if (tasks) {
      displayTasks(currentFilter);
    }
  }, [tasks, currentFilter]);

  function getTasks() {
    return TaskApi.getTasksByUserId(currentUser.id);
  }

  function handleAddFormVisibility() {
    setIsAdding(!isAdding);
  }

  function filterTasks(isDone: boolean) {
    if (tasks) {
      const filteredTasks = tasks.filter((task) => task.isDone === isDone);
      setTasksToDisplay(filteredTasks);
    }
  }

  function displayTasks(filter: string) {
    switch (filter) {
      case 'completed':
        filterTasks(true);
        break;
      case 'active':
        filterTasks(false);
        break;
      default:
        if (tasks) {
          setTasksToDisplay(tasks);
        }
        break;
    }
  }

  const displayAddTaskForm = isAdding && (
    <TaskModal
      isNew={true}
      isModal={false}
      isOpen={isAdding}
      task={emptyTask}
      onClose={handleAddFormVisibility}
    />
  );

  return (
    <>
      <MainContainer>
        <Main>
          <Header
            isFixed={false}
            isTaskListEmpty={tasks?.length === 0}
            currentFilter={currentFilter}
            setFilter={setCurrentFilter}
          />

          <>
            <TaskListContainer>
              <>
                <TaskList ref={itemsListRef}>
                  {isLoading ? (
                    <LoadingContainer>
                      <FadeLoader />
                    </LoadingContainer>
                  ) : (
                    tasksToDisplay?.map((task: Task) => <TaskItem task={task} key={task.id} />)
                  )}
                </TaskList>

                {isAdding ? (
                  <>{displayAddTaskForm}</>
                ) : (
                  <AddTaskBtnContainer>
                    <AddTaskBtn onClick={handleAddFormVisibility}>
                      <MdAdd size="25px" /> Add new task
                    </AddTaskBtn>
                  </AddTaskBtnContainer>
                )}
              </>
            </TaskListContainer>
          </>
        </Main>
      </MainContainer>
    </>
  );
}
