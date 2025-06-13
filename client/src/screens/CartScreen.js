// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import OrderForm from '../components/OrderForm';

// export const CartScreen = () => {
//   const [showForm, setShowForm] = useState(false);
//   const cartstate = useSelector((state) => state.cartReducer);
//   const cartItems = cartstate.cartItems;

//   // Get current user from Redux store
//   const user = useSelector((state) => state.loginUserReducer.currentUser);

//   const totalAmount = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="row justify-content-center">
//       <div className="col-md-6">
//         <h2>My Cart</h2>
//         {cartItems.length === 0 ? (
//           <h5>Your cart is empty</h5>
//         ) : (
//           cartItems.map((item) => (
//             <div className="flex-container" key={item._id || item.name}>
//               <div className="text-left m-3">
//                 <h6>{item.name}</h6>
//                 <h6>
//                   Price: {item.quantity} × ₹{item.price} = ₹
//                   {item.quantity * item.price}
//                 </h6>
//                 <h6 style={{ display: 'inline' }}>Quantity:</h6>{' '}
//                 {/* Quantity increment and decrement logic */}
//               </div>
//               <div className="m-1 w-100">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{ height: '80px', width: '80px' }}
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="col-md-4">
//         <h4>Total: ₹{totalAmount}</h4>
//         <button onClick={() => setShowForm(true)} className="btn btn-primary">
//           Pay now
//         </button>
//         {showForm && (
//           <OrderForm
//             onClose={() => setShowForm(false)}
//             totalAmount={totalAmount}
//             cartItems={cartItems}
//             user={user} // Pass user as a prop here
//           />
//         )}
//       </div>
//     </div>
//   );
// // };
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'; // Import axios
// import OrderForm from '../components/OrderForm';
// import { updateCartItemQuantity, clearCart } from '../actions/cartAction'; // Correct path for cartActions

// export const CartScreen = () => {
//   const [showForm, setShowForm] = useState(false);
//   const dispatch = useDispatch();

//   const cartstate = useSelector((state) => state.cartReducer);
//   const cartItems = cartstate.cartItems;

//   const user = useSelector((state) => state.loginUserReducer.currentUser);
  
//   const totalAmount = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const handleIncreaseQuantity = (id) => {
//     dispatch(updateCartItemQuantity(id, 'increase'));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(updateCartItemQuantity(id, 'decrease'));
//   };

//   const handlePlaceOrder = () => {
//     // Here, you can dispatch the action to place an order
//     dispatch(clearCart()); // Clear the cart after placing the order
//     setShowForm(false);
//   };

//   const fetchOrderHistory = async (userId) => {
//     try {
//       const response = await axios.get(`/api/orders/history/${userId}`);
//       console.log('Order history:', response.data);
//     } catch (error) {
//       console.error('Error fetching order history:', error);
//     }
//   };

//   return (
//     <div className="row justify-content-center">
//       <div className="col-md-6">
//         <h2>My Cart</h2>
//         {cartItems.length === 0 ? (
//           <h5>Your cart is empty</h5>
//         ) : (
//           cartItems.map((item) => (
//             <div className="flex-container" key={item._id || item.name}>
//               <div className="text-left m-3">
//                 <h6>{item.name}</h6>
//                 <h6>
//                   Price: {item.quantity} × ₹{item.price} = ₹
//                   {item.quantity * item.price}
//                 </h6>
//                 <div>
//                   <button onClick={() => handleDecreaseQuantity(item._id)}>
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => handleIncreaseQuantity(item._id)}>
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="m-1 w-100">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{ height: '80px', width: '80px' }}
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="col-md-4">
//         <h4>Total: ₹{totalAmount}</h4>
//         <button onClick={() => setShowForm(true)} className="btn btn-primary">
//           Pay now
//         </button>
//         {showForm && (
//           <OrderForm
//             onClose={() => setShowForm(false)}
//             totalAmount={totalAmount}
//             cartItems={cartItems}
//             user={user}
//             fetchOrderHistory={fetchOrderHistory} // Pass fetchOrderHistory as a prop
//           />
//         )}
//       </div>
//     </div>
//   );
// };
// export const CartScreen = () => {
//   const [showForm, setShowForm] = useState(false);
//   const dispatch = useDispatch();

