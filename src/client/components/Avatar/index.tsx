import React from 'react';
import { useAuth } from 'src/client/contexts/AuthContext';
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
        ) : (
          <UserInitialWrapper>
            <UserInitial>{currentUser?.name.slice(0, 1)}</UserInitial>
          </UserInitialWrapper>
        )}
      </Button>
    </Container>
  );
}
