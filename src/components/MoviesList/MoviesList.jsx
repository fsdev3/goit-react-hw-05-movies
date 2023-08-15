import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
