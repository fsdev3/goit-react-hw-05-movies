import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day',
          {
            params: {
              language: 'en-US',
              api_key: '6a0683dee19fbdb413c6749ee38e1926',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
