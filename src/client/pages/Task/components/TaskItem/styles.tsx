import styled, { css } from 'styled-components';

type ContainerProps = {
  isCompleted: boolean;
};

export const Container = styled.li<ContainerProps>`
  height: 50px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.taskItemBorder};
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.taskNotCompleted};

  &:hover {
    background-color: ${(props) => props.theme.colors.taskItemHovered};
    border-color: ${(props) => props.theme.colors.taskItemBorder};

    .taskName,
    .completeButton {
      color: ${(props) => props.theme.colors.mainTextColor};
    }
  }

  ${(props) =>
    props.isCompleted === true &&
    css`
      cursor: default;

      &:hover {
        .taskName,
        .completeButton {
          color: ${(props) => props.theme.colors.taskCompleted};
        }
      }

      .completeButton {
        pointer-events: none;
      }

      .taskName {
        text-decoration: line-through;
      }

      button,
      .completeButton,
      .taskName {
        color: ${(props) => props.theme.colors.taskCompleted};
      }
    `}
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2px;
  max-width: 760px;
  height: 100%;
  outline: none;
  justify-content: space-between;
`;

export const LabelContainer = styled.div`
  display: flex;
  position: relative;
  width: 75%;
  justify-content: flex-start;
  align-items: center;
  overflow-wrap: break-word;
`;

export const TextContainer = styled.span`
  width: 85%;
  overflow: hidden;
  align-items: center;
  font-weight: bold;
  line-height: 1.5em;
`;

export const Text = styled.span`
  margin-right: 8px;
  padding: 2px 6px;
  font-size: 13px;
  border-radius: 4px;
`;

export const ActionButtons = styled.div`
  display: flex;
  height: 24px;
  justfiy-content: flex-start;
  align-items: center;
`;

export const ItemActionButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemActionButton = styled.button`
  display: flex;
  margin-right: 10px;
  padding: 2px;
  background-color: transparent;
  outline: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  color: ${(props) => props.theme.colors.taskNotCompleted};

  &:hover {
    color: ${(props) => props.theme.colors.taskHovered};
  }
`;

export const CompleteTaskBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  content: none;
  border: none;
  background: none;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.taskNotCompleted};
`;
