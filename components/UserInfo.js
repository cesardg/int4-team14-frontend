import styles from "./UserInfo.module.css";
import Image from 'next/image';

const UserInfo = () => {
  return (
        <article>
          <h2 className={styles.article}>User info</h2>
          <Image
            src="/img/user.png"
            alt="Picture of the user"
            width={30}
            height={30}
          />
        </article>
  );
};

export default UserInfo;