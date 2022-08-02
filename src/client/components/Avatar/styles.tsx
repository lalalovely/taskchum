import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const UserInitialWrapper = styled.span`
  display: flex;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  font-weight: 500;
  line-height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const UserInitial = styled.span`
  fill: #fff;
  color: #fff;
  text-transform: uppercase;
`;

export const UserPhotoWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
