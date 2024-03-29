import React, { useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // use axios
    try {
      RestaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4 container">
      <div className="form-row">
        <form className="row gx-3 gy-2 align-items-center">
          <div className="col-sm-3">
            <label className="visually-hidden" htmlFor="specificSizeInputName">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <label className="visually-hidden" htmlFor="location">
              Location
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-3">
            <label className="visually-hidden" htmlFor="price_range">
              Price Range
            </label>
            <select
              className="form-select"
              id="price_range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option>Choose...</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
