import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Item, Photo, TextElement } from './MovieDetails.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US`
      )
      .then(({ data }) => setMovie(data.cast));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <ul>
        {movie.map(({ id, profile_path, name, character }) => (
          <Item key={id}>
            <Photo
              src={
                profile_path
                  ? `https://www.themoviedb.org/t/p/w200${profile_path}`
                  : 'https://149645218.v2.pressablecdn.com/wp-content/uploads/2020/10/u8wSHMmMMXzZuAFBCmcsCK-1200x900.jpg'
              }
              alt={name}
            />
            <TextElement>{name}</TextElement>
            <TextElement>Caracter: {character}</TextElement>
          </Item>
        ))}
      </ul>
    </>
  );
};
