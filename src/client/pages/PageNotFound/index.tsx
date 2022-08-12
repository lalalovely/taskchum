import React from 'react';
import { useNavigate } from 'react-router-dom';
import { P, Title, Wrapper } from './styles';

export default function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    // Go back to previous page
    navigate(-1);
  }

  return (
    <>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
        <button type="button" onClick={handleClick}>
          Go back
        </button>
      </Wrapper>
    </>
  );
}
