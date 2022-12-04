import { MoviesBox } from './Movies.styled';
import { Outlet } from 'react-router-dom';
import { SearchForm } from 'components/Search';

export const Movies = () => {
  return (
    <MoviesBox>
      <SearchForm />
      <Outlet />
    </MoviesBox>
  );
};
