import styles from "./HackerScreencapture.module.css";
import Image from "next/image";

const HackerScreencapture = () => {
  
  return (
    <article className={styles.article}>
      <h2>Schermovername</h2>
      <p>
        Je neemt de user zijn scherm over en ontdekt de laatste aanpassing aan
        zijn/haar scherm
      </p>
      <p>Laatste aanpassing</p>
      <p>2 kleine letters toegevoegd</p>
    </article>
  );
};

export default HackerScreencapture;
