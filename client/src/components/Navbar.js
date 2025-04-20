// import React from 'react';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const cartstate = useSelector((state) => state.cartReducer);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
//         <a className="navbar-brand" href="/">
//           FreshMart
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a className="nav-link">Login</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href='/cart'>Cart({cartstate.cartItems.length})</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = loginState;

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const logout = () => {
    dispatch({ type: 'USER_LOGOUT' });
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
      <Link className="navbar-brand" to="/">
        <strong>FreshMart</strong>
      </Link>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link to="/orderhistory" className="nav-link">
              Order History
            </Link>
          </li>

          {currentUser ? (
            <>
              <li className="nav-item">
                <span className="nav-link">👤 {currentUser.name}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="btn btn-outline-primary" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar