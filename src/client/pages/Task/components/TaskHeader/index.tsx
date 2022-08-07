import React, { useState } from 'react';
import { MdOutlineLogout, MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'src/client/components';
import { useAuth } from 'src/client/contexts/AuthContext';

import DropdownMenu from '../../../../components/DropdownMenu';

import { Container, Wrapper, Content, Logo, Controls, UserContainer, HeaderItem } from './styles';

export default function TaskHeader() {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

  const logoutIcon = <MdOutlineLogout size="20px" />;
  const profileIcon = <MdOutlineManageAccounts size="20px" />;
  const settingsIcon = <MdOutlineSettings size="20px" />;
  const dropdownMenuOptions = [
    { id: 1, name: 'Profile', icon: profileIcon, disabled: true },
    { id: 2, name: 'Settings', icon: settingsIcon, disabled: true },
    { id: 3, name: 'Logout', icon: logoutIcon, disabled: false },
  ];

  async function onLogOut() {
    await logOut();
    navigate('/login', { replace: true });
  }

  function onSelectDropdown(optionId: number) {
    switch (optionId) {
      case dropdownMenuOptions[2].id:
        onLogOut();
        break;
      default:
        return;
    }
  }

  function openDropdown() {
    setOpenDropdownMenu(true);
  }

  function closeDropdown() {
    setOpenDropdownMenu(false);
  }

  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo>taskchum</Logo>
          <Controls>
            <HeaderItem>
              <UserContainer>
                <Avatar showUserMenu={openDropdown} />
                {openDropdownMenu && (
                  <DropdownMenu
                    options={dropdownMenuOptions}
                    onSelect={onSelectDropdown}
                    onClose={closeDropdown}
                  />
                )}
              </UserContainer>
            </HeaderItem>
          </Controls>
        </Content>
      </Wrapper>
    </Container>
  );
}
