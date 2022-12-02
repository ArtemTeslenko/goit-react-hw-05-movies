import { HeaderBox, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <NavItem to="/">Home</NavItem>
      <NavItem to="movies">Movies</NavItem>
    </HeaderBox>
  );
};
