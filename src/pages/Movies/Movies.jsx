import { MoviesBox } from './Movies.styled';
import { SearchForm } from 'components/Search';

export const Movies = () => {
  const onFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <MoviesBox>
      <SearchForm onFormSubmit={onFormSubmit} />
    </MoviesBox>
  );
};
