import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathUrl = `movie/${movieId}`;

  useEffect(() => {
    setIsLoading(true);
    fetchData(`${pathUrl}`)
      .then(res => {
        return setMovie(res);
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, [pathUrl]);

  //  function onGoBack() {
  //    navigate(backLinkHref.current);
  //  }
  return (
    movie !== null && (
      <div>
        <MovieCard movie={movie} />
        <AdditionalInfo />

        {isLoading && <Loader />}
        {error && <h5>Sorry. {error}</h5>}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
