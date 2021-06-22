// styling
import styles from "./UserAd.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";
import Image from "next/image";

const UserAd = ({ subject }) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={`/assets/img/hackeractions/ads/sli.gif`}
            alt="Picture of the user"
            height={266}
            width={509}
          />
        </div>
      </div>
    </GameWindowLayout>
  );
};

export default UserAd;
