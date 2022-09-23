import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useQuery } from 'react-query';
import { LoadingIndicator } from 'src/client/components';
import { useAuth } from 'src/client/contexts/AuthContext';

import { Task } from '../../../../../commons/types/Task.type';
import TaskApi from '../../../../api/TaskApi';
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
} from './styles';

export default function TaskArea() {
  const [tasksToDisplay, setTasksToDisplay] = useState<Task[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
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

  function filterTasks(isDone: boolean) {
    if (tasks) {
      const filteredTasks = tasks.filter((task) => task.isDone === isDone);
      setTasksToDisplay(filteredTasks);
    }
  }

  function handleAddModalVisibility() {
    setOpenAddModal(!openAddModal);
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

  return (
    <MainContainer>
      <Main>
        <Header isTaskListEmpty={tasks?.length === 0} setFilter={setCurrentFilter} />
        {displayAddTaskModal}
        {tasksToDisplay.length === 0 ? (
          <AddTaskContainer role="button">
            <AddTaskBtn onClick={handleAddModalVisibility}>
              <MdAdd size="25px" /> Click here to add a Task
            </AddTaskBtn>
          </AddTaskContainer>
        ) : (
          <TaskListContainer>
            <TaskList>
              {isLoading ? (
                <LoadingIndicator />
              ) : (
                tasksToDisplay?.map((task: Task) => <TaskItem task={task} key={task.id} />)
              )}
            </TaskList>
          </TaskListContainer>
        )}
      </Main>
    </MainContainer>
  );
}
