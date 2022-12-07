import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';
import { Header } from 'components/Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};
