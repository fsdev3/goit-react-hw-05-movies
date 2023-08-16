import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import OtherMovieInfo from 'components/OtherMovieInfo/OtherMovieInfo';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

  useEffect(() => {
    if (!movieId) return;
    // console.log(movieId);

    setIsLoading(true);

    fetchMovies(detailsUrl)
      .then(movies => {
        // console.log(movies);
        setMovie(movies);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [detailsUrl, movieId]);
  return (
    movie !== null && (
      <div>
        <MovieCard movie={movie} />
        <OtherMovieInfo />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {isLoading && <Loader />}
        {error && <h5>Sorry. {error}</h5>}
      </div>
    )
  );
};

export default MovieDetails;
