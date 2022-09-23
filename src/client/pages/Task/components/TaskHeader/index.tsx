import React, { useState } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'src/client/components';
import { useAuth } from 'src/client/contexts/AuthContext';

import DropdownMenu from '../../../../components/DropdownMenu';

import {
  Container,
  Wrapper,
  Content,
  Logo,
  Controls,
  UserContainer,
  HeaderItem,
  ToggleTheme,
  Checkbox,
  ToggleButton,
  Slider,
} from './styles';

type TaskHeaderProps = {
  toggleTheme: () => void;
};

export default function TaskHeader(props: TaskHeaderProps) {
  const { toggleTheme } = props;
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

  const logoutIcon = <MdOutlineLogout size="20px" />;
  const dropdownMenuOptions = [{ id: 1, name: 'Logout', icon: logoutIcon, disabled: false }];

  async function onLogOut() {
    await logOut();
    navigate('/login', { replace: true });
  }

  function onSelectDropdown(optionId: number) {
    switch (optionId) {
      case dropdownMenuOptions[0].id:
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
              <ToggleTheme>
                <Checkbox
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={toggleTheme}
                />
                <ToggleButton htmlFor="checkbox" className="toggle">
                  <HiOutlineMoon size="14px" color="#a8a9ad" className="night" />
                  <HiOutlineSun size="14px" color="#f39c12" className="sunny" />
                  <Slider className="slider" />
                </ToggleButton>
              </ToggleTheme>
            </HeaderItem>
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
