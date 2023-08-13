import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 20px;
  transition: all 0.3s;
  &.active {
    color: orange;
  }
`;
