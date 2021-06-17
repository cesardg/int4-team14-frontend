// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./HackerScreencapture.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";

const HackerScreencapture = () => {
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
          <p className={styles.action}>2 kleine letters toegevoegd</p>
        </div>

        <button className={buttonStyles.buttonGreen}>Verder Spelen</button>
      </div>
    </GameWindowLayout>
  );
};

export default HackerScreencapture;
