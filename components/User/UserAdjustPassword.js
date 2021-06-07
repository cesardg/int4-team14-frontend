import styles from "./UserAdjustPassword.module.css";

const UserAdjustPassword = () => {
  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Versterk je wachtwoord</p>
      <p>Voeg 2 kleine letters toe</p>

      <p>Jouw huidige wachtwoord</p>
      <p>paswoord123</p>
      <p>Jouw nieuw wachtwoord</p>
      <p>paswoord123 _ _ </p>
      <button>wachtwoord aanpassen</button>
    </article>
  );
};

export default UserAdjustPassword;
