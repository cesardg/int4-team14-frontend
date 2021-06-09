import styles from "./GameBoard.module.css";

const GameBoard = ({ currentField1, currentField2, player }) => {
 
  let fieldsRow1 = [
    [1, 1, "start"],
    [2, 2, "empty"],
    [3, 3, "action"],
    [4, 4, "empty"],
    [5, 5, "chance"],
    [6, 6, "empty"],
    [7, 7, "action"],
    [8, 8, "empty"],
    [9, 9, "wifi"],
  ];
  let fieldsRow2 = [
    [10, 10, "type vak"],
    [11, 11, "type vak"],
    [12, 12, "type vak"],
    [13, 13, "type vak"],
    [14, 14, "type vak"],
    [15, 15, "type vak"],
    [16, 16, "type vak"],
  ];
  let fieldsRow3 = [
    [17, 17, "type vak"],
    [18, 18, "type vak"],
    [19, 19, "type vak"],
    [20, 20, "type vak"],
    [21, 21, "type vak"],
    [22, 22, "type vak"],
    [23, 23, "type vak"],
    [24, 24, "type vak"],
    [25, 25, "type vak"],
  ];
  let fieldsRow4 = [
    [26, 26, "type vak"],
    [27, 27, "type vak"],
    [28, 28, "type vak"],
    [29, 29, "type vak"],
    [30, 30, "type vak"],
    [31, 31, "type vak"],
    [32, 32, "type vak"],
  ];

  return (
    <div className={styles.container}>
      <p>Player = {player}</p>
      <p className={styles.player1Stats}>Player 1: Vak {currentField1}</p>
      <p className={styles.player2Stats}>Player 2: Vak {currentField2}</p>
      <div className={styles.board}>
        <div className={styles.row1}>
          {fieldsRow1.map((field) => (
            <div key={field[0]} className={styles.fieldRow1}>
              <p>{field[0]}</p>
              <p className={styles.pion1}>
                {currentField1[0] == field[1] ? "♟" : ""}
              </p>
              <p className={styles.pion2}>
                {currentField2[0] == field[1] ? "♟" : ""}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.row2}>
          {fieldsRow2.map((field) => (
            <div key={field[0]} className={styles.fieldRow2}>
              <p>{field[0]}</p>
              <p className={styles.pion1}>
                {currentField1[0] == field[1] ? "♟" : ""}
              </p>
              <p className={styles.pion2}>
                {currentField2[0] == field[1] ? "♟" : ""}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.row3}>
          {fieldsRow3.map((field) => (
            <div key={field[0]} className={styles.fieldRow3}>
              <p>{field[0]}</p>
              <p className={styles.pion1}>
                {currentField1[0] == field[1] ? "♟" : ""}
              </p>
              <p className={styles.pion2}>
                {currentField2[0] == field[1] ? "♟" : ""}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.row4}>
          {fieldsRow4.map((field) => (
            <div key={field[0]} className={styles.fieldRow4}>
              <p>{field[0]}</p>
              <p className={styles.pion1}>
                {currentField1[0] == field[1] ? "♟" : ""}
              </p>
              <p className={styles.pion2}>
                {currentField2[0] == field[1] ? "♟" : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
