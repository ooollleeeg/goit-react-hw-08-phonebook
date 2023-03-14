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
      <h1>LoginPage</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
