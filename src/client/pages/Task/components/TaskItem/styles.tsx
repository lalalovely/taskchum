import styled, { css } from 'styled-components';

type ContainerProps = {
  isCompleted: boolean;
};

export const Container = styled.li<ContainerProps>`
  margin-top: 8px;
  width: 100%;
  font-size: 16px;
  text-align: left;
  //border: 1px solid ${(props) => props.theme.colors.gray1};
  //border-radius: 4px;
  transition: unset;
  background-color: ${(props) => props.theme.colors.listItemBg};
  box-shadow: ${(props) => props.theme.shadows.smallCard};
  cursor: pointer;

  // &:hover {
  //   border-left: 6px solid ${(props) => props.theme.colors.gray2};
  // }

  ${(props) =>
    props.isCompleted === true &&
    css`
      border-left: 8px solid ${(props) => props.theme.colors.primaryLight};
      cursor: default;

      &:hover {
        border-left: 8px solid ${(props) => props.theme.colors.primaryLight};
      }

      .completeButton {
        color: ${(props) => props.theme.colors.primaryLight};
        pointer-events: none;
      }

      .taskName {
        text-decoration: line-through;
        color: ${(props) => props.theme.colors.primaryLight};
      }
    `}
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LabelContainer = styled.div`
  display: flex;
  position: relative;
  padding: 18px 0px 18px 14px;
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
  color: ${(props) => props.theme.colors.mainTextColor};
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
  //color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  outline: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  //border: 1px solid ${(props) => props.theme.colors.gray2};
  //border-radius: 4px;

  // &:hover {
  //   background-color: ${(props) => props.theme.colors.gray1};
  // }

  color: ${(props) => props.theme.colors.gray0};

  &:hover {
    color: ${(props) => props.theme.colors.gray1};
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
  color: ${(props) => props.theme.colors.gray0};

  &:hover {
    color: ${(props) => props.theme.colors.gray1};
  }
`;

export const CompleteTaskButton = styled.div`
  display: inline-block;
  margin-right: 10px;
  height: 22px;
  width: 22px;
  border: 2px solid ${(props) => props.theme.colors.gray1};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray2};

  &:after {
    content: '';
    display: block;
    margin-left: 7px;
    margin-top: 3px;
    width: 5px;
    height: 12px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.white};
    border-image: initial;
    border-width: 0px 3px 3px 0px;
    transform: rotate(45deg);
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray3};
  }
`;
