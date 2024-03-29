// components
import GameWindowLayout from "../../components/GameWindowLayout";
// styling
import styles from "./Password.module.css";

const Password = ({ data }) => {
  return (
    <GameWindowLayout
      title="hackerinfo"
      bg="var(--black)"
      border="var(--green)"
    >
      <div className={styles.container}>
        <p className={styles.title}>Wat wist de hacker?</p>
        <p className={styles.label}>Wachtwoord</p>
        <div className={styles.password}>
          {data.hackerinfo.latestguess ? (
            data.hackerinfo.latestguess.split("").map((char, index) => (
              <p className={styles.char} key={index}>
                {char}
              </p>
            ))
          ) : (
            <p className={styles.char}>
              De hacker heeft nog niet gegokt
            </p>
          )}
        </div>
        <p className={styles.label}>Gehackte interesses</p>
        {data.hackerinfo.obtainedInterests != null ? (
          <ul className={styles.interests}>
            {data.hackerinfo.obtainedInterests
              .split("-")
              .map((interest, index) => (
                <li key={index} className={styles.interest}>
                  {interest}
                </li>
              ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            De hacker had geen interesses meer van jou
          </p>
        )}
      </div>
    </GameWindowLayout>
  );
};

export default Password;
