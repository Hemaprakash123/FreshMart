import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, deliverOrder } from '../actions/orderActions';

export default function Orderslist() {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.orderReducer);
  const { orders, loading, error } = orderState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleDeliver = (orderId) => {
    dispatch(deliverOrder(orderId));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Orders List</h2>

      {loading && <p>Loading orders...</p>}
      {error && <p>Error: {error}</p>}

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Address</th>
            <th>Status</th>
            <th>Deliver</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.shippingDetails.name}</td>
              <td>₹{order.totalAmount}</td>
              <td>{order.shippingDetails.address}</td>
              <td>{order.status === 'Delivered' ? 'Delivered' : 'Pending'}</td>
              <td>
                {order.status !== 'Delivered' && (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleDeliver(order._id)}
                  >
                    Mark as Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