//   const cartstate = useSelector((state) => state.cartReducer);
//   const cartItems = cartstate.cartItems;

//   const user = useSelector((state) => state.loginUserReducer.currentUser);

//   const totalAmount = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const handleIncreaseQuantity = (id) => {
//     dispatch(updateCartItemQuantity(id, 'increase'));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(updateCartItemQuantity(id, 'decrease'));
//   };

//   const handlePlaceOrder = () => {
//     if (!user || !user._id) {
//       alert('Please log in first to place an order.');
//       return;
//     }
    
//     // Show the form without clearing the cart
//     setShowForm(true); // Show the form
//   };

//   const handleSubmitOrder = () => {
//     // Clear the cart when the order is successfully placed
//     dispatch(clearCart()); // Clear the cart after the order is submitted
//     setShowForm(false); // Close the form
//   };

//   return (
//     <div className="cart-container">
//       <div className="cart-items">
//         <h2 className="cart-heading">My Cart</h2>
//         {cartItems.length === 0 ? (
//           <h5>Your cart is empty</h5>
//         ) : (
//           cartItems.map((item) => (
//             <div className="cart-item" key={item._id || item.name}>
//               <div className="item-details">
//                 <h6>{item.name}</h6>
//                 <h6>
//                   Price: {item.quantity} × ₹{item.price} = ₹
//                   {item.quantity * item.price}
//                 </h6>
//                 <div className="quantity-controls">
//                   <button
//                     className="quantity-btn"
//                     onClick={() => handleDecreaseQuantity(item._id)}
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="quantity-btn"
//                     onClick={() => handleIncreaseQuantity(item._id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div className="item-image" >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="cart-item-img"
//                 />
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="cart-summary">
//         <h4>Total: ₹{totalAmount}</h4>
//         <button className="pay-btn" onClick={handlePlaceOrder}>
//           Pay Now
//         </button>
//         {showForm && (
//           <OrderForm
//             onClose={() => setShowForm(false)}
//             totalAmount={totalAmount}
//             cartItems={cartItems}
//             user={user}
//             onSubmitOrder={handleSubmitOrder} // Pass the handleSubmitOrder function to the form
//           />
//         )}
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import OrderForm from '../components/OrderForm';
import { updateCartItemQuantity, clearCart } from '../actions/cartAction';

export const CartScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  const user = useSelector((state) => state.loginUserReducer.currentUser);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncreaseQuantity = (id) => {
    dispatch(updateCartItemQuantity(id, 'increase'));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(updateCartItemQuantity(id, 'decrease'));
  };

  const fetchOrderHistory = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orders/history/${userId}`);
      console.log('Order history:', response.data);
    } catch (error) {
      console.error('Error fetching order history:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h2 className="mb-4">🛒 My Cart</h2>
          {cartItems.length === 0 ? (
            <div className="alert alert-info">Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div
                className="card mb-3 shadow-sm"
                key={item._id || item.name}
              >
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-start"
                      style={{ height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text mb-1">
                        ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleDecreaseQuantity(item._id)}
                        >
                          −
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleIncreaseQuantity(item._id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Total: ₹{totalAmount}</h4>
            <button
              className="btn btn-success mt-3 w-100"
              onClick={() => {
                if (!user || !user._id) {
                  alert('Please log in first to place an order.');
                } else {
                  setShowForm(true);
                }
              }}
            >
              Pay Now
            </button>

            {showForm && (
              <div className="mt-4">
                <OrderForm
                  onClose={() => setShowForm(false)}
                  totalAmount={totalAmount}
                  cartItems={cartItems}
                  user={user}
                  fetchOrderHistory={fetchOrderHistory}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
