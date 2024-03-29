// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import styles from "./HackerAction.module.css";
// imports
import Image from "next/image";

const HackerAction = ({ onClickButton, ads }) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.subtitle}>je staat op een</p>
        <p className={styles.title}>actievak</p>
        <div className={styles.actionsContainer}>
          <div
            className={styles.actionButton}
            onClick={() => onClickButton("get2letters")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/add2letters.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Wachtwoord ontsleutelaar</p>
            <p className={styles.actionSubtitle}>Ontdek 2 kleine letters</p>
          </div>
          <div
            className={styles.actionButton}
            onClick={() => onClickButton("get interest")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/hackeractions/interests.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Ontdek interesses</p>
            <p className={styles.actionSubtitle}>
              Ontdek de interesses van de gebruiker om een reclame te sturen
            </p>
          </div>
          <div
            className={styles.actionButton}
            onClick={() => onClickButton("get1capital")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/add1capital.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Wachtwoord ontsleutelaar</p>
            <p className={styles.actionSubtitle}>Ontdek 1 hoofdletter</p>
          </div>
          <div
            className={styles.actionButton}
            onClick={() => onClickButton("screencapture")}
          >
          
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/hackeractions/screencapture.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Schermovername</p>
            <p className={styles.actionSubtitle}>
              Ontdek de laatste aanpassing van de gebruiker aan het wachtwoord
            </p>
          </div>
          <div
            className={styles.actionButton}
            onClick={() => onClickButton("get1number")}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/add1number.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            <p className={styles.actionTitle}>Wachtwoord ontsleutelaar</p>
            <p className={styles.actionSubtitle}>Ontdek 1 cijfer</p>
          </div>
          <div
            className={
              ads ? styles.actionButtonVpn : styles.actionButtonDisabled
            }
            onClick={() => onClickButton("send ad")}
           
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/hackeractions/ad.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            {ads ? (
              <p className={styles.actionExtra}>
                Je kan deze actie 1 keer per ronde gebruiken
              </p>
            ) : (
              <p className={styles.actionExtra}>
                Wordt geactiveerd nadat je interesses ontdekt hebt
              </p>
            )}
            <p className={styles.actionTitle}>Stuur een persoonlijke reclame</p>
            <p className={styles.actionSubtitle}>
              De gebruiker moet 2 beurten overslaan
            </p>
          </div>
        </div>
        <p className={styles.actionBottomText}>
          Hoe ga jij je de gebruiker zijn wachtwoord ontdekken?
        </p>
      </div>
    </GameWindowLayout>
  );
};

export default HackerAction;
