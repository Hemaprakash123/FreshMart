import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, getAllUsers } from '../actions/userAction';

export default function Userslist() {

  const dispatch=useDispatch()
  const usersstate=useSelector(state=>state.getAllUsersReducer)
  const{users}=usersstate
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])
  return (
    <div>
        <h1>Users list</h1>
        <table className='table table-striped table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>email</th>
              <th>Delete</th>
            </tr>

          </thead>
          <tbody>
            {users && users.map(user=>{
              return <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteuser(user._id))}}></i></td>
              </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}
