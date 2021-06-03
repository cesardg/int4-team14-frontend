import styles from './GameBoard.module.css';

const GameBoard = ({currentField}) => {
  console.log(currentField)
  let fields = [1, 2, 3, 4, 5]
  return (
    <div className={styles.container}>
      {fields.map((field) => (
        <div key={field} className={styles.bordvak}>
         <p>{field}</p>
         <p className={styles.pion}>{currentField == field ? "♟" : "" }</p> 
        </div>
      ))}
    </div>
  )
}

export default GameBoard;