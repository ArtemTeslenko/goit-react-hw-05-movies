import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { COMMON_URL, KEY } from 'components/Utils';
import { Item, TextElement } from './MovieDetails.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${COMMON_URL}${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
      )
      .then(({ data }) => setMovie(data.results))
      .catch(() => toast('Something went wrong please try again 🐝'))
      .finally(setIsLoading(false));
  }, [movieId]);

  if (!movie) {
    return;
  }

  if (movie.length < 1) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
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
