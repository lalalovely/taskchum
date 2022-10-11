import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  padding: 4px 0px;
  width: 250px;
  opacity: 1;
  border-radius: 4px;
  right: 0px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
  transform: translateY(10px);
  z-index: 9;
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.colors.dropdownBg};
`;

type MenuItemProps = {
  active: boolean;
};

export const MenuItem = styled.button<MenuItemProps>`
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
    cursor: not-allowed;
  }

  &:enabled:hover,
  &:enabled:active,
  &:enabled:hover:active {
    color: ${(props) => props.theme.colors.mainTextColor};
    background-color: ${(props) => props.theme.colors.dropdownHover};
    outline: none;
  }

  ${(props) =>
    props.active === true &&
    css`
      color: ${(props) => props.theme.colors.primaryLight};
    `}
`;

export const MenuItemLabel = styled.span`
  margin-left: 10px;
`;

export const Button = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  color: black;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryLight};
`;
