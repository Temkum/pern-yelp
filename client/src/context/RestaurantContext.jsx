import React, { useState, createContext } from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurants(...restaurants, restaurant);
  };

  const updateRestaurant = (updatedRestaurant) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
      )
    );
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurants, setRestaurants, addRestaurants, updateRestaurant }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
