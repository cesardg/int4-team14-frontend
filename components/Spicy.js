// styling
import styles from "./Spicy.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const Spicy = () => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Je komt een pikante foto tegen</p>
        <p className={styles.subtitle}>Niet erg, maar best niet meer op klikken!</p>
        <p className={styles.subtitle}>Je moet een beurt overslaan</p>
      </div>
    </GameWindowLayout>
  );
};

export default Spicy;
