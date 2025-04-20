// import React, { useState, useEffect } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { registerUser } from '../actions/userAction'

// export const RegisterScreen = () => {
//     const [name, setname] = useState('')
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')
//     const [cpassword,setcpassword]=useState('')

//     const dispatch=useDispatch()

//     function register(){
//         if(password!=cpassword){
//             alert("passwords are not matching")
//         }
//         else{
//             const user={
//                 name,
//                 email,
//                 password
//             }
//             console.log(user)
//             dispatch(registerUser(user))
//         }
//     }
//     return (
//         <div className='row justify-content-center mt-5'>
//             <div className='col-md-5 mt-5 text-left'>
//                 <h2 className='text-center m-2' >Register</h2>
//                 <div>
//                     <input type='text' required placeholder='name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}} />
//                     <input type='text' required placeholder='email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
//                     <input type='text' required placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
//                     <input type='text' required placeholder='confirm password' className='form-control' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
//                     <button className='btn mt-3' onClick={register}>Register</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import { useNavigate } from 'react-router-dom'; // ✅

export const RegisterScreen = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate(); // ✅

    function register() {
        if (password !== cpassword) {
            alert("Passwords do not match");
        } else {
            const user = { name, email, password };
            console.log(user);
            dispatch(registerUser(user, navigate)); // ✅ Pass navigate
        }
    }

    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-left'>
                <h2 className='text-center m-2'>Register</h2>
                <div>
                    <input type='text' required placeholder='name' className='form-control' value={name} onChange={(e) => setname(e.target.value)} />
                    <input type='text' required placeholder='email' className='form-control' value={email} onChange={(e) => setemail(e.target.value)} />
                    <input type='password' required placeholder='password' className='form-control' value={password} onChange={(e) => setpassword(e.target.value)} />
                    <input type='password' required placeholder='confirm password' className='form-control' value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                    <button className='btn mt-3' onClick={register}>Register</button>
                </div>
            </div>
        </div>
    );
};
