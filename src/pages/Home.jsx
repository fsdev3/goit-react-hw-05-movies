import React, { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { fetchData } from 'services/fetchMovie';
import Notiflix from 'notiflix';

const pathUrl = 'trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData(`${pathUrl}`)
      .then(res => {
        return setMovies(res.results);
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {error && Notiflix.Notify.failure(`Sorry, ${error}`)}
    </div>
  );
};

export default Home;
