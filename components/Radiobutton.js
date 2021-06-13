import styles from './Radiobutton.module.css'
import Image from 'next/image';

const Radiobutton = ({item, name, defaultCheck, onClickButton}) => {
  return (
    <label className={styles.label} >
    <input onChange={(e) => onClickButton(e.target.value)} type="radio" name={name} className={styles.input} defaultChecked={defaultCheck === item ? true : ""} value={item}></input>
    <div className={styles.img}>
    <Image
      src={`/assets/img/userpics/${item}.svg`}
      alt={item}
      width={350}
      height={224}
    />
    </div>
  </label>
  )
}
 
export default Radiobutton