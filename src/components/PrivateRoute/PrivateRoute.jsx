import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';

import { getAuth } from '../../redux/auth/auth-selector';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
