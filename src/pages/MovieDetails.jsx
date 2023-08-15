import MovieCard from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);

    fetchMovies(detailsUrl)
      .then(movies => {
        setMovie(movies);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [detailsUrl, movieId]);
  return (
    movie.id && (
      <div>
        <MovieCard movie={movie} />
        {/* <AdditionalInfo /> */}

        {/* <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> */}
      </div>
    )
  );
};

export default MovieDetails;
