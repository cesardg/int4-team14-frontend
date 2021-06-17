// styling
import styles from "./HackerInterests.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";

const HackerInterests = ({ gameData }) => {
  console.log(gameData);
  let interests = gameData.hackerinfo.obtainedInterests;
  console.log(interests);
  if (interests !== null) {
    interests = gameData.hackerinfo.obtainedInterests.split("-");
    interests.shift();
  }

  return (
    <GameWindowLayout
      title="gebruiker interesses"
      bg="var(--black)"
      border="var(--green)"
    >
      <div className={styles.container}>
        <p className={styles.title}>Interesses</p>
        {interests ? (
          <ul className={styles.interests}>
            {interests.map((interest, index) => (
              <li key={index} className={styles.interest}>{interest}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            Je hebt nog geen interesses verzameld. Gebruik een van je acties om
            de user zijn interesses te ontdekken
          </p>
        )}
      </div>
    </GameWindowLayout>
  );
};

export default HackerInterests;
