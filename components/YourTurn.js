// styling
import styles from "./YourTurn.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const YourTurn = () => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Jouw beurt</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/yourturn.gif`}
            alt="Picture of the user"
            width={400}
            height={400}
          />
        </div>
        <p className={styles.subtitle}>gooi met de dobbelsteen</p>
      </div>
    </GameWindowLayout>
  );
};

export default YourTurn;
