import React from 'react';

import Logo from '../Logo';

import { HeaderContainer, HeaderContent, HeaderLogo, Filler } from './styles';

export default function NavBar() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <Filler></Filler>
      </HeaderContent>
    </HeaderContainer>
  );
}
