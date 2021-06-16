import styles from "./HackerInfo.module.css";
import Image from "next/image";

const HackerInfo = ({ hackerinfo }) => {
  return (
    <article className={styles.article}>
      <h2 className="hidden">Info hacker</h2>
      <div className={styles.img}>
        <Image
          src={`/assets/img/hackerpics/${hackerinfo.picture}.svg`}
          alt="Picture of the user"
          width={385}
          height={246}
        />
      </div>

      <p className={styles.username}>{hackerinfo.username}</p>
      <p className={styles.title}>status</p>
      <p className={styles.textOnline}>online</p>
      <p className={styles.title}>e-mail</p>
      <p className={styles.text}>{hackerinfo.email}</p>
    </article>
  );
};

export default HackerInfo;
