import axios from 'axios';
import { COMMON_URL, IMG_PATH, KEY } from 'components/Utils';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Item, Photo, TextElement } from './MovieDetails.styled';

const defaultImg =
  'https://149645218.v2.pressablecdn.com/wp-content/uploads/2020/10/u8wSHMmMMXzZuAFBCmcsCK-1200x900.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${COMMON_URL}${movieId}/credits?api_key=${KEY}&language=en-US`)
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
                  ? `${IMG_PATH}w200${profile_path}`
                  : `${defaultImg}`
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
