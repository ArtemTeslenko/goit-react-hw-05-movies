import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;

export const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const MovieList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MovieLink = styled(NavLink)``;
