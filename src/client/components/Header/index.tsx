import React from 'react';
import { HeaderContainer, HeaderWrapper } from './styles';

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
