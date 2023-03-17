import styles from './homePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Simple Phonebook </h1>
        <p className={styles.subtitle}>
          Introducing an application that allows you to save phone contacts. You
          must register to use the application. Enjoy :)
        </p>

        <button className={styles.btn}>
          <a
            href="/goit-react-hw-08-phonebook/register"
            className={styles.link}
          >
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
