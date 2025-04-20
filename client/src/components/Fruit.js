import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../actions/cartAction'; // Adjust if needed
import './Fruit.css'; // Make sure this path is correct

const Fruit = ({ fruit }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    dispatch(addtocart(fruit, quantity));
    alert(`${fruit.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="product-image"
      />
      <h3>{fruit.name}</h3>
      <p>{fruit.description}</p>
      <p>Category: {fruit.category}</p>
      <p>Price: ₹{fruit.price * quantity}</p>

      <div style={{ margin: '10px 0' }}>
        <label htmlFor="quantity">Qty:</label>{' '}
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          style={{ marginLeft: '8px' }}
        >
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleAddToCart} className="btn btn-success">
        Add to Cart
      </button>
    </div>
  );
};

export default Fruit;

