// import React, { useState } from 'react';
// import axios from 'axios';

// const OrderForm = ({ totalAmount, cartItems, user, onClose }) => {
//     const [shippingDetails, setShippingDetails] = useState({
//       name: '',
//       phone: '',
//       address: '',
//     });
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setShippingDetails((prevDetails) => ({
//         ...prevDetails,
//         [name]: value,
//       }));
//     };
  
//     const submitOrder = async (e) => {
//         e.preventDefault();
//         console.log('Form submitted');  // Check if the form is submitted
      
//         if (!user) {
//           console.error('User is not logged in');
//           return; // Prevent submission if user is not logged in
//         }
      
//         const orderData = {
//           userId: user._id,
//           items: cartItems,
//           totalAmount,
//           shippingDetails,
//         };
      
//         try {
//           console.log('Submitting order data:', orderData);  // Log the order data to verify
//           const response = await axios.post('/api/orders/add', orderData);
//           console.log('Response from API:', response.data);  // Log the API response
//           if (response.status === 201) {
//             console.log('Order placed successfully');
//             onClose();  // Close form after submission
//           } else {
//             console.error('Failed to place order');
//           }
//         } catch (error) {
//           console.error('Error placing order', error);  // Log the error if the API request fails
//         }
//       };

//     return (
//       <div className="order-form">
//         <h4>Shipping Details</h4>
//         <form onSubmit={submitOrder}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={shippingDetails.name}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={shippingDetails.phone}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={shippingDetails.address}
//             onChange={handleInputChange}
//             required
//           />
//           <button type="submit">Place Order</button>
//           <button type="button" onClick={onClose}>Cancel</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default OrderForm;
  
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../actions/cartAction';

import axios from 'axios';

const OrderForm = ({ totalAmount, cartItems, user, onClose, fetchOrderHistory }) => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });
 const dispatch=useDispatch() 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const submitOrder = async (e) => {
    e.preventDefault();
  
    const orderData = {
      userId: user._id,
      items: cartItems,
      totalAmount,
      shippingDetails,
    };
  
    try {
      const response = await axios.post('/api/orders/add', orderData);
      console.log('Response from API:', response.data);
  
      dispatch(clearCart()); // 🔥 Clear cart after successful order
  
      onClose(); // Close form
  
      if (fetchOrderHistory) {
        fetchOrderHistory(user._id);
      }
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <div className="order-form">
      <h4>Shipping Details</h4>
      <form onSubmit={submitOrder}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={shippingDetails.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={shippingDetails.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingDetails.address}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Place Order</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default OrderForm;
