import styled from 'styled-components';

export const ModalTitle = styled.div`
  font-size: 12px;
  color: black;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  padding: 3px 10px;
  //color: rgba(68, 68, 68, 0.8);
  color: ${(props) => props.theme.colors.primary};
`;
