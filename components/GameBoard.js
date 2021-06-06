import styles from './GameBoard.module.css';

const GameBoard = ({currentField1, currentField2}) => {

  let fieldsRow1 = [1, 2, 3, 4, 5, 6, 7, 8]
  let fieldsRow2 = [9, 10, 11, 12]
  return (
    <div className={styles.container}>
       <p className={styles.player1Stats}>Player 1: Vak {currentField1}</p>
        <p className={styles.player2Stats}>Player 2: Vak {currentField2}</p>
       <div className={styles.board}>
      <div className={styles.row1}>
      {fieldsRow1.map((field) => (
        <div key={field} className={styles.fieldRow1}>
         <p>{field}</p>
         <p className={styles.pion1}>{currentField1 == field ? "♟" : "" }</p> 
         <p className={styles.pion2}>{currentField2 == field ? "♟" : "" }</p> 
        </div>
      ))}
      </div>
      <div className={styles.row2}>
      {fieldsRow2.map((field) => (
        <div key={field} className={styles.fieldRow2}>
         <p>{field}</p>
         <p className={styles.pion1}>{currentField1 == field ? "♟" : "" }</p> 
        <p className={styles.pion2}>{currentField2 == field ? "♟" : "" }</p> 
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default GameBoard;