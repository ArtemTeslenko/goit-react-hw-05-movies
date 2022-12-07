import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  MovieItem,
  MovieLink,
  MovieList,
  PageTitle,
  Section,
} from './Home.styled';
import { KEY } from 'components/Utils';

export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&page=1`
      )
      .then(resp => setMovies(resp.data.results));
  }, []);

  return (
    <Section>
      <PageTitle>Trending today</PageTitle>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ id, title }) => (
            <MovieItem key={id}>
              <MovieLink to={`movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </Section>
  );
};
