import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, TextElement } from './MovieDetails.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US&page=1`
      )
      .then(({ data }) => setMovie(data.results));
  }, [movieId]);

  if (!movie) {
    return;
  }

  if (movie.length < 1) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      <ul>
        {movie.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <TextElement>
                <b>Author: {author}</b>
              </TextElement>
              <TextElement>{content}</TextElement>
            </Item>
          );
        })}
      </ul>
    </>
  );
};
