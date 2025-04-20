import React, { useState } from 'react'
import { addfruitsReducer } from '../reducers/fruitsReducers'
import { useSelector,useDispatch } from 'react-redux'
import { addFruit } from '../actions/fruitAction'

export default function Addnewfruit() {
  const [name, setname] = useState('')
  const [price, setprice] = useState()
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const dispatch=useDispatch()

  const addfruitstate=useSelector(state=>state.addfruitsReducer)
  function formHandler(e){
    e.preventDefault()
    const fruit={
      name,
      price,
      image,
      description,
      category

    }
    console.log(fruit)
    dispatch(addFruit(fruit))
  }
  return (
    <div>
      <div>
        <h1>Add fruit</h1>
        <form onSubmit={formHandler}>
          <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
          <input className='form-control' type='text' placeholder='price' value={price} onChange={(e) => { setprice(e.target.value) }} />
          <input className='form-control' type='text' placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />
          <input className='form-control' type='text' placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
          <input className='form-control' type='text' placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
          <button className='btn' type='submit'>Add</button>
        </form>
      </div>
    </div>
  )
}
