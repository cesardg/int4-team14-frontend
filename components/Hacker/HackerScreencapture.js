// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./HackerScreencapture.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";

const HackerScreencapture = ({ gameData, handleClickScreencatpure }) => {
  console.log(gameData.userinfo.lastaction);

  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <div className={styles.inside}>
          <p className={styles.title}>Schermovername</p>
          <p className={styles.text}>
            Je neemt de user zijn scherm over en ontdekt de laatste aanpassing
            aan zijn/haar scherm
          </p>
          <p className={styles.user}>Laatste aanpassing</p>
          {gameData.userinfo.lastaction === "add2letters" ? (
            <p className={styles.action}>
              De gebruiker heeft 2 letters toegevoegd
            </p>
          ) : (
            ""
          )}
          {gameData.userinfo.lastaction === "add1capital" ? (
            <p className={styles.action}>
              De gebruiker heeft 1 hoofdletter toegevoegd
            </p>
          ) : (
            ""
          )}
          {gameData.userinfo.lastaction === "add1number" ? (
            <p className={styles.action}>
              De gebruiker heeft 1 cijfer toegevoegd
            </p>
          ) : (
            ""
          )}
          {gameData.userinfo.lastaction === "change1number" ? (
            <p className={styles.action}>
              De gebruiker heeft 1 letter veranderd in een cijfer
            </p>
          ) : (
            ""
          )}
          {gameData.userinfo.lastaction === "change1capital" ? (
            <p className={styles.action}>
              De gebruiker heeft 1 letter veranderd in een hoofdletter
            </p>
          ) : (
            ""
          )}
        </div>

        <button
          className={buttonStyles.buttonGreen}
          onClick={handleClickScreencatpure}
        >
          Verder Spelen
        </button>
      </div>
    </GameWindowLayout>
  );
};

export default HackerScreencapture;
