// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import styles from "./UserAction.module.css";
// imports
import Image from "next/image";

const UserAction = ({ onClickButton, start }) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.subtitle}>je staat op een</p>
        <p className={styles.title}>actievak</p>
        <div className={styles.actionsContainer}>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("add2letters")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/add2letters.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Versterk je wachtwoord</p>
            <p className={styles.actionSubtitle}>
              Voeg twee kleine letters toe
            </p>
          </button>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("deletescookies")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/useractions/cookies.svg`}
                alt="Picture of the user"
                height={90}
                width={120}
              />
            </div>
            <p className={styles.actionTitle}>Verwijder je cookies</p>
            <p className={styles.actionSubtitle}>
              Zo kan de hacker jouw interesses niet gebruiken voor zijn aanval{" "}
            </p>
          </button>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("add1capital")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/add1capital.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Versterk je wachtwoord</p>
            <p className={styles.actionSubtitle}>Voeg 1 hoofdletter toe</p>
          </button>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("waarschuwingsmail")}
          >
            <div className={styles.actionImgWarning}>
              <Image
                src={`/assets/img/useractions/warning.svg`}
                alt="Picture of the user"
                height={100}
                width={90}
              />
            </div>
            <p className={styles.actionTitle}>Ontvang een waarschuwingsmail</p>
            <p className={styles.actionSubtitle}>
              Ontdek de laatste zet van de hacker
            </p>
          </button>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("add1number")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/add1number.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Versterk je wachtwoord</p>
            <p className={styles.actionSubtitle}>Voeg 1 cijfer toe</p>
          </button>

          <button
            className={start ? styles.actionButtonVpn : styles.actionButtonDisabled}
            onClick={() => onClickButton("vpn")}
            disabled={start ? false : true}
          >
            <div className={styles.actionImgVpn}>
              <Image
                src={`/assets/img/useractions/vpn.svg`}
                alt="Picture of the user"
                height={80}
                width={130}
              />
            </div>
            {start ? (
              <p className={styles.actionExtra}>
                Je kan deze actie 1 keer per ronde gebruiken
              </p>
            ) : (
              <p className={styles.actionExtra}>
                Wordt geactiveerd wanneer je start passeert
              </p>
            )}
            <p className={styles.actionTitle}>Installeer je VPN</p>
            <p className={styles.actionSubtitle}>
              De hacker moet 2 beurten overslaan
            </p>
          </button>
        </div>
        <p className={styles.actionBottomText}>Hoe ga jij je beschermen tegen de hacker?</p>
      </div>
    </GameWindowLayout>
  );
};

export default UserAction;
