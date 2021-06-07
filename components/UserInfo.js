import styles from "./UserInfo.module.css";
import Image from 'next/image';

const UserInfo = ( {userinfo} ) => {
  return (
        <article>
          <h2 className={styles.article}>User info</h2>
          <Image
            src={`/img/${userinfo.picture}.png`}
            alt="Picture of the user"
            width={30}
            height={30}
          />
          <p>{userinfo.username}</p>
             <p>{userinfo.interests}</p>
        </article>
  );
};

export default UserInfo;
