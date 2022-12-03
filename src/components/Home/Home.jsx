import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MovieItem,
  MovieLink,
  MovieList,
  PageTitle,
  Section,
} from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=1'
      )
      .then(resp => setMovies(resp.data.results));
  }, []);

  return (
    <Section>
      <PageTitle>Trending today</PageTitle>
      <MovieList>
        {movies.map(({ id, title }) => (
          <MovieItem key={id}>
            <MovieLink to={`movies/${id}`}>{title}</MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Section>
  );
};
