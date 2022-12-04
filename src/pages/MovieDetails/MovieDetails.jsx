import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import { MainInfo } from '../../components/MovieDetails';
import { MoviesBox } from '../Movies/Movies.styled';
import { Button } from '../../components/MovieDetails/MovieDetails.styled';
import { AdditionalInfo } from '../../components/MovieDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=894ef72300682f1db325dae2afe3e7e2`
      )
      .then(resp => {
        return setMovie(resp.data);
      });
  }, [movieId]);

  //   console.log(movie);
  return (
    <MoviesBox>
      {movie && (
        <div>
          <Button type="button">
            <BsArrowLeft /> Go back
          </Button>
          <MainInfo
            posterSrc={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
            title={movie.original_title}
            releaseDate={new Date(movie.release_date).getFullYear()}
            vote_average={Math.round(movie.vote_average * 10)}
            overview={movie.overview}
            genres={movie.genres}
          />
          <hr />
          <AdditionalInfo />
          <hr />
          {/* <Outlet /> */}
        </div>
      )}
    </MoviesBox>
  );
};
