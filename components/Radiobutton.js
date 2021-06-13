import styles from './Radiobutton.module.css'
import Image from 'next/image';

const Radiobutton = ({item, name, defaultCheck, onClickButton}) => {
  return (
    <label className={styles.label} >
    <input onChange={(e) => onClickButton(e.target.value)} type="radio" name={name} className={styles.hidden} defaultChecked={defaultCheck === item ? true : ""} value={item}></input>
    <Image
      src={`/assets/img/userpics/${item}.svg`}
      alt={item}
      width={60}
      height={60}
      className={styles.img}
    />
  </label>
  )
}
 
export default Radiobutton