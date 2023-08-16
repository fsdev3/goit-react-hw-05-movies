import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <div>
      <h5>Additional Information</h5>
      <ul>
        <li key={'cast'}>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li key={'reviews'}>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
