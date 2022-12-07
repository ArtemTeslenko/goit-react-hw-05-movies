import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import { MainInfo, AdditionalInfo } from '../../components/MovieDetails';
import { MoviesBox } from '../Movies/Movies.styled';
import {
  Button,
  GoBack,
} from '../../components/MovieDetails/MovieDetails.styled';
import { COMMON_URL, IMG_PATH, KEY } from 'components/Utils';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${COMMON_URL}${movieId}?api_key=${KEY}`).then(resp => {
      return setMovie(resp.data);
    });
  }, [movieId]);

  const backPath = location.state?.from ?? '/';

  return (
    <MoviesBox>
      {movie && (
        <div>
          <Button type="button">
            <GoBack to={backPath}>
              <BsArrowLeft /> Go back
            </GoBack>
          </Button>
          <MainInfo
            posterSrc={`${IMG_PATH}w300${movie.poster_path}`}
            title={movie.original_title}
            releaseDate={new Date(movie.release_date).getFullYear()}
            vote_average={Math.round(movie.vote_average * 10)}
            overview={movie.overview}
            genres={movie.genres}
          />
          <hr />
          <AdditionalInfo />
          <hr />
          <Outlet />
        </div>
      )}
    </MoviesBox>
  );
};
