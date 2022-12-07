import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainInfoBox = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-bottom: 10px;
`;

const Poster = styled.img`
  display: block;
  width: 250px;
  height: 100%;
`;

const Title = styled.h1``;

const MainInfoData = styled.div`
  padding-left: 20px;
`;

const TextElement = styled.p`
  margin-top: 0;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const InfoNav = styled.ul`
  margin: 0;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const AdditionalItem = styled(NavLink)``;

const GoBack = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Photo = styled.img`
  display: block;
  width: 120px;
  height: 100%;
  margin-bottom: 10px;
`;

export {
  MainInfoBox,
  Button,
  Poster,
  Title,
  MainInfoData,
  TextElement,
  InfoNav,
  Item,
  AdditionalItem,
  Photo,
  GoBack,
};
