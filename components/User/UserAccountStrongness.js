import styles from "./UserAccountStrongness.module.css";
import Image from 'next/image';

const UserAccountStrongness = ( ) => {

  return (
    <article className={styles.article}>
      <h2>Account sterkte</h2>
      <p>Maak je account sterker door extra letters, hoofdletters en cijfers toe te voegen</p>
    </article>
  );
};

export default UserAccountStrongness;
