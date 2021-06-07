import styles from "./HackerHack.module.css";
import Image from "next/image";

const HackerHack = () => {

  return (
    <article className={styles.article}>
      <h2>Hack</h2>
      <p>Ben je zeker dat je het wachtwoord al zou kunnen hacken? Je kan 1 hack uitvoeren per ronde</p>
      <p>Je kan de user proberen hacken nadat je start gepasseerd bent</p>
      <p>Je kan de user nog eens proberen hacken nadat je opnieuw start gepasseerd bent</p>
      <p>Je hebt 1 poging om de user te hacken!</p>
      <button>Hack de user</button>
    </article>
  );
};

export default HackerHack;
