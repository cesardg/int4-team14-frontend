import styles from "./UserInfo.module.css";
import Image from "next/image";

const UserInfo = ({ userinfo }) => {
  const interArr = userinfo.interests.split("-");
  interArr.shift();

  return (
    <article className={styles.article}>
      <h2 className="hidden">User info</h2>
      <div className={styles.img}>
        <Image
          src={`/assets/img/userpics/${userinfo.picture}.svg`}
          alt="Picture of the user"
          width={385}
          height={246}
        />
      </div>

      <p className={styles.username}>{userinfo.username}</p>
      <p className={styles.title}>e-mail</p>
      <p className={styles.text}>{userinfo.email}</p>
      <p className={styles.title}>interesses</p>
      <ul className={styles.interests}>
        {interArr.map((item, index) => (
          <li key={index} className={styles.interest}>
            {item}
          </li>
        ))}
      </ul>
      <p className={styles.title}>Wachtwoord op dit moment</p>
      <p className={styles.text}>{userinfo.password}</p>
    </article>
  );
};

export default UserInfo;
