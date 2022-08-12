import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: -8vh;
  font-size: 3.375rem;
  font-weight: bold;
  color: black;

  span {
    font-size: 3.125rem;
  }
`;

export const P = styled.p`
  margin: 0.625rem 0 1.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
  color: black;
`;
