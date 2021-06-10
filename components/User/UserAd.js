import styles from "./UserWarningMail.module.css";

const UserAd = ({subject}) => {
  return (
    <article className={styles.article}>
      <h2>Gepersonaliseerde advertentie</h2>
      <p>De hacker heeft jouw cookies gebruikt om je een persoonlijke advertentie te sturen over {subject}. Je moet 2 beurten overslaan</p>
      
    </article>
  );
};

export default UserAd;
