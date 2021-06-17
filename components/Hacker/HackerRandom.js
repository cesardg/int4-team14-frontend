// styling
import styles from "./HackerRandom.module.css";
import buttonStyles from "./../../styles/ButtonStyles.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";

const HackerRandom = ({ randomCard, onClickButton }) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Random kaartje</p>
        <p className={styles.subtitle}>
          Je hebt een willekeurige kaart getrokken
        </p>
        <div className={styles.img}>
          <p className={styles.text}>{randomCard.text}</p>
          <p className={styles.subtext}>{randomCard.subtext}</p>
        </div>
        <button
          onClick={() => onClickButton(randomCard.action)}
          className={buttonStyles.buttonGreen}
        >
          {randomCard.button}
        </button>
      </div>
    </GameWindowLayout>
  );
};

export default HackerRandom;
