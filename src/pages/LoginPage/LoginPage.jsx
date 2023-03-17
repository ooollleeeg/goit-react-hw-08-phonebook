import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';

import LoginForm from './LoginForm/LoginForm';

import styles from './loginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <LoginForm onSubmit={handleLogin} className={styles.block} />
      </div>
    </div>
  );
};

export default LoginPage;
