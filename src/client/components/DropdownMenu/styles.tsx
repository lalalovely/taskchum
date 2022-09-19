import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  //display: block;
  position: absolute;
  padding: 4px 0px;
  opacity: 1;
  width: 250px;
  border-radius: 4px;
  right: 0px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  transform: translateY(10px);
  z-index: 9;
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.colors.white};
`;

export const MenuItem = styled.button`
  display: flex;
  padding: 10px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  //color: rgb(79, 43, 45);
  background-color: ${(props) => props.theme.colors.white};

  &:disabled,
  &:disabled:hover,
  &:disabled:active,
  &:disabled:hover:active {
    color: #d4d4d4;
    cursor: not-allowed;
  }

  &:enabled:hover,
  &:enabled:active,
  &:enabled:hover:active {
    background-color: #e9e9e9;
    outline: none;
  }
`;

export const MenuItemLabel = styled.span`
  margin-left: 10px;
`;
