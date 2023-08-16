import React from 'react';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, overview, genres, vote_average } =
    movie || {};
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h2>
        {title}( {release_date.substr(0, 4)} )
      </h2>
      <p>User score: {Math.floor(vote_average)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </p>
    </div>
  );
};

export default MovieCard;
