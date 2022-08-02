import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
    font-family: "OpenSans", sans-serif;
    // font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    // sans-serif;
  }
`;
