import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  height: 72px;
  justify-content: space-around;
  align-items: center;
  top: 0;
  z-index: 3;
  box-shadow: ${(props) => props.theme.colors.shadow};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  height: 100%;
  width: 100%;
  max-width: 1150px;
  justify-content: space-between;
`;
