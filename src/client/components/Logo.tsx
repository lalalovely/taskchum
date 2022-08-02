import React from 'react';
import styled from 'styled-components';

import taskchum from '../../client/assets/images/taskchum.svg';

export default function Logo() {
  return <LogoImg alt="taskchum" src={taskchum} />;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  max-width: 100%;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: 2rem;
`;
