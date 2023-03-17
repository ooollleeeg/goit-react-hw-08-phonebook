import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import pbook from '../../images/pbook.png';

import UserAuth from './UserAuth/UserAuth';
import UserLogout from './UserLogout/UserLogout';

import { isUserLogin } from '../../redux/auth/auth-selector';

import styles from './navbar.module.scss';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        <img src={pbook} alt="Phonebook" className={styles.logo} />
      </NavLink>

      {!isLogin && <UserAuth />}
      {isLogin && <UserLogout />}
    </div>
  );
};

export default Navbar;
