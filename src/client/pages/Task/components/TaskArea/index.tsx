import React, { useEffect, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useQuery } from 'react-query';
import { LoadingIndicator } from 'src/client/components';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
import TaskForm from '../TaskForm';
import TaskItem from '../TaskItem';
import TaskModal from '../TaskModal';
import Header from './Header';

import {
  MainContainer,
  Main,
  TaskList,
  TaskListContainer,
  AddTaskContainer,
  AddTaskBtn,
  AddForm,
  AddTaskBtnContainer,
} from './styles';

export default function TaskArea() {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [tasksToDisplay, setTasksToDisplay] = useState<Task[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const itemsListRef = useRef<HTMLUListElement>(null);
  const { currentUser } = useAuth();

  const emptyTask = { name: '', description: '' } as Task;

  const { data: tasks, isLoading } = useQuery(['tasks', currentUser.id], getTasks);

  useEffect(() => {
    if (tasks) {
      displayTasks(currentFilter);
    }
  }, [tasks, currentFilter]);

  useEffect(() => {
    if (itemsListRef) {
      const lastItem = itemsListRef.current?.lastElementChild;
      if (lastItem) {
        lastItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [tasksToDisplay]);

  function getTasks() {
    return TaskApi.getTasksByUserId(currentUser.id);
  }

  function handleAddModalVisibility() {
    setOpenAddModal(!openAddModal);
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

  const displayAddTaskModal = openAddModal && (
    <TaskModal
      isNew={true}
      isOpen={openAddModal}
      onClose={handleAddModalVisibility}
      task={emptyTask}
    />
  );

  const displayAddTaskForm = isAdding && (
    <TaskForm taskData={emptyTask} onClose={handleAddFormVisibility} />
  );

  return (
    <MainContainer>
      <Main>
        <Header
          isTaskListEmpty={tasks?.length === 0}
          currentFilter={currentFilter}
          setFilter={setCurrentFilter}
        />
        {displayAddTaskModal}
        {/* {tasks?.length === 0 ? (
          <AddTaskContainer role="button">
            <AddTaskBtn onClick={handleAddModalVisibility}>
              <MdAdd size="25px" /> Click here to add a Task
            </AddTaskBtn>
          </AddTaskContainer>
        ) : (
          <TaskListContainer>
            <TaskList ref={itemsListRef}>
              {isLoading ? (
                <LoadingIndicator />
              ) : (
                tasksToDisplay?.map((task: Task) => (
                  <TaskItem task={task} key={task.id} ref={itemRef} />
                ))
              )}
            </TaskList>
          </TaskListContainer>
        )} */}

        <>
          <TaskListContainer>
            <>
              <TaskList ref={itemsListRef}>
                {isLoading ? (
                  <LoadingIndicator />
                ) : (
                  tasksToDisplay?.map((task: Task) => (
                    <TaskItem task={task} key={task.id} ref={itemRef} />
                  ))
                )}
              </TaskList>

              {isAdding ? (
                <AddForm>{displayAddTaskForm}</AddForm>
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
  );
}
