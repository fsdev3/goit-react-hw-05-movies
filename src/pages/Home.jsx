import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesList from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
const trendyUrl = 'https://api.themoviedb.org/3/trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(`${trendyUrl}?`, {
          params: {
            language: 'en-US',
            api_key: '6a0683dee19fbdb413c6749ee38e1926',
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        setError(error).finally(setIsLoading(false));
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {error && <h5>Sorry. {error}</h5>}
    </div>
  );
};

export default Home;
