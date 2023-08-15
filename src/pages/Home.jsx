import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesList from 'components/MoviesList/MoviesList';
const trendyUrl = 'https://api.themoviedb.org/3/trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
        console.error(error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <MoviesList movies={movies} />
      {/* {isLoading && <Loader />}
      {isError && <h5 textAlign="center">Sorry. {isError} 😭</h5>} */}
    </div>
  );
};

export default Home;
