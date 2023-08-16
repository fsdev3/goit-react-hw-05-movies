import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reviewUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  useEffect(() => {
    // setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${reviewUrl}?`, {
          params: {
            language: 'en-US',
            api_key: '6a0683dee19fbdb413c6749ee38e1926',
          },
        });
        setReviews(response.data.results);
        setIsLoading(false);
      } catch (error) {
        (error => setError(error.message)).finally(setIsLoading(false));
      }
    };

    fetchReviews();
  }, [reviewUrl]);
  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h6>Author : {review.author}</h6>
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
