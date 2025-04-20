import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllfruits,deleteFruit } from '../actions/fruitAction';
import { Link } from 'react-router-dom'; // ✅

export default function Fruitslist() {
    const dispatch = useDispatch();

    const fruitsstate = useSelector(state => state.getAllfruitsReducer);
    const { fruits, error, loading } = fruitsstate || {};
    useEffect(() => {
        console.log('Dispatching getAllfruits...');
        dispatch(getAllfruits());
    }, [dispatch]);
    return (
        <div>
            <h2>Fruits list</h2>
            <table className='table '>
                <thead className='thead-dark'>
                     <tr >
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                     </tr>
                </thead>
                <tbody>
                {fruits && fruits.map(fruit=>{
                    return <tr>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.category}</td>
                        <td>
                            <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteFruit(fruit._id))}}></i>
                            <Link to={`/admin/editfruit/${fruit._id}`}><i className='fa fa-edit m-1'></i></Link>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            
        </div>
    )
}
