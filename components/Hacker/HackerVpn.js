// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./HackerVpn.module.css";

const HackerVpn = () => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>de gebruiker heeft een vpn ingeschakeld</p>
        <p className={styles.text}>Je moet 2 beurten overslaan</p>
      </div>
    </GameWindowLayout>
  );
};

export default HackerVpn;
