import React from 'react';

const AddRestaurant = () => {
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
              />
            </div>
          </div>
          <div className="col-sm-3">
            <label className="visually-hidden" htmlFor="price_range">
              Price Range
            </label>
            <select className="form-select" id="price_range">
              <option>Choose...</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
