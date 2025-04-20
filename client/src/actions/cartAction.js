// // actions/cartAction.js
// export const addtocart = (fruit, quantity) => (dispatch, getState) => {
//     if (quantity < 1) return; // Prevent quantity from going below 1
  
//     const cartItem = {
//       name: fruit.name,
//       _id: fruit._id,
//       image: fruit.image,
//       quantity,
//       price: fruit.price, // Store original unit price
//     };

//     if(cartItem.quantity>10){
//         alert('Cannot addd items more than 10')
//         return
//     }
  
//     dispatch({
//       type: 'ADD_TO_CART',
//       payload: cartItem,
//     });
  
//     const cartItems = getState().cartReducer.cartItems;
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// };


// export const deletefromcart=(fruit)=>dispatch=>{
//     dispatch({type:'DELETE_FROM_CART',payload:fruit})
// } 

// export const clearCart=()=>(dispatch)=>{
//   dispatch({type:'CLEAR_CART'})
// }

// actions/cartAction.js


export const addtocart = (fruit, quantity) => (dispatch, getState) => {
  if (quantity < 1) return; // Prevent quantity from going below 1

  const cartItem = {
    name: fruit.name,
    _id: fruit._id,
    image: fruit.image,
    quantity,
    price: fruit.price, // Store original unit price
  };

  if (cartItem.quantity > 10) {
    alert('Cannot add items more than 10');
    return;
  }

  dispatch({
    type: 'ADD_TO_CART',
    payload: cartItem,
  });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deletefromcart = (fruit) => (dispatch) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: fruit });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: 'CLEAR_CART' });
};

export const updateCartItemQuantity = (id, action) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  const updatedCartItems = cartItems.map((item) =>
    item._id === id
      ? {
          ...item,
          quantity:
            action === 'increase'
              ? item.quantity + 1
              : action === 'decrease'
              ? Math.max(1, item.quantity - 1) // Prevent quantity from going below 1
              : item.quantity,
        }
      : item
  );

  dispatch({
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: updatedCartItems,
  });

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};
