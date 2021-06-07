import styles from "./UserInfo.module.css";
import Image from 'next/image';

const UserInfo = ( {who} ) => {
  return (
        <article className={styles.article}>
          <h2>Wie zijn beurt?</h2>
          <p>{who}</p>
        </article>
  );
};

export default UserInfo;
