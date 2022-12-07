import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
`;

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
`;

const MovieList = styled.ul`
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0;
`;

const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const MovieLink = styled(NavLink)``;

export { Section, PageTitle, MovieList, MovieItem, MovieLink };
