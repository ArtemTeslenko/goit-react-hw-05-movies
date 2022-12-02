import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/week?api_key=894ef72300682f1db325dae2afe3e7e2&page=1'
      )
      .then(resp => setMovies(resp.data.results));
  }, []);

  console.log(movies);
  return (
    <div>
      {movies.map(movie => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};
