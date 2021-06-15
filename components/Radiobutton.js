import styles from "./Radiobutton.module.css";
import Image from "next/image";

const Radiobutton = ({ item, name, defaultCheck, onClickButton, folder }) => {
  return (
    <label className={styles.label}>
      <input
        onChange={(e) => onClickButton(e.target.value)}
        type="radio"
        name={name}
        className={styles.input}
        defaultChecked={defaultCheck === item ? true : ""}
        value={item}
      ></input>
      <div className={folder === "userpics" ? styles.img : styles.hackerImg}>
        <Image
          src={`/assets/img/${folder}/${item}.svg`}
          alt={item}
          width={350}
          height={224}
        />
      </div>
    </label>
  );
};

export default Radiobutton;
