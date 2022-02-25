import { ImSpinner } from 'react-icons/im';
import style from './Loader.module.css';

const Loader = ({}) => {
  <div role="alert">
    <div style={styles.spinner}>
      <ImSpinner size="32" className={style.iconSpin} />
      Загружаем...
    </div>
  </div>;
};

export default Loader;
