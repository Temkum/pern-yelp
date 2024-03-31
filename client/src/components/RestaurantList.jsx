import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants, addRestaurants } =
    useContext(RestaurantContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        addRestaurants(response.data);
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getRestaurants();
  }, [addRestaurants, setRestaurants]);

  const deleteRestaurant = async (e, id) => {
    e.stopPropagation();

    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleDetailsClick = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.id} />
        <span className="badge text-bg-warning rounded-pill text-center ms-3">
          {restaurant.count}
        </span>
      </>
    );
  };

  return (
    <div className="container mt-4">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.ratingsData &&
            restaurants.ratingsData.map((restaurant) => {
              return (
                <tr
                  key={restaurant.id}
                  onClick={() => handleDetailsClick(restaurant.id)}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>
                    {/* <StarRating rating={restaurant.id} />
                    <span className="badge text-bg-primary rounded-pill text-center ms-3">
                      {restaurant.count}
                    </span> */}
                    {renderRating(restaurant)}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={(e) => handleEditClick(e, restaurant.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => deleteRestaurant(e, restaurant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
