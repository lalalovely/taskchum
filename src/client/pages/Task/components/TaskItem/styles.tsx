import styled, { css } from 'styled-components';

type ContainerProps = {
  isCompleted: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  text-align: left;
  font-size: 16px;
  border-left: 8px solid transparent;
  transition: unset;
  border: 1px solid #e5e5e5;

  &:hover {
    border-left: 6px solid #dfdfdf;
  }

  ${(props) =>
    props.isCompleted === true &&
    css`
      border-left: 8px solid #fca91d;
      cursor: default;

      &:hover {
        border-left: 8px solid #fca91d;
      }

      .completeButton {
        background-color: ${(props) => props.theme.colors.primaryLight};
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonContainer = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: grey;
  margin-top: 2.5px;
  margin-right: 10px;
  cursor: pointer;

  // width: 24px;
  // height: 24px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    //background-color: ${(props) => props.theme.colors.iconHoverBackground};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 18px 0px 18px 14px;
  overflow-wrap: break-word;
  width: 75%;
`;

export const TextContainer = styled.span`
  color: rgb(85, 85, 85);
  font-weight: bold;
  width: 85%;
  overflow: hidden;
  align-items: center;
  line-height: 1.5em;
`;

export const Text = styled.span`
  font-size: 13px;
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 8px;
  //background-color: rgb(240, 240, 240);
  //color: rgb(163, 163, 163);
  //display: none;
`;

export const ActionButtons = styled.div`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  height: 24px;
`;

export const ItemActionButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemActionButton = styled.button`
  color: rgba(0, 0, 0, 0.5);
  //color: rgba("#666", 0.2);
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
  margin-right: 10px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.btnSecondaryHoverFill};

    //border: 1px solid ${(props) => props.theme.colors.primary};
    //color: ${(props) => props.theme.colors.primaryDark};
    //background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const CompleteButton = styled.div`
  color: rgba(0, 0, 0, 0.5);
  //color: rgba("#666", 0.2);
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
  margin-right: 10px;
`;

export const CompleteTask = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 2px solid #e5e5e5; //rgb(223, 223, 223);
  //background-color: #e5e5e5; rgb(223, 223, 223);
  margin-right: 10px;
  border-radius: 50%;

  &:after {
    content: '';
    display: block;
    margin-left: 7px;
    margin-top: 3px;
    width: 5px;
    height: 12px;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-image: initial;
    border-width: 0px 3px 3px 0px;
    transform: rotate(45deg);
  }

  background-color: #dfdfdf;
  &:hover {
    background-color: #d4d4d4;
  }
`;
