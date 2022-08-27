import styled from 'styled-components';

export const LogoText = styled.h1`
  display: inline-block;
  padding: 10px 0px;
  margin: 20px auto;
  font-size: 50px;
  color: ${(props) => props.theme.colors.primary};
`;

export const PageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Section = styled.section`
  margin-bottom: 30px;
  padding: 0px;
  width: 100%;
  overflow: visible;
`;

export const Main = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;
