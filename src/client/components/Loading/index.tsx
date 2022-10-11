import React from 'react';
import { FadeLoader } from 'react-spinners';
import Portal from '../Portal';
import { Background, Container, Wrapper } from './styles';

export default function Loading() {
  return (
    <Portal>
      <Background>
        <Container>
          <Wrapper>
            <FadeLoader />
          </Wrapper>
        </Container>
      </Background>
    </Portal>
  );
}
