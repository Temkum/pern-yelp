import React from 'react'

const RestaurantList = () => {
  return (
    <div className='container-fluid mt-4'>
      {/* table of restaurants */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>location</td>
            <td>price_range</td>
            <td>price_range</td>
            <td>price_range</td>
            <td>
              <button type="button" className="btn btn-warning">
                Edit
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList