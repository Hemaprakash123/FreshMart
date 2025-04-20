import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllfruitsReducer,addfruitsReducer,getFruitByIdReducer, editfruitReducer} from './reducers/fruitsReducers';
import cartReducer from './reducers/cartReducer'; // Default import for cartReducer
import { registerUserReducer,loginUserReducer,getAllUsersReducer } from './reducers/userReducer';
import { loginUser } from './actions/userAction';
import { orderReducer } from './reducers/orderReducer';

const rootReducer = combineReducers({
  getAllfruitsReducer:getAllfruitsReducer,
  cartReducer:cartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
  orderReducer:orderReducer,
  addfruitsReducer:addfruitsReducer,
  getFruitByIdReducer:getFruitByIdReducer,
  editfruitReducer:editfruitReducer,
  getAllUsersReducer:getAllUsersReducer,
});

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  loginUserReducer: {
    currentUser: currentUser,
  },
  cartReducer: {
    cartItems: cartItems,
  },
};

const store = createStore(
  rootReducer,
  initialState, // ✅ Pass it here
  composeWithDevTools(applyMiddleware(thunk))
);

// ✅ Persist cart to localStorage when store changes
store.subscribe(() => {
  localStorage.setItem(
    'cartItems',
    JSON.stringify(store.getState().cartReducer.cartItems)
  );
});

export default store;

