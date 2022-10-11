import styled, { css, keyframes } from 'styled-components';

type ToastContainerProps = {
  isVisible: boolean;
};

type ToastBodyProps = {
  type: string;
};

const fadeUp = keyframes`
  0% {
    opacity: 0;
    bottom: 0px;
  }

  10% {
    opacity: 1;
    bottom: 50px;
  }

  90% {
    opacity: 1;
    bottom: 50px;
  }

  100% {
    opacity: 0;
    bottom: 0px;
  }
`;

export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  width: auto;
  left: 50%;
  opacity: 0;
  text-align: center;
  z-index: 1100000;
  transform: translateX(-50%);

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeUp} 4.5s forwards;
      animation-delay: 300ms;
    `}
`;

export const ToastBody = styled.div<ToastBodyProps>`
  position: relative;
  display: flex;
  padding: 12px;
  min-height: 22px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  text-align: center;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.type === 'success' &&
    css`
      color: ${(props) => props.theme.colors.toastColorSuccess};
      background-color: ${(props) => props.theme.colors.toastBgSuccess};

      button {
        color: ${(props) => props.theme.colors.toastButtonColorSuccess};

        &:hover {
          background-color: ${(props) => props.theme.colors.toastButtonHoverSuccess};
        }
      }
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      color: ${(props) => props.theme.colors.toastColorError};
      background-color: ${(props) => props.theme.colors.toastBgError};

      button {
        color: ${(props) => props.theme.colors.toastButtonColorError};

        &:hover {
          background-color: ${(props) => props.theme.colors.toastButtonHoverError};
        }
      }
    `}
`;

export const ActionsArea = styled.div`
  display: flex;
`;

export const MessageContainer = styled.div`
  margin-right: 20px;
  min-width: 150px;
  max-width: 400px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 1em;
`;

export const CloseButton = styled.button`
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
`;
