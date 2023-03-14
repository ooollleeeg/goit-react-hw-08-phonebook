import { NavLink } from 'react-router-dom';

import styles from './userAuth.module.scss';

const UserAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default UserAuth;
