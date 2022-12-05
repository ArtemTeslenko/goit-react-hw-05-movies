import { AdditionalItem, InfoNav, TextElement } from './MovieDetails.styled';

export const AdditionalInfo = () => {
  return (
    <>
      <TextElement>Additional information</TextElement>
      <InfoNav>
        <li>
          <AdditionalItem to={'cast'}>Cast</AdditionalItem>
        </li>
        <li>
          <AdditionalItem to={'reviews'}>Reviews</AdditionalItem>
        </li>
      </InfoNav>
    </>
  );
};