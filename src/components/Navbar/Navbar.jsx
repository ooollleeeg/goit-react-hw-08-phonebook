import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import UserMenu from './UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import UserLogout from './UserLogout/UserLogout';

import { isUserLogin } from '../../redux/auth/auth-selector';

import styles from './navbar.module.scss';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={styles.navbar}>
      <NavLink to="/">logotyp</NavLink>

      {!isLogin && <UserAuth />}
      {isLogin && <UserLogout />}
    </div>
  );
};

export default Navbar;
