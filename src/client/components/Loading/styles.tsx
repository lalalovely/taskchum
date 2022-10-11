import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
  inset: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.theme.colors.modalOverlayBackground};
`;

export const Container = styled.div`
  width: 150px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  box-shadow: 0 15px 50px 0 rgb(0 0 0 / 35%);
  background-color: ${(props) => props.theme.colors.modalCardBackground};
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  padding-left: 40px;
  align-items: center;
  justify-content: center;
`;
