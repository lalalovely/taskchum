import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
};

export default function Header(props: Props) {
  return (
    <HeaderContainer>
      <HeaderWrapper>{props.children}</HeaderWrapper>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  //width: 100%;
  box-shadow: ${(props) => props.theme.colors.shadow};
  top: 0;
  z-index: 3;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  max-width: 1150px;
`;
