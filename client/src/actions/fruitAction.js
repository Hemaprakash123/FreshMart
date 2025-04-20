import axios from 'axios';

export const getAllfruits = () => async dispatch => {
  dispatch({ type: 'GET_FRUITS_REQUEST' });

  try {
    const response = await axios.get('/api/fruits');
    console.log('Fruits fetched from API:', response.data);
    dispatch({ type: 'GET_FRUITS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FRUITS_FAIL', payload: error.message });
  }
};



// fruitAction.js
export const getFruitById = (fruitid) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_FRUITBYID_REQUEST' });
    
    const { data } = await axios.get(`/api/fruits/getfruitbyid/${fruitid}`);
    
    dispatch({
      type: 'GET_FRUITBYID_SUCCESS',
      payload: data, // The fruit data you get from the API
    });
  } catch (error) {
    dispatch({
      type: 'GET_FRUITBYID_FAIL',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};



export const addFruit=(fruit)=> async dispatch=>{
  dispatch({type:'ADD_FRUITS_REQUEST'})
  try {
    const response=await axios.post('/api/fruits/addfruit',{fruit})
    console.log(response)
    dispatch({type:'ADD_FRUITS_SUCCESS'})
  } catch (error) {
    dispatch({type:'ADD_FRUITS_FAILED',payload:error})
  }
}

export const editfruit = (editedfruit) => async dispatch => {
  dispatch({ type: 'EDIT_FRUIT_REQUEST' });

  try {
    const response = await axios.post('/api/fruits/editfruit',{editedfruit});
    console.log(response);
    dispatch({ type: 'EDIT_FRUIT_SUCCESS'});
  } catch (error) {
    dispatch({ type: 'GET_FRUIT_FAIL', payload: error.message });
  }
};

export const deleteFruit=(fruitid)=>async dispatch=>{
  try{
    const response=await axios.post('/api/fruits/deletefruit',{fruitid})
    alert('deleted successfully')
    console.log(response)
    window.location.reload()
  }
  catch(error){
    alert('something went wrong')
    console.log(error)
  }
}