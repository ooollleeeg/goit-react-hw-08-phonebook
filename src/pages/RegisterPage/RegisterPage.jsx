import { useDispatch } from 'react-redux';

import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from './RegisterForm/RegisterForm';

import styles from './registerPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default RegisterPage;
