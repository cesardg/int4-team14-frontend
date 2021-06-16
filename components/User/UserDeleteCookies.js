// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./UserDeleteCookies.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";

const UserDeleteCookies = () => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Je cookies zijn verwijderd</p>
        <p className={styles.text}>
          Door je cookies te verwijderen weet de hacker jouw interesses niet
          meer en kan hij ze dus niet gebruiken om een gepersonaliseerde ad te
          sturen, goed gedaan!
        </p>
        <button className={buttonStyles.buttonGreen}>Verder Spelen</button>
      </div>
    </GameWindowLayout>
  );
};

export default UserDeleteCookies;
