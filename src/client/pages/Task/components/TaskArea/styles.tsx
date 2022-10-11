import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
`;

export const Main = styled.div`
  padding: 0 30px;
  margin: 10px auto;
  max-width: 620px;
  height: calc(100vh - 100px);
  background: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.taskListBackground};
  overflowx: hidden;

  @media (max-width: 425px) {
    width: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
  }
`;

export const TaskListContainer = styled.div`
  height: 88%;
  overflow: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.thumbColor};

    &:hover {
      background-color: ${(props) => props.theme.colors.thumbColorHover};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 50%;
  }
`;

export const TaskList = styled.ul`
  margin-top: 18px;
  width: 100%;
  list-style-type: none;
  padding: 0 15px 0 10px;
`;

export const AddTaskContainer = styled.div`
  display: flex;
  height: 82%;
  align-items: center;
  justify-content: center;
`;

export const AddTaskBtn = styled.button`
  display: inline-flex;
  background-color: transparent;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: none;
  content: none;
  color: ${(props) => props.theme.colors.primaryDark};

  &:active {
    transform: scale(0.98);
  }
`;

export const AddTaskBtnContainer = styled.div`
  padding: 20px 10px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
