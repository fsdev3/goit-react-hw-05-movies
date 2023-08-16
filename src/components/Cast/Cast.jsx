import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        const response = await axios.get(`${castUrl}?`, {
          params: {
            language: 'en-US',
            api_key: '6a0683dee19fbdb413c6749ee38e1926',
          },
        });
        setCast(response.data.cast);
        console.log(response.data.cast);
        setIsLoading(false);
      } catch (error) {
        (error => setError(error.message)).finally(setIsLoading(false));
      }
    };

    fetchCast();
  }, [castUrl]);
  return (
    <div>
      {cast.length > 0 && (
        <ul>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
                width="100"
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
      {cast.length === 0 && <p>Sorry, no information...</p>}
      {isLoading && <Loader />}
      {error && <h5>Sorry. {error}</h5>}
    </div>
  );
};

export default Cast;
