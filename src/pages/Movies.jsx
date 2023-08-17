import React, { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const pathUrl = `search/movie?query=${query}`;

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchData(`${pathUrl}`)
      .then(res => {
        return res.results.length !== 0
          ? setSearchMovie(res.results)
          : error('Sorry, there are no results for your search criteria');
      })
      .catch(error => {
        return setError(error.message);
      })
      .finally(setIsLoading(false));
  }, [pathUrl, query, error]);

  return (
    <div>
      <SearchForm setSearchParams={setSearchParams} />
      <MoviesList movies={searchMovie} />
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`Sorry, ${error}`)}
    </div>
  );
};

export default Movies;
