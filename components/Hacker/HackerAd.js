import styles from "./HackerAd.module.css";
import Image from "next/image";

const HackerAd = () => {
  
  return (
    <article className={styles.article}>
      <h2>Stuur een gepersonaliseerde advertentie</h2>
      <p>
        Stuur de user deze persoonlijke advertentie over slijm maken. Hierdoor
        moet de user 2 beurten overslaan
      </p>
      <Image src={`/img/vpn.png`} alt="vpn" width={30} height={30} />{" "}
      <button>Persoonlijke advertentie versturen</button>
    </article>
  );
};

export default HackerAd;
