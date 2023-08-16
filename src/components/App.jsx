import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};
