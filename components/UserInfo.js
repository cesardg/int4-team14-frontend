import styles from "./UserInfo.module.css";
import Image from 'next/image';

const UserInfo = ({ userinfo }) => {

  const interArr = (userinfo.interests.split('-'));
  interArr.shift();

  return (
    <article className={styles.article}>
      <h2>User info</h2>
      <Image
        src={`/img/${userinfo.picture}.png`}
        alt="Picture of the user"
        width={30}
        height={30}
      />
      <p>{userinfo.username}</p>
      interesses:
      <ul>
        {interArr.map((item, index) => <li key={index}>{item}</li>) }
      </ul>
      wachtwoord op dit moment:
      <p>{userinfo.password}</p>
    </article>
  );
};

export default UserInfo;
