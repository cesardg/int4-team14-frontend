import styles from "./PlayerInfo.module.css";
import Image from "next/image";

const PlayerInfo = ({ info, style }) => {
console.log(info);
  return (
    <article className={styles.article}>
      <h2 className="hidden">Info gebruiker</h2>
      <div className={styles.img}>
        <Image
          src={`/assets/img/userpics/${info.picture}.svg`}
          alt="Picture of the user"
          width={385}
          height={246}
        />
      </div>

      <p className={styles.username}>{info.username}</p>

    </article>
  );
};

export default PlayerInfo;
