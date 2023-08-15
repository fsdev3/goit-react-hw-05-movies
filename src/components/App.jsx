import { Route, Routes } from 'react-router-dom';
import { StyledNavLink } from './App.styled';
import HomePage from 'pages/Home';
import Movies from 'pages/Movies';
// import NotFound from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import Home from 'pages/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
        <Route path="movies/:movieId/reviews" element={<Reviews />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
