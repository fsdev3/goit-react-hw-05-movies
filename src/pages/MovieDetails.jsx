import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Notiflix from 'notiflix';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathUrl = `movie/${movieId}`;

  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/movies');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchData(`${pathUrl}`)
      .then(res => {
        return setMovie(res);
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, [pathUrl]);

  function onGoBack() {
    navigate(goBackLink.current);
  }
  return (
    movie !== null && (
      <div>
        <MovieCard movie={movie} onGoBack={onGoBack} />
        <AdditionalInfo />
        {isLoading && <Loader />}
        {error && Notiflix.Notify.failure(`Sorry, ${error}`)}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
