import styles from "./UserInfo.module.css";
import Image from 'next/image';

const UserWarning = ( ) => {
  return (
    <article className={styles.article}>
      <h2>Waarschuwingen</h2>
      <p>Waarschuwingen houden bij welke letters de hacker al ontdekt heeft</p>
      <p>Je kan nog geen waarschuwingen bekijken. Gebruik je acties om een waarschuwingsmail te ontvangen</p>
    </article>
  );
};

export default UserWarning;
