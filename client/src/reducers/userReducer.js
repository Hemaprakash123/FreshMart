const initialState={
  users:[]
}
export const registerUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'USER_REGISTER_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:
            return state;
    }
}
export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
        return { loading: true };
      case 'USER_LOGIN_SUCCESS':
        localStorage.setItem('currentUser',JSON.stringify(action.payload))
        return { loading: false, success: true, currentUser: action.payload };
      case 'USER_LOGIN_FAILED':
        return { loading: false, error: true };
      case 'USER_LOGOUT':
        localStorage.removeItem('currentUser')
        return {}
      default:
        return state;
    }
  };
  export const getAllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS_REQUEST':
        return { ...state, loading: true };
      case 'GET_USERS_SUCCESS':
        return { ...state, loading: false, users: action.payload };
      case 'GET_USERS_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };