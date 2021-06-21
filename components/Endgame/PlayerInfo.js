import styles from "./PlayerInfo.module.css";
import Image from "next/image";

const PlayerInfo = ({ info, player }) => {
  return (
    <article
      className={player === "user" ? styles.article : styles.articleHacker}
    >
      <h2 className="hidden">Info gebruiker</h2>
      <div className={styles.img}>
        <Image
          src={
            player === "user"
              ? `/assets/img/userpics/${info.picture}.svg`
              : `/assets/img/hackerpics/${info.picture}.svg`
          }
          alt="Picture of the user"
          width={385}
          height={247}
        />
      </div>
      <p className={player === "user" ? styles.username : styles.usernameHacker}>{info.username}</p>
    </article>
  );
};

export default PlayerInfo;
