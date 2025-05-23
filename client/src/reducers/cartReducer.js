// const initialState = {
//   cartItems: [],
// };

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const alreadyExists = state.cartItems.find(
//         (item) => item._id === action.payload._id
//       );

//       if (alreadyExists) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((item) =>
//             item._id === action.payload._id ? action.payload : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload],
//         };
//       }

//     case 'DELETE_FROM_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item._id !== action.payload._id
//         ),
//       };

//     case 'CLEAR_CART':
//       localStorage.removeItem('cartItems');
//       return { ...state, cartItems: [] };

//     default:
//       return state;
//   }
// };

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload._id),
      };
    case 'UPDATE_CART_ITEM_QUANTITY':
      return {
        ...state,
        cartItems: action.payload,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
