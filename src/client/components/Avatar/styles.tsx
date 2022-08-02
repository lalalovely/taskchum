import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
  text-transoform: inherit;
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
  user-select: none;
`;

export const UserAvatar = styled.span`
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  font-size: 25px;
  font-weight: 500;
`;

export const UserInitial = styled.span`
  letter-spacing: 0.01rem;
  fill: #fff;
  color: #fff;
  text-transform: uppercase;
`;
