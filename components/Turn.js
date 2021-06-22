// styling
import styles from "./Turn.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const Turn = ({ who, pic}) => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--brown)" border="var(--green)">
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={`/assets/img/${who}pics/${pic}.svg`}
            alt="Picture of the user"
            width={700}
            height={450}
          />
        </div>
        <p className={styles.title}>{who === "user" ? "Gebruiker" : "Hacker"}</p>
        <p className={styles.subtitle}>is nu aan de beurt</p>
      </div>
    </GameWindowLayout>
  );
};

export default Turn;
