// styling
import styles from "./Spicy.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const Spicy = () => {
  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.containerOpened}>
        <p className={styles.title}>Je komt een pikante foto tegen</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/spicy.svg`}
            alt="broken Spicy"
            width={300}
            height={300}
          />
        </div>
        <p className={styles.subtitle}>Je moet een beurt overslaan</p>
      </div>
    </GameWindowLayout>
  );
};

export default Spicy;
