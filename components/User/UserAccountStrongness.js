import styles from "./UserAccountStrongness.module.css";
// imports
import Image from "next/image";

const UserAccountStrongness = ({ value, handleClickMoreInfo }) => {
  let progress = new Array(20);
  const fillProgressbar = () => {
    for (let i = 0; i++; i < value) {
      progress[i] = "x"
    }

  }

  fillProgressbar()
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>Account sterkte</h2>
       <div className={styles.moreInfoImg} onClick={() => handleClickMoreInfo("info strongness")}>
                 <Image
                src={`/assets/img/moreinfo.png`}
                alt="Picture of the user"
                height={25}
                width={25}
              />
              </div>
      <p className={styles.text}>
        Maak je account sterker door extra letters, hoofdletters en cijfers toe
        te voegen
      </p>
      <p className={styles.percentage}>{value} %</p>
      <div className={styles.bar}>
        <div style={{ width: `${value}%` }} className={styles.progess}></div>
      </div>
    </article>
  );
};

export default UserAccountStrongness;
