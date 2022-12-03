import { MainInfoBox, Poster, Title } from './MovieCard.styled';

export const MainInfo = ({ posterSrc, title, releaseDate }) => {
  return (
    <MainInfoBox>
      <Poster src={posterSrc} alt={title} />
      <Title>
        {title} ({releaseDate})
      </Title>
    </MainInfoBox>
  );
};
