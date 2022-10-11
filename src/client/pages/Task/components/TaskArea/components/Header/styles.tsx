import styled, { css } from 'styled-components';

type HeaderProps = {
  isFixed: boolean;
};

export const HeaderContainer = styled.div<HeaderProps>`
  ${(props) =>
    props.isFixed === true &&
    css`
      position: fixed;
      padding: 0;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: ${(props) => props.theme.colors.pageBg};

      .main {
        border: none;
      }
    `}
`;

export const MainHeader = styled.div`
  display: flex;
  padding: 15px 10px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  display: flex;
  margin-left: 5px;
  padding: 8px;
  height: 32px;
  min-width: auto;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 20px;
  background-color: transparent;
  border-radius: 9999px;
  color: ${(props) => props.theme.colors.iconColor};

  &:hover {
    background-color: ${(props) => props.theme.colors.iconHoverBackground};
    border-color: ${(props) => props.theme.colors.iconBorder};
    color: ${(props) => props.theme.colors.mainTextColor};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const DropContainer = styled.div`
  position: relative;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.fieldLabelColor};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

type FilterProps = {
  selected: boolean;
};

export const Filter = styled.div<FilterProps>`
  cursor: pointer;

  &:active,
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.colors.primaryLight};
    `}
`;
