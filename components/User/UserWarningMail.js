// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./UserWarningMail.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";
// imports
import Image from "next/image";
import { useState } from "react";

const UserWarningMail = ({gameData, onClickButtonMail}) => {
  const [window, setWindow] = useState("mail-closed");
  let lastDiscovery = gameData.hackerdiscoveries;
  if (lastDiscovery.length == 0){
    lastDiscovery.discovery = "er zijn nog geen ontdekkingen gedaan"
  } else {
    lastDiscovery = gameData.hackerdiscoveries[gameData.hackerdiscoveries.length - 1];
  }

  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      {window === "mail-closed" ? (
        <div className={styles.container}>
          <p className={styles.title}>Waarschuwingsmail</p>
          <p className={styles.text}>
            Open deze mail en ontdek de laatste zet van de hacker
          </p>
          <div className={styles.img}>
            <Image
              src={`/assets/img/useractions/mail.gif`}
              alt="Picture of the user"
              width={150}
              height={150}
            />
          </div>
          <button
            onClick={() => setWindow("mail-open")}
            className={buttonStyles.buttonGreen}
          >
            Mail lezen
          </button>
        </div>
      ) : (
        ""
      )}
      {window === "mail-open" ? (
        <div className={styles.container}>
          <p className={styles.titleOpen}>Waarschuwingsmail</p>
          <p className={styles.label}>van</p>
          <p className={styles.email}>beveiliging@hack-tic.be</p>
          <p className={styles.label}>naar</p>
          <p className={styles.email}>{gameData.userinfo.email}</p>
          <p className={styles.borderTop}>
            Er probeerde zojuist iemand in te loggen op je account vanaf een
            nieuw apparaat. Je ontvangt deze e-mail omdat we zeker willen zijn
            dat jij dit was.
          </p>
          <p className={styles.text}>
            Het volgende wachtwoord werd hiervoor gebruikt:
          </p>
          <p className={styles.password}>{lastDiscovery.discovery}</p>
          <p className={styles.borderTop}>
            Ben jij dit niet? Versterk dan zo snel mogelijk je wachtwoord
          </p>
          <button className={buttonStyles.buttonGreen} onClick={() => onClickButtonMail(lastDiscovery.discovery)}>Verder Spelen</button>
        </div>
      ) : (
        ""
      )}
    </GameWindowLayout>
  );
};

export default UserWarningMail;
