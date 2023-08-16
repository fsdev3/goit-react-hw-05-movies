import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';
import { CardList } from './Card.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathUrl = `movie/${movieId}/credits`;

  useEffect(() => {
    setIsLoading(true);
    fetchData(`${pathUrl}`)
      .then(res => {
        return setCast(res.cast);
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, [pathUrl]);
  return (
    <div>
      {cast.length > 0 && (
        <CardList>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
                width="140"
                height="210"
              />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </CardList>
      )}
      {cast.length === 0 && <p>Sorry, no information...</p>}
      {isLoading && <Loader />}
      {error && <h5>Sorry. {error}</h5>}
    </div>
  );
};

export default Cast;
