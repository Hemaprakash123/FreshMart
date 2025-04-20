import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userAction'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginState = useSelector((state) => state.loginUserReducer)
  const { loading, error, success } = loginState

  // Redirect if already logged in
//   useEffect(() => {
//     const user = localStorage.getItem('currentUser')
//     if (user) {
//       navigate('/')
//     }
//   }, [navigate])

  useEffect(() => {
    if (success) {
      navigate('/')
    }
  }, [success, navigate])

  function login() {
    const user = { email, password }
    dispatch(loginUser(user))
  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-5 mt-5 text-left'>
        <h2 className='text-center m-2'>Login</h2>
        {loading && <div className="alert alert-info">Logging in...</div>}
        {error && <div className="alert alert-danger">Invalid Credentials</div>}
        <div>
          <input
            type='text'
            required
            placeholder='Email'
            className='form-control'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type='password'
            required
            placeholder='Password'
            className='form-control mt-2'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className='btn btn-primary m-3' onClick={login}>
            Login
          </button>
          <button className='btn btn-outline-secondary m-3' onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
