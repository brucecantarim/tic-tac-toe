import { useState } from "react";
import Square from "./Square";
import styles from "./Board.module.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const calculateWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const row of winningPatterns) {
      const [a, b, c] = row;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner() || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <>
      <div data-testid="board" className={styles.board}>
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
      </div>
      {calculateWinner() && (
        <div>
          <h2
            data-testid="winner"
            className={styles.winner}
          >{`Winner: ${calculateWinner()}`}</h2>
          <button className={styles.restartButton} onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
      {!calculateWinner() && (
        <>
          <h2 className={styles.turn}>{isX ? "X" : "O"}'s turn</h2>
        </>
      )}
    </>
  );
};

export default Board;
