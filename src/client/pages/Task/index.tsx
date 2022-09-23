import React from 'react';

import TaskArea from './components/TaskArea';
import TaskHeader from './components/TaskHeader';

import { TaskPageContainer } from './styles';

type TaskPageProps = {
  toggleTheme: () => void;
};

export default function TaskPage(props: TaskPageProps) {
  return (
    <TaskPageContainer>
      <TaskHeader toggleTheme={props.toggleTheme} />
      <TaskArea />
    </TaskPageContainer>
  );
}
