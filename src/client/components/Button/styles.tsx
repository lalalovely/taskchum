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
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  margin: 0;
  padding: 10px 15px;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      border: 1px solid transparent;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};

      &:disabled,
      &:disabled:hover,
      &:disabled:active,
      &:disabled:hover:active {
        cursor: not-allowed;
        background-color: ${(props) => props.theme.colors.buttonPrimaryDisabledBackground};
        color: ${(props) => props.theme.colors.buttonPrimaryDisabledColor};
      }

      &:enabled:hover,
      &:enabled:active,
      &:enabled:hover:active {
        background-color: ${(props) => props.theme.colors.primaryDark};
        outline: none;
      }

      &:active {
        transform: scale(0.98);
      }
    `}

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.buttonSecondaryBorder};
      background-color: transparent;
      color: ${(props) => props.theme.colors.buttonSecondaryColor};

      &:hover {
        color: ${(props) => props.theme.colors.buttonSecondaryHoverColor};
        border: 1px solid ${(props) => props.theme.colors.buttonSecondaryHoverBorder};
      }
    `};
`;
