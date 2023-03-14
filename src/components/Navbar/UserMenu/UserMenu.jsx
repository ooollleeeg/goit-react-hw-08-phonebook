import { NavLink } from 'react-router-dom';

import styles from './userMenu.module.scss';

const UserMenu = () => {
  return (
    <div className={styles.Wrapper}>
      <NavLink
        to="/contacts"
        //   className={getClassName}
      >
        Contacts
      </NavLink>
    </div>
  );
};

export default UserMenu;
