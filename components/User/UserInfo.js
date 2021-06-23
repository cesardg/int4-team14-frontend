import styles from "./UserInfo.module.css";
import Image from "next/image";

const UserInfo = ({ userinfo, option }) => {
  const interArr = userinfo.interests.split("-");
  
  return (
    <article className={styles.article}>
      <h2 className="hidden">Info gebruiker</h2>
      <div className={styles.img}>
        {option.type === "good" ?   <Image
          src={`/assets/img/randomgifs/usergood.gif`}
          alt="Picture of the user"
          width={385}
          height={246}
        /> : "" }
        {option.type === "bad" ?   <Image
          src={`/assets/img/randomgifs/userbad.gif`}
          alt="Picture of the user"
          width={385}
          height={246}
        /> :     "" }

        {option.length === 0 ?    <Image
          src={`/assets/img/userpics/${userinfo.picture}.svg`}
          alt="Picture of the user"
          width={385}
          height={246}
        /> :    "" }
      
      </div>

      <p className={styles.username}>{userinfo.username}</p>
      <p className={styles.title}>e-mail</p>
      <p className={styles.text}>{userinfo.username}@mail.be</p>
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
