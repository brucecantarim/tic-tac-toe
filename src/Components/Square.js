import styles from "./Square.module.css";

const Square = ({ value, onClick }) => {
  return (
    <button data-testid="square" className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
