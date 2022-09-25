import styled from 'styled-components';

export const DialogBody = styled.div`
  padding-bottom: 1.5rem;
`;

export const DialogFooter = styled.div`
  width: 100%;
  border: 0;
  font-size: 14px;
  background-color: transparent;
`;

export const DialogMessage = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const DialogActionButtons = styled.div`
  display: flex;
  padding: 0;
  font-size: 14px;
  border: 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  margin-left: 8px;
`;
