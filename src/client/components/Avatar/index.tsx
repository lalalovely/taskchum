import React from 'react';
import { useAuth } from 'src/client/contexts/AuthContext';

import profile from '../../assets/images/profile.svg';

import {
  Button,
  Container,
  UserInitial,
  UserInitialWrapper,
  UserPhoto,
  UserPhotoWrapper,
} from './styles';

type Props = {
  showUserMenu: () => void;
};

export default function Avatar(props: Props) {
  const { showUserMenu } = props;
  const { currentUser } = useAuth();

  return (
    <Container>
      <Button onClick={showUserMenu}>
        {currentUser.photoURL !== '' ? (
          <UserPhotoWrapper>
            <UserPhoto alt="user" src={currentUser.photoURL} />
          </UserPhotoWrapper>
        ) : currentUser.name !== '' ? (
          <UserInitialWrapper>
            <UserInitial>{currentUser?.name.slice(0, 1)}</UserInitial>
          </UserInitialWrapper>
        ) : (
          <UserPhotoWrapper>
            <UserPhoto alt="user" src={profile} />
          </UserPhotoWrapper>
        )}
      </Button>
    </Container>
  );
}
