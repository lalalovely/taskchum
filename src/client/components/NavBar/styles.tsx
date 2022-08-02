import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 50px;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  padding: 0 12px;
`;

export const Filler = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
`;
