import styled, { keyframes } from 'styled-components';

export const ModalTitle = styled.div`
  font-size: 12px;
  color: black;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  padding: 3px 10px;
  color: ${(props) => props.theme.colors.primary};
`;

const scaleUp = keyframes`
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }

  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
`;

export const AddFormContainer = styled.div`
  padding: 0 10px;
`;

export const AddForm = styled.div`
  margin-top: 12px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  animation: ${scaleUp} 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
