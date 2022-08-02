import React from 'react';
import { useAuth } from 'src/client/contexts/AuthContext';
import { Button, Container, UserAvatar, UserInitial } from './styles';

type Props = {
  showUserMenu: () => void;
};

export default function Avatar(props: Props) {
  const { showUserMenu } = props;
  const { currentUser } = useAuth();
  return (
    <Container>
      <Button aria-expanded="true" aria-haspopup="menu" role="button" onClick={showUserMenu}>
        <UserAvatar>
          <UserInitial aria-hidden="true">{currentUser?.name.slice(0, 1)}</UserInitial>
        </UserAvatar>
      </Button>
    </Container>
  );
}
