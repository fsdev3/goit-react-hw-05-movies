import { Route, Routes } from 'react-router-dom';
import { StyledNavLink } from './App.styled';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={HomePage}></Route>
          <Route path="/movies" element={Movies}></Route>
        </Routes>
      </main>
    </div>
  );
};
