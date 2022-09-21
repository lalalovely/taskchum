import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
  user-select: none;
`;

export const UserInitialWrapper = styled.span`
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  border-radius: 50%;
  line-height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    90deg,
    rgba(165, 48, 1, 1) 0%,
    rgba(242, 105, 49, 1) 35%,
    rgba(252, 169, 29, 1) 100%
  );
`;

export const UserInitial = styled.span`
  fill: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
`;

export const UserPhotoWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserPhoto = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;
