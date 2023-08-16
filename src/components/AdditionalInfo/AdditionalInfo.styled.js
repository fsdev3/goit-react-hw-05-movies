import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  &.active {
    color: orange;
  }
`;
