// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchOrderHistory } from '../actions/orderActions'; // Adjust path if needed

// const OrderHistory = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.loginUserReducer.currentUser);  // Correct user access
//   const { orderHistory, loading, error } = useSelector((state) => state.orderReducer || {});


//   useEffect(() => {
//     if (user && user._id) {
//       dispatch(fetchOrderHistory(user._id)); // Fetch orders when user is present
//     }
//   }, [user, dispatch]);
  

//   if (!user) {
//     return <p>Please log in to view your order history.</p>;
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error fetching order history: {error}</p>;
//   }

//   return (
//     <div>
//       <h3>Order History</h3>
//       {orderHistory && orderHistory.length === 0 ? (
//         <p>No orders found</p>
//       ) : (
//         <ul>
//           {orderHistory.map((order) => (
//             <li key={order._id}>
//               <h5>Order ID: {order._id}</h5>
//               <p>Total Amount: ₹{order.totalAmount}</p>
//               <p>Status: {order.status}</p>
//               <p>Shipping Address: {order.shippingDetails.address}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
  
// };

// export default OrderHistory;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderHistory } from '../actions/orderActions';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginUserReducer.currentUser); // Correct user state path
  const { orderHistory, loading, error } = useSelector((state) => state.orderReducer || {});

  useEffect(() => {
    if (user && user._id) {
      dispatch(fetchOrderHistory(user._id)); // Fetch orders when user is present
    }
  }, [user, dispatch]);

  if (!user) {
    return <p>Please log in to view your order history.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching order history: {error}</p>;
  }

  return (
    <div>
      <h3>Order History</h3>
      {orderHistory && orderHistory.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orderHistory.map((order) => (
            <li key={order._id}>
              <h5>Order ID: {order._id}</h5>
              <p>Total Amount: ₹{order.totalAmount}</p>
              <p>Status: {order.status}</p>
              <p>Shipping Address: {order.shippingDetails.address}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
