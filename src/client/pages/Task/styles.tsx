import styled from 'styled-components';

export const TaskPageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.pageBg};
  min-height: 100vh;
  width: 100%;
  color: white;
  transition: background-color 0.5s ease-in-out 0s;
  overflow: hidden;
`;
