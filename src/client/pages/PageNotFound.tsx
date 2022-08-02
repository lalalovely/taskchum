import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PageNotFound() {
  //const { history } = props;
  const navigate = useNavigate();

  function handleClick() {
    navigate('/tasks');
  }

  //   function handleClickGoBack() {
  //     history.goBack();
  //   }

  return (
    <Container>
      <h1>404</h1>
      <p>Page not found or still under construction.</p>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;
