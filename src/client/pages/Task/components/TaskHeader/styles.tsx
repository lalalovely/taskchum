import styled from 'styled-components';
//import { HeaderContainer } from "../../../Login";

export const Container = styled.div`
  position: sticky;
  z-index: 3;
`;

export const Wrapper = styled.div`
  padding: 0px 12px;
  max-width: 620px;
  margin: auto;
`;

export const Content = styled.div`
  background-color: inherit;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary};
  margin: 0px;
  padding: 10px 0px;
  font-size: 20px;
`;

export const Controls = styled.span`
  display: flex;
  align-items: center;
`;

export const UserContainer = styled.div`
  position: relative;
`;

export const UserButton = styled.div`
  outline: none;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  text-transform: inherit;
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
  user-select: none;
`;

export const UserAvatar = styled.div`
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const UserInitial = styled.span`
  width: 40px;
  height: 40px;
  fill: #fff;
  color: #fff;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 500;
  line-height: 100%;
  text-align: center;
  align-self: center;
`;

export const AvatarIcon = styled.img`
  width: 28px;
  border-radius: 4px;
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const HeaderLogo = styled.div`
  align-items: center;
  display: flex;
  //height: 50px;
  padding: 0 12px;
`;

export const HeaderItem = styled.div`
  margin-left: 8px;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px;
  flex-shrink: 0;
`;

export const ButtonHolder = styled.div`
  margin-right: 8px;
`;

/*
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 12px;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #f2f3f4;
  background-color: #f2f3f4;
  margin: 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #7a858c; // #f2f3f4; //#4c5358;
  padding: 0 15px;
  outline: none;
  appearance: none;
`;
*/
