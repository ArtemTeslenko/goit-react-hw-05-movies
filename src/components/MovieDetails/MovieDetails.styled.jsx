import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainInfoBox = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Poster = styled.img`
  display: block;
  width: 250px;
  height: 100%;
`;

export const Title = styled.h1``;

export const MainInfoData = styled.div`
  padding-left: 20px;
`;

export const TextElement = styled.p`
  margin: 0 0 10px 0;
`;

export const InfoNav = styled.ul`
  margin: 0;
`;

export const AdditionalItem = styled(NavLink)``;
