import styles from "./HackerDecryption.module.css";
import Image from "next/image";

const HackerDecryption = () => {
  return (
    <article className={styles.article}>
      <h2>Wachtwoord ontsleutelaar</h2>
      <p>Ontdek 2 kleine letters van het wachtwoord</p>
      <p>Ontdek 1 hoofdletter van het wachtwoord</p>
      <p>Ontdek 1 cijfer van het wachtwoord</p>
      <p>Huidig wachtwoord van de user</p>
      <p>**er**</p>
      <button>Voeg dit toe aan je ontdekkingen</button>
    </article>
  );
};

export default HackerDecryption;
