import axios from 'axios';
export const placeOrder = (orderData) => {
    return (dispatch) => {
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      const newOrder = { ...orderData, id: Date.now(), status: 'Placed' };
      localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));
      dispatch({ type: 'PLACE_ORDER', payload: newOrder });
    };
  };
  
  export const fetchOrders = () => {
    return (dispatch) => {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      dispatch({ type: 'SET_ORDERS', payload: orders });
    };
  };

  export const fetchOrderHistoryRequest = () => ({
    type: 'FETCH_ORDER_HISTORY_REQUEST',
  });
  
  export const fetchOrderHistorySuccess = (orders) => ({
    type: 'FETCH_ORDER_HISTORY_SUCCESS',
    payload: orders,
  });
  
  export const fetchOrderHistoryFailure = (error) => ({
    type: 'FETCH_ORDER_HISTORY_FAILURE',
    payload: error,
  });
  
  export const fetchOrderHistory = (userId) => {
    return async (dispatch) => {
      dispatch(fetchOrderHistoryRequest());
      try {
        const response = await axios.get(`https://freshmart-backend.vercel.app/api/orders/history/${userId}`);
        dispatch(fetchOrderHistorySuccess(response.data));
      } catch (error) {
        dispatch(fetchOrderHistoryFailure(error.message));
      }
    };
  };
  
  export const deliverOrder=(orderid)=>async dispatch=>{
    try {
      const response=await axios.post('https://freshmart-backend.vercel.app/api/orders/deliverorder',{orderid})
      console.log(response)
      alert('Order delivered')
      const orders=await axios.get('https://freshmart-backend.vercel.app/api/orders/getallorders')
      dispatch({type:'GET_ALLORDERS_SUCCESS',payload:orders.data})
    } catch (error) {
      console.log(error)
    }
  } 

  export const getAllOrders = () => async (dispatch) => {
    dispatch({ type: 'GET_ALLORDERS_REQUEST' });
  
    try {
      const response = await axios.get('https://freshmart-backend.vercel.app/api/orders/getallorders');
      dispatch({ type: 'GET_ALLORDERS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({
        type: 'GET_ALLORDERS_FAILED',
        payload: error.message,
      });
    }
  };
  