import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const loginState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = loginState;

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};
