import React from 'react';

import TaskArea from './components/TaskArea';
import TaskHeader from './components/TaskHeader';

import { TaskPageContainer } from './styles';

type TaskPageProps = {
  theme: string;
  toggleTheme: () => void;
};

export default function TaskPage(props: TaskPageProps) {
  return (
    <TaskPageContainer>
      <TaskHeader toggleTheme={props.toggleTheme} theme={props.theme} />
      <TaskArea />
    </TaskPageContainer>
  );
}
