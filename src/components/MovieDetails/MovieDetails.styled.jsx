import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainInfoBox = styled.div`
  display: flex;
`;

export const Button = styled.button`
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
  margin-top: 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const InfoNav = styled.ul`
  margin: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AdditionalItem = styled(NavLink)``;

export const GoBack = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Photo = styled.img`
  display: block;
  width: 120px;
  height: 100%;
  margin-bottom: 10px;
`;
