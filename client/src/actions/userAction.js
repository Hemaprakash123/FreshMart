import axios from 'axios';

// Register User
export const registerUser = (user,navigate) => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });

  try {
    const response = await axios.post('http://localhost:8080/api/users/register', user);
    console.log(response);

    dispatch({ type: 'USER_REGISTER_SUCCESS' });

    // Auto-login after registration
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    navigate('/login')
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAILED',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Login User
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' });

  try {
    const response = await axios.post('http://localhost:8080/api/users/login', user);
    console.log(response);

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
    localStorage.setItem('currentUser', JSON.stringify(response.data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAILED',
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Logout User
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('currentUser');
  dispatch({ type: 'USER_LOGOUT' });
  window.location.href = '/login'; // Redirect after logout
};

export const getAllUsers = () => async dispatch => {
  dispatch({ type: 'GET_USERS_REQUEST' });

  try {
    const response = await axios.get('http://localhost:8080/api/users/getallusers');
    console.log('Fruits fetched from API:', response.data);
    dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_USERS_FAIL', payload: error.message });
  }
};


export const deleteuser=(userid)=>async dispatch=>{
  try {
    await axios.post('http://localhost:8080/api/users/deleteuser',{userid})
    alert('user deleted successfully')
    window.location.reload()
  } catch (error) {
    alert('something went wrong')
    console.log(error)
  }
}