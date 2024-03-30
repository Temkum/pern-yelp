import React from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <div className="col" key={review.id}>
                <div className="card text-bg-light mb-3">
                  <div className="card-header d-flex justify-content-between">
                    <p>{review.name}</p>
                    <span>
                      <StarRating rating={review.rating} />
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{review.review}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No reviews yet</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
