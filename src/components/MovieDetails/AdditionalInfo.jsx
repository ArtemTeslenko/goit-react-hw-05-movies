import PropTypes from 'prop-types';
import { AdditionalItem, InfoNav, TextElement } from './MovieDetails.styled';

export const AdditionalInfo = ({ back }) => {
  return (
    <>
      <TextElement>Additional information</TextElement>
      <InfoNav>
        <li>
          <AdditionalItem to={'cast'} state={{ from: back }}>
            Cast
          </AdditionalItem>
        </li>
        <li>
          <AdditionalItem to={'reviews'} state={{ from: back }}>
            Reviews
          </AdditionalItem>
        </li>
      </InfoNav>
    </>
  );
};

AdditionalInfo.propTypes = {
  back: PropTypes.object.isRequired,
};
