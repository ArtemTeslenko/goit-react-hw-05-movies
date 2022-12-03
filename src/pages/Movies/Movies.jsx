import { MoviesBox } from './Movies.styled';
import { SearchForm } from 'components/Search';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  const onFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <MoviesBox>
      <SearchForm onFormSubmit={onFormSubmit} />
      <Outlet />
    </MoviesBox>
  );
};
