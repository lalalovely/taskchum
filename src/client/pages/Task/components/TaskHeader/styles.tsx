import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  z-index: 3;
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 0px 12px;
  max-width: 620px;
`;

export const Content = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border}; //rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.h1`
  display: inline-block;
  margin: 0px;
  padding: 10px 0px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Controls = styled.span`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const UserContainer = styled.div`
  position: relative;
`;

export const UserButton = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  user-select: none;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  display: flex;
  line-height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const UserInitial = styled.span`
  height: 40px;
  width: 40px;
  font-size: 40px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 100%;
  text-align: center;
  align-self: center;
  fill: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
`;

export const AvatarIcon = styled.img`
  width: 28px;
  border-radius: 4px;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
`;

export const HeaderLogo = styled.div`
  display: flex;
  padding: 0 12px;
  align-items: center;
`;

export const HeaderItem = styled.div`
  //margin-left: 10px;
`;

export const HeaderControls = styled.div`
  display: flex;
  padding: 0 12px;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  gap: 16px;
`;

export const ButtonHolder = styled.div`
  margin-right: 8px;
`;

export const ToggleTheme = styled.div`
  .night {
    opacity: 0;
  }

  input:checked + .toggle .slider {
    transform: translateX(24px);
    border: 2px solid ${(props) => props.theme.colors.gray0};
  }

  input:checked + .toggle .sunny {
    opacity: 0;
  }

  input:checked + .toggle .night {
    opacity: 1;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;

export const ToggleButton = styled.label`
  display: flex;
  position: relative;
  padding: 5px;
  height: 20px;
  width: 45px;
  background-color: transparent; //#4d4d4d;
  border-radius: 30px;
  transition: 0.2s;
  align-items: center;
  justify-content: space-between;
  transform: scale(1.5);
  margin-right: 1rem;
  cursor: pointer;
  box-shadow: 0 0 1px ${(props) => props.theme.colors.gray0};
`;

export const Slider = styled.div`
  height: 15px;
  width: 15px;
  background-color: transparent;
  position: absolute;
  top: 2px;
  left: 3px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  border: 2px solid ${(props) => props.theme.colors.primaryLight};
`;
