import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✔ cleaner import
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { LoginScreen } from './screens/LoginScreen';
import { CartScreen } from './screens/CartScreen';
import { ProtectedRoute } from './components/ProtectedRoute';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'; // ✅ use Routes4
import OrderHistory from './screens/OrderHistory';
import AdminScreen from './screens/AdminScreen';
import Editfruit from './screens/Editfruit';

const user = JSON.parse(localStorage.getItem("user"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/"   element={<HomeScreen />} />
          <Route  path="/cart"   element={<CartScreen />} />
          <Route  path='/register'  element={<RegisterScreen />} />
          <Route  path="/login"  element={<ProtectedRoute><LoginScreen /></ProtectedRoute>} />
          <Route  path="/orderhistory" element={<OrderHistory user={user} />} />
          {/* <Route
            path="/admin"
            element={user?.admin ? <AdminScreen /> : <Navigate to="/" />}
          /> */}
          <Route path='/admin' element={<AdminScreen />}/>
          <Route path="/admin/editfruit/:fruitid" element={<Editfruit />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


