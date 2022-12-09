import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&page=1`
      )
      .then(resp => setMovies(resp.data.results))
      .catch(() => toast('Something went wrong please reload the page 🙈'))
      .finally(setIsLoading(false));
  }, []);

  return (
    <Section>
      <PageTitle>Trending today</PageTitle>
      {isLoading && <h1>Loading...</h1>}
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
