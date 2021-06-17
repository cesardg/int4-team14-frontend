// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./UserInstallsVpn.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";

const UserInstallsVpn = ({handleClickInstallsVpn}) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>jouw VPN is <br></br> ingeschakeld!</p>
        <p className={styles.text}>
         Een VPN zorgt voor een beveiligde verbinding tussen jou en het internet.
De verbinding is veiliger dan wifi en houdt veel hackers tegen, goed gedaan!
        </p>
        <button className={buttonStyles.buttonGreen} onClick={handleClickInstallsVpn}>Verder Spelen</button>
      </div>
    </GameWindowLayout>
  );
};

export default UserInstallsVpn;
