// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import styles from "./Discoveries.module.css";

const Discoveries = ({ data }) => {
  return (
    <GameWindowLayout
      title="ontdekkingen"
      bg="var(--black)"
      border="var(--green)"
    >
      <div className={styles.container}>
        <p className={styles.title}>Ontdekkingen</p>
        {data.hackerdiscoveries.length > 0 ? (
          <ul className={styles.list}>
            {data.hackerdiscoveries.map((discovery, index) => (
              <li key={index} className={styles.listItem}>
                {discovery.discovery}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            Je hebt nog geen ontdekkingen. Gebruik je acties om een deel van het
            wachtwoord te ontdekken
          </p>
        )}
        {data.winner === "user" ? (
          <p className={styles.text}>Het wachtwoord was</p>
        ) : (
          <p className={styles.text}>Wachtwoord gevonden!</p>
        )}
        <div className={styles.password}>
          {data.userinfo.password.split("").map((char, index) => (
            <p className={styles.char} key={index}>
              {char}
            </p>
          ))}
        </div>
      </div>
    </GameWindowLayout>
  );
};

export default Discoveries;
