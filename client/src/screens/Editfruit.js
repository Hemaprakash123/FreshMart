// import React,{useEffect} from 'react';
// import { useParams } from 'react-router-dom'; // ✅
// import { useDispatch,useSelector } from 'react-redux';
// import { getFruitById } from '../actions/fruitAction';

// export default function Editfruit(match) {
// //   const { fruitid } = useParams(); // ✅
//     const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(getFruitById(match.params.fruitid))
//   },[])
//   return (
//     <div>
//       <h1>Edit fruit</h1>
//       <h1>Fruit id = {match.params.fruitid}</h1>
//     </div>
//   );
// }
// Editfruit.js
// import React, { useEffect,useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFruitById } from '../actions/fruitAction';

// export default function Editfruit() {
//      const [name, setname] = useState('')
//       const [price, setprice] = useState()
//       const [image, setimage] = useState('')
//       const [description, setdescription] = useState('')
//       const [category, setcategory] = useState('')
    
//   const { fruitid } = useParams();
//   const dispatch = useDispatch();
//   const getfruitbyidstate=useSelector(state=>state.getFruitByIdReducer)

//   const fruitState = useSelector(state => state.getFruitByIdReducer);
//   const { loading, error, fruit } = getfruitbyidstate;

//   useEffect(() => {
//     if(fruit){
//         setname(fruit.name)
//     }
//     else{
//         dispatch(getFruitById(match.params.fruitid))
//     }
//   }, [fruit,dispatch]);

//   function formHandler(e){
//       e.preventDefault()
//       const fruit={
//         name,
//         price,
//         image,
//         description,
//         category
  
//       }
//       console.log(fruit)
//     }

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <div>
//         <h1>Add fruit</h1>
//         <form onSubmit={formHandler}>
//           <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
//           <input className='form-control' type='text' placeholder='price' value={price} onChange={(e) => { setprice(e.target.value) }} />
//           <input className='form-control' type='text' placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />
//           <input className='form-control' type='text' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
//           <input className='form-control' type='text' placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
//           <button className='btn' type='submit'>Add</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editfruit, getFruitById } from '../actions/fruitAction';


export default function Editfruit() {
  // Initialize state for form fields
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  // Get the fruitid from the URL params
  const { fruitid } = useParams();
  
  // Get dispatch and selector
  const dispatch = useDispatch();
  const getfruitbyidstate = useSelector(state => state.getFruitByIdReducer);
  const { loading, error, fruit } = getfruitbyidstate;
  const editfruitstate=useSelector((state)=>state.editfruitReducer)
  const {editloading,editerror,editsuccess}=editfruitstate

  // Fetch the fruit data when the component mounts or fruitid changes
  useEffect(() => {
    if (fruitid) {
      dispatch(getFruitById(fruitid)); // Dispatch the action to fetch the fruit by id
    }
  }, [dispatch, fruitid]);

  // Update form fields once the fruit data is fetched
  useEffect(() => {
    if (fruit) {
      setname(fruit.name);
      setprice(fruit.price);
      setimage(fruit.image);
      setdescription(fruit.description);
      setcategory(fruit.category);
    }
  }, [fruit]);

  // Handle form submission
  function formHandler(e) {
    e.preventDefault();
    const editedFruit = {
      _id: fruitid,
      name,
      price,
      image,
      description,
      category
    };
    console.log(editedFruit); // You can dispatch an action to update the fruit here
    dispatch(editfruit(editedFruit))
  }

  // Display loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Edit Fruit</h1>
      <form onSubmit={formHandler}>
        <input
          className='form-control'
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          className='form-control'
          type='text'
          placeholder='Price'
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          className='form-control'
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <input
          className='form-control'
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <input
          className='form-control'
          type='text'
          placeholder='Category'
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <button className='btn' type='submit'>Update Fruit</button>
      </form>
    </div>
  );
}
