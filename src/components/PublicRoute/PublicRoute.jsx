import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import { getAuth } from '../../redux/auth/auth-selector';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
