import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';
import { Header } from 'components/Header';

export const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
};
