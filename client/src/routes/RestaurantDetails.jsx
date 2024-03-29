import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantFinder from '../apis/RestaurantFinder';

const RestaurantDetails = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data);
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
          <h3 className="text-center display-3">{selectedRestaurant.name}</h3>
          <div className="card w-50">
            <div className="card-header fw-bold">{selectedRestaurant.name}</div>
            <div className="card-body">
              <h5 className="card-title">
                Located at: {selectedRestaurant.location}
              </h5>
              <p className="card-text">
                Price Range: {selectedRestaurant.price_range}
              </p>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleBackClick}
              >
                Go back
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
