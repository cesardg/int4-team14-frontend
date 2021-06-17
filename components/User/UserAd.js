// styling
import styles from "./UserAd.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";
import Image from "next/image";

const UserAd = ({ subject }) => {
  console.log(subject);
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            // src={`/assets/img/hackeractions/ads/slijm maken.png`}
            src={`/assets/img/hackeractions/ads/${subject.substring(0, 3)}.png`}
            alt="Picture of the user"
            height={266}
            width={385}
          />
        </div>
        {/* <p className={styles.title}>Gepersonaliseerde advertentie</p>
        <p className={styles.text}>
          De hacker heeft jouw cookies gebruikt om je een persoonlijke
          advertentie te sturen over {subject}. Je moet 2 beurten overslaan
        </p> */}
      </div>
    </GameWindowLayout>
  );
};

export default UserAd;
