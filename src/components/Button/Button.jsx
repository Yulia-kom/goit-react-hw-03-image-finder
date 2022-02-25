import style from './Button.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <button className={style.Button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default Button;
