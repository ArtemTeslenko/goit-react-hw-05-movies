import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SearchForm } from 'components/Search';
import { MovieLink, MoviesBox } from './Movies.styled';
import { KEY } from 'components/Utils';

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=`
      )
      .then(resp => setMovies(resp.data.results))
      .catch(() => toast('Something went wrong please try again 🐝'))
      .finally(setIsLoading(false));
  }, [searchParams]);

  return (
    <MoviesBox>
      {isLoading && <h1>Loading...</h1>}
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
