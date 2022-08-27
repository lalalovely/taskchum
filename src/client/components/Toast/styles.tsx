import styled, { css, keyframes } from 'styled-components';

type ToastContainerProps = {
  isVisible: boolean;
};

type ToastBodyProps = {
  type: string;
};

const showHideAnimation = keyframes`
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
  //bottom: 3%;
  opacity: 0;
  text-align: center;
  z-index: 1100000;
  transform: translateX(-50%);

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${showHideAnimation} 4.5s forwards;
      animation-delay: 300ms;
    `}
`;

export const ToastBody = styled.div<ToastBodyProps>`
  min-height: 22px;
  border: 1px solid ${(props) => props.theme.colors.border}; //rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.colors.pageBg};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  text-align: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  ${(props) =>
    props.type === 'success' &&
    css`
      color: #9f6000;
      background-color: #ffd997;

      button {
        color: #9f6000;

        &:hover {
          background-color: #ffcb72;
        }
      }
    `}

  ${(props) =>
    props.type === 'error' &&
    css`
      color: #d63301;
      background-color: #ffccba;

      button {
        color: #d8000c;

        &:hover {
          background-color: #ffbaba;
        }
      }
    `}
`;

export const ActionsArea = styled.div`
  display: flex;
`;

export const Open = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

export const MessageContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;
  min-width: 150px;
  max-width: 400px;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 1em;
`;

export const ButtonContainer = styled.div`
  //   border: none;
  //   outline: none;
  //   background-color: transparent;
`;

export const ButtonClose = styled.div`
  color: grey;
`;

export const CloseButton = styled.button`
  //color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 2px;

  //   &:hover {
  //     background-color: ${(props) => props.theme.colors.primaryLight};
  //   }
`;
