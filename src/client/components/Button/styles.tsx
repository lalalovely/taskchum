import styled, { css } from 'styled-components';

export const ButtonLabel = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: center;
`;

type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  icon?: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  vertical-align: middle;
  align-items: center;
  padding: 0 12px;
  max-width: 100%;
  font-weight: 600;
  font-size: 13px;
  //line-height: 1.6;
  text-align: center;
  min-width: 68px;
  height: 32px;
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
      // background-color: ${(props) => props.theme.colors.white};
      // color: ${(props) => props.theme.colors.primary};
      // border: 1px solid ${(props) => props.theme.colors.primary};

      // background-color: ${(props) => props.theme.colors.secondary};
      // color: ${(props) => props.theme.colors.primary};
      // border: 1px solid ${(props) => props.theme.colors.primary};

      border: 1px solid transparent;
      background-color: ${(props) => props.theme.colors.btnSecondaryIdleFill};
      color: ${(props) => props.theme.colors.btnSecondaryIdleTint};

      &:hover {
        background-color: ${(props) => props.theme.colors.btnSecondaryHoverFill};
        color: ${(props) => props.theme.colors.btnSecondaryHoverTint};
      }

      // &:hover {
      //   //opacity: 0.75;
      //   //color: ${(props) => props.theme.colors.white};
      //   background-color: ${(props) => props.theme.colors.iconHoverBackground};
      // }
    `};
`;
