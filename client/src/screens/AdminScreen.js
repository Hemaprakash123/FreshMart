import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Userslist from './Userslist';
import Fruitslist from './Fruitslist';
import Addnewfruit from './Addnewfruit';
import Orderslist from './Orderslist';
import { useNavigate } from 'react-router-dom'; // ✅

export default function AdminScreen() {
  const navigate = useNavigate(); // ✅
  const [activeTab, setActiveTab] = useState('users');

  const loginState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = loginState;

//   useEffect(() => {
//     if (!currentUser || !currentUser.admin) {
//       navigate('/'); // ✅
//     }
//   }, [currentUser, navigate]);

  const renderTab = () => {
    switch (activeTab) {
      case 'users':
        return <Userslist />;
      case 'fruits':
        return <Fruitslist />;
      case 'addfruit':
        return <Addnewfruit />;
      case 'orders':
        return <Orderslist />;
      default:
        return null;
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <h2>Admin Panel</h2>
        <ul className="adminfunctions">
          <li><button onClick={() => setActiveTab('users')}>Users List</button></li>
          <li><button onClick={() => setActiveTab('fruits')}>Fruits List</button></li>
          <li><button onClick={() => setActiveTab('addfruit')}>Add New Fruit</button></li>
          <li><button onClick={() => setActiveTab('orders')}>Orders List</button></li>
        </ul>

        <div className="admin-content">
          {renderTab()}
        </div>
      </div>
    </div>
  );
}
