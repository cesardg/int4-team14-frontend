import styles from './Checkbox.module.css'

const Checkbox = ({item, name, onClickButton}) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input id={item} onClick={(e) => onClickButton(e.target.value)} type="checkbox" name={name} className={styles.input} value={item}></input>
      <label htmlFor={item} className={styles.label} > {item}  </label>
    </div>
  )
}
 
export default Checkbox 