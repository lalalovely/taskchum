import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 3.375rem;
  font-weight: bold;
`;

export const Error = styled.h2`
  color: ${(props) => props.theme.colors.primary};
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export const GoBackButton = styled.button`
  display: inline-flex;
  margin-top: 28px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:active {
    transform: scale(0.98);
  }
`;
