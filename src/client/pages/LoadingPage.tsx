import React from 'react';
import { FadeLoader } from 'react-spinners';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../App.styles';
import defaultTheme from '../themes/default';

export default function LoadingPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Fullscreen>
        <FadeLoader color="#F26931" />
      </Fullscreen>
    </ThemeProvider>
  );
}

const Fullscreen = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
