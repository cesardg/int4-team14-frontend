import styles from './GameBoard.module.css';

const GameBoard = ({pion}) => {

  console.log(pion)

  
  return (
   <p className={styles.bordvak}></p>
  )
}

export default GameBoard;