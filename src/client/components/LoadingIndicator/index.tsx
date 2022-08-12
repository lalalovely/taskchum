import React from 'react';
import { SyncLoader } from 'react-spinners';
import { Container } from './styles';

export default function LoadingIndicator() {
  return (
    <Container>
      <SyncLoader color="#F26931" />;
    </Container>
  );
}
