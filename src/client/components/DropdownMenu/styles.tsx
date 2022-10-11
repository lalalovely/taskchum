import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
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
  background-color: ${(props) => props.theme.colors.dropdownBg};
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
  color: ${(props) => props.theme.colors.dropdownColor};
  background-color: ${(props) => props.theme.colors.dropdownBg};

  &:disabled,
  &:disabled:hover,
  &:disabled:active,
  &:disabled:hover:active {
    color: ${(props) => props.theme.colors.dropdownDisabled};
    cursor: not-allowed;
  }

  &:enabled:hover,
  &:enabled:active,
  &:enabled:hover:active {
    color: ${(props) => props.theme.colors.mainTextColor};
    background-color: ${(props) => props.theme.colors.dropdownHover};
    outline: none;
  }
`;

export const MenuItemLabel = styled.span`
  margin-left: 10px;
`;
