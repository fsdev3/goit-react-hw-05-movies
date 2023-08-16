import React, { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovie';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

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
      <SearchForm setSearchParams={setSearchParams} />
      <MoviesList movies={searchMovie} />
      {isLoading && <Loader />}
      {error && <h5>Sorry. {error}</h5>}
    </div>
  );
};

export default Movies;
