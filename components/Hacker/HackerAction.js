// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import styles from "./HackerAction.module.css";
// imports
import Image from "next/image";

const HackerAction = ({ onClickButton, start }) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.subtitle}>je staat op een</p>
        <p className={styles.title}>actievak</p>
        <div className={styles.actionsContainer}>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("get2characters")}
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
          </button>{" "}
          <button
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
              Ontdek de interesses van de gebruiker om een reclame te
              sturen
            </p>
          </button>
          <button
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
          </button>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("screencapture")}
          >
            {" "}
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
          </button>
          <button
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
          </button>
          <button
            className={styles.actionButton}
            onClick={() => onClickButton("send ad")}
            disabled={start ? false : true}
          >
            <div className={styles.actionImg}>
              <Image
                src={`/assets/img/hackeractions/ad.svg`}
                alt="Picture of the user"
                width={100}
                height={80}
              />
            </div>
            {start ? (
              <p className={styles.actionExtra}>
                Je kan deze actie 1 keer per ronde gebruiken
              </p>
            ) : (
              <p className={styles.actionExtra}>
                Deze optie wordt geactiveerd wanneer je start passeert
              </p>
            )}
            <p className={styles.actionTitle}>Stuur een gepersonaliseerde reclame</p>
            <p className={styles.actionSubtitle}>
              De gebruiker moet 2 beurten overslaan
            </p>
          </button>
        </div>
      </div>
    </GameWindowLayout>
  );
};

export default HackerAction;
