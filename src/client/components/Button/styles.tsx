import styled, { css } from 'styled-components';

export const ButtonLabel = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
`;

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  icon?: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  padding: 0 12px;
  height: 32px;
  max-width: 100%;
  min-width: 68px;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  vertical-align: middle;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};

      &:disabled,
      &:disabled:hover,
      &:disabled:active,
      &:disabled:hover:active {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &:enabled:hover,
      &:enabled:active,
      &:enabled:hover:active {
        background-color: ${(props) => props.theme.colors.primaryDark};
        outline: none;
      }
    `}
  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      border: 1px solid transparent;
      background-color: ${(props) => props.theme.colors.gray6};
      color: rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: ${(props) => props.theme.colors.gray1};
      }
    `};
`;
