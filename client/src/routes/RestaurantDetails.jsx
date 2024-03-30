import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetails = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // go back to restaurant list
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="container mt-5">
      {selectedRestaurant && (
        <>
          <h2 className="text-center">{selectedRestaurant.restaurant.name}</h2>
          <Reviews reviews={selectedRestaurant.reviews} />
          <AddReview />
          <button
            type="button"
            className="btn btn-warning mt-3 btn-sm"
            onClick={handleBackClick}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
