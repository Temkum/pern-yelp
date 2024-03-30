import React, { useState } from 'react';

const AddReview = () => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('Rating');

  const handleSubmit = () => {};

  return (
    <div>
      <form action="" className="w-50">
        <h3 className="mt-3">Add a Review</h3>
        <div className="row mb-2">
          <div className="col">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                className="form-control"
                id="rating"
                name="rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            className="form-control"
            id="review"
            cols="30"
            rows="10"
            onChange={(e) => setReviewText(e.target.value)}
            value={reviewText}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
