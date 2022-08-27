import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Error, GoBackButton, P, Title, Wrapper } from './styles';

export default function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    // Go back to previous page
    navigate(-1);
  }

  return (
    <>
      <Wrapper>
        <Error>404</Error>
        <Title>Page not found.</Title>
        <P>Sorry, we couldn&apos;t find the page you&apos;re looking for.</P>
        <GoBackButton onClick={handleClick}>Go back</GoBackButton>
      </Wrapper>
    </>
  );
}
