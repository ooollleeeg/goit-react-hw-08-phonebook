import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selector';

import styles from './userLogout.module.scss';

const UserLogout = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <span className={styles.username}> Wellcome, {name}</span>
      <button onClick={onLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserLogout;
