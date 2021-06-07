import styles from './GameBoard.module.css';

const GameBoard = ({currentField1, currentField2}) => {

  let fieldsRow1 = [ [1,1, "type vak"], [2,2, "type vak"], [3,3, "type vak"], [4,4, "type vak"], [5,5, "type vak"], [6,6, "type vak"], [7,7, "type vak"], [8,8, "type vak"]]
  let fieldsRow2 = [[9,9, "type vak"], [10, 10, "type vak"], [11, 11, "type vak"], [12, 12, "type vak"]]
  return (
    <div className={styles.container}>
       <p className={styles.player1Stats}>Player 1: Vak {currentField1}</p>
        <p className={styles.player2Stats}>Player 2: Vak {currentField2}</p>
       <div className={styles.board}>
      <div className={styles.row1}>
      {fieldsRow1.map((field) => (
        <div key={field[0]} className={styles.fieldRow1}>
         <p>{field[0]}</p>
         <p className={styles.pion1}>{currentField1 == field[1] ? "♟" : "" }</p> 
         <p className={styles.pion2}>{currentField2 == field[1] ? "♟" : "" }</p> 
        </div>
      ))}
      </div>
      <div className={styles.row2}>
      {fieldsRow2.map((field) => (
        <div key={field[0]} className={styles.fieldRow2}>
         <p>{field[0]}</p>
         <p className={styles.pion1}>{currentField1 == field[1] ? "♟" : "" }</p> 
        <p className={styles.pion2}>{currentField2 == field[1] ? "♟" : "" }</p> 
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default GameBoard;