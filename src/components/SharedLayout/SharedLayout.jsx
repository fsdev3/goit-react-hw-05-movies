import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
