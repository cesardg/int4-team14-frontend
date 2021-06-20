import styles from "./UserInfoEnd.module.css";
import Image from "next/image";

const UserInfoEnd = ({ userinfo }) => {


  return (
    <article className={styles.article}>
      <h2 className="hidden">Info gebruiker</h2>
      <div className={styles.img}>
        <Image
          src={`/assets/img/userpics/${userinfo.picture}.svg`}
          alt="Picture of the user"
          width={385}
          height={246}
        />
      </div>

      <p className={styles.username}>{userinfo.username}</p>

    </article>
  );
};

export default UserInfoEnd;
