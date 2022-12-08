import PropTypes from 'prop-types';
import {
  MainInfoBox,
  MainInfoData,
  Poster,
  Title,
} from './MovieDetails.styled';

export const MainInfo = ({
  posterSrc,
  title,
  releaseDate,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <MainInfoBox>
      <Poster src={posterSrc} alt={title} />
      <MainInfoData>
        <Title>
          {title} ({releaseDate})
        </Title>
        <p>User Score: {vote_average}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(({ name }) => `${name} `)}</p>
      </MainInfoData>
    </MainInfoBox>
  );
};

MainInfo.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
  overview: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
