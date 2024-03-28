import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const RestaurantList = (props) => {
  const {restaurants, setRestaurants} = useContext(RestaurantContext);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getRestaurants();
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Reviews</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant) => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'$'. repeat(restaurant.price_range)}</td>
                <td>Ratings</td>
                <td>Reviews</td>
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
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
