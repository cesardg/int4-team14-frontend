import styles from './Checkbox.module.css'

const Checkbox = ({item, name, onClickButton}) => {
  return (
    <label className={styles.label} >
      {item}
      <input onClick={(e) => onClickButton(e.target.value)} type="checkbox" name={name} className={styles.hidden} value={item}></input>
    </label>
  )
}
 
export default Checkbox 