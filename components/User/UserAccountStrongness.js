import styles from "./UserAccountStrongness.module.css";

const UserAccountStrongness = ({value}) => {

  return (
    <article className={styles.article}>
      <h2>Account sterkte</h2>
      <p>Maak je account sterker door extra letters, hoofdletters en cijfers toe te voegen</p>
      <p>{value}%</p>
      <div className={styles.bar}>
         <div style={{ width: `${value}%`}} className={styles.progess}></div>
      </div>
    </article>
  );
};

export default UserAccountStrongness;
