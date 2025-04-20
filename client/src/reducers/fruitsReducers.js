const initialState = {
  fruits: [],
  loading: false,
  error: null,
};

export const getAllfruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FRUITS_REQUEST':
      return { ...state, loading: true };
    case 'GET_FRUITS_SUCCESS':
      return { ...state, loading: false, fruits: action.payload };
    case 'GET_FRUITS_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addfruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRUITS_REQUEST':
      return { ...state, loading: true };
    case 'ADD_FRUITS_SUCCESS':
      return { ...state, loading: false, success:true };
    case 'ADD_FRUITS_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFruitByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FRUITBYID_REQUEST':
      return { ...state, loading: true };
    case 'GET_FRUITBYID_SUCCESS':
      return { ...state, loading: false, fruit: action.payload };
    case 'GET_FRUITBYID_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editfruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_FRUIT_REQUEST':
      return { ...state, editloading: true };
    case 'EDIT_FRUIT_SUCCESS':
      return { ...state, editloading: false, editsuccess:true };
    case 'EDIT_FRUIT_FAILED':
      return { ...state, editloading: false, editerror: action.payload };
    default:
      return state;
  }
};