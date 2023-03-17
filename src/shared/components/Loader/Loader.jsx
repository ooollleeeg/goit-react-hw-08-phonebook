import { RotatingLines } from 'react-loader-spinner';

import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderWrap}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
