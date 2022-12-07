import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.header`
  padding: 20px;
  box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.75);
`;

const NavItem = styled(NavLink)`
  padding: 5px;
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  border-radius: 5px;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 300ms;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active {
    color: #d55151;
  }
  :hover:not(.active) {
    text-decoration: underline;
  }
`;

export { HeaderBox, NavItem };
