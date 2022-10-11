import React from 'react';
import { LogoImg } from './styles';

import taskchum from '../../../client/assets/images/taskchum.svg';

export default function Logo() {
  return <LogoImg alt="taskchum" src={taskchum} />;
}
