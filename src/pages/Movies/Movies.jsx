import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/Search';
import { MovieLink, MoviesBox } from './Movies.styled';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.currentTarget.query.value;
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=894ef72300682f1db325dae2afe3e7e2&query=${query}&page=`
      )
      .then(resp => setMovies(resp.data.results));
  }, [searchParams]);

  return (
    <MoviesBox>
      <SearchForm onFormSubmit={handleSubmit} />
      <ul>
        {movies &&
          movies.map(({ id, original_title }) => (
            <li key={id}>
              <MovieLink to={`${id}`} state={{ from: location }}>
                {original_title}
              </MovieLink>
            </li>
          ))}
      </ul>
    </MoviesBox>
  );
};
