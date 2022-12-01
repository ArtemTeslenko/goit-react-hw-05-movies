import { Header, HomeBox, NavItem } from './Home.styled';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <HomeBox>
      <Header>
        <NavItem to="/">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </Header>
      <Outlet />
    </HomeBox>
  );
};
