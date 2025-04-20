import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fruit from '../components/Fruit';
import { getAllfruits } from '../actions/fruitAction';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const fruitsstate = useSelector(state => state.getAllfruitsReducer);
  const { fruits, error, loading } = fruitsstate || {};

  useEffect(() => {
    console.log('Dispatching getAllfruits...');
    dispatch(getAllfruits());
  }, [dispatch]);

  useEffect(() => {
    console.log('Fruits fetched:', fruits);
  }, [fruits]);

  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          fruits?.length > 0 ? (
            fruits.map((fruit) => (
              <div key={fruit._id || fruit.name}>
                <Fruit fruit={fruit} />
              </div>
            ))
          ) : (
            <h1>No fruits available</h1>
          )
        )}
      </div>
    </div>
  );
};

export default HomeScreen;


