// import OrderHistory from "../screens/OrderHistory";

// const initialState = {
//     orders: [],
//     OrderHistory:[],
//     loading:false,
//     error:null,
//   };

//   export const orderReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'PLACE_ORDER':
//         return { ...state, orders: [...state.orders, action.payload] };
//       case 'SET_ORDERS':
//         return { ...state, orders: action.payload };
//       case 'FETCH_ORDER_HISTORY_REQUEST':
//         return {
//           ...state,
//           loading:true,
//         };
//         case 'FETCH_ORDER_HISTORY_SUCCESS':
//           return {
//             ...state,
//             loading: false,
//             orderHistory: action.payload,  // Correct key name: 'orderHistory'
//           }

//       case 'FETCH_ORDER_HISTORY_FAILURE':
//         return{
//           ...state,
//           loading:false,
//           error:action.payload,

//         }
//       default:
//         return state;

//     }
//   };

const initialState = {
  orders: [],
  orderHistory: [],
  loading: false,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLACE_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'FETCH_ORDER_HISTORY_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_ORDER_HISTORY_SUCCESS':
      return {
        ...state,
        loading: false,
        orderHistory: action.payload, // Correct state key: 'orderHistory'
      };
    case 'FETCH_ORDER_HISTORY_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'GET_ALLORDERS_REQUEST':
      return { ...state, loading: true };

    case 'GET_ALLORDERS_SUCCESS':
      return { ...state, loading: false, orders: action.payload };

    case 'GET_ALLORDERS_FAILED':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
