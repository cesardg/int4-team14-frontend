import styles from "./UserInfo.module.css";
import Image from 'next/image';

const UserInfo = ( {who} ) => {
  return (
        <article className={styles.article}>
          <h2>spelbord</h2>
          <p>Wie zijn beurt?</p>
          <p>{who}</p>
        </article>
  );
};

export default UserInfo;
