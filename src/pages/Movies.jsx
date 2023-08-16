import React, { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovie';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query');
  const moviesUrl = `https://api.themoviedb.org/3/search/movie?`;

  useEffect(() => {
    if (!queryString) return;

    setIsLoading(true);

    fetchMovies(moviesUrl, queryString)
      .then(movies => {
        setSearchMovie(movies);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [moviesUrl, queryString]);

  return (
    <div>
      <SearchForm />
      <MoviesList movies={searchMovie} />
      {error && <h5>Sorry. {error.message}</h5>}
    </div>
  );
};

export default Movies;
