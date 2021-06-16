// styling
import buttonStyles from "./../styles/ButtonStyles.module.css";
import styles from "./Wifi.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";
import { useState } from "react";

const Wifi = () => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.containerOpened}>
        <p className={styles.title}>Je wifi is uitgevallen</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/wifi.svg`}
            alt="Picture of the user"
            width={150}
            height={150}
          />
        </div>
        <p className={styles.subtitle}>Je moet een beurt overslaan</p>
      </div>
    </GameWindowLayout>
  );
};

export default Wifi;
