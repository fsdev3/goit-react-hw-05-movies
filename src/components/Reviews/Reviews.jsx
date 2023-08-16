import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/fetchMovie';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const pathUrl = `movie/${movieId}/reviews`;

  useEffect(() => {
    setIsLoading(true);
    fetchData(`${pathUrl}`)
      .then(res => {
        return setReviews(res.results);
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false));
  }, [pathUrl]);
  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {error && <h5>Sorry. {error}</h5>}
    </div>
  );
};

export default Reviews;
