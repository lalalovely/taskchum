import React from 'react';

import TaskArea from './components/TaskArea';
import TaskHeader from './components/TaskHeader';

import { TaskPageContainer } from './styles';

export default function TaskPage() {
  return (
    <TaskPageContainer>
      <TaskHeader />
      <TaskArea />
    </TaskPageContainer>
  );
}
