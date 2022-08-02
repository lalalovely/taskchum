import React, { useContext, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import TaskApi from '../../api/TaskApi';

import TaskArea from './components/TaskArea';
import TaskHeader from './components/TaskHeader';
import TaskItem from './components/TaskItem';

import {
  TaskPageContainer,
  Main,
  ButtonContainer,
  Header,
  HeaderContent,
  HeaderLabel,
  TaskList,
  TaskListWrapper,
  MainWrapper,
} from './styles';

export default function TaskPage() {
  return (
    <TaskPageContainer>
      <TaskHeader />
      <TaskArea />
    </TaskPageContainer>
  );
}

export const TaskSection = styled.div`
  display: flex;
`;

export const TaskDetailsWrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  width: 100%;
  position: relative;
  //z-index: 1;
  //padding-left: 55px;
  padding-right: 55px;
  margin-left: 10px;
  flex: 2;
`;

export const TaskDetailss = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //max-width: 800px;
  margin: 0 auto;
  //padding-bottom: 10rem;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonHolder = styled.div`
  margin-left: 8px;
`;
