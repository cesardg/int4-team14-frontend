import styles from "./HackerInfo.module.css";
import Image from "next/image";

const HackerInfo = ({ hackerinfo }) => {
  console.log(hackerinfo);
  let interests = [];
  if (hackerinfo.obtainedInterests) {
    // console.log("er zijn");
    interests = hackerinfo.obtainedInterests.split("-");
    interests.shift();
  } else {
    // console.log("er  zijn er geen");
  }

  return (
    <article className={styles.article}>
      <h2 className="hidden">Info hacker</h2>
      <div className={styles.img}>
        <Image
          src={`/assets/img/hackerpics/${hackerinfo.picture}.svg`}
          alt="Picture of the user"
          width={385}
          height={246}
        />
      </div>
      <p className={styles.username}>{hackerinfo.username}</p>
      <p className={styles.title}>status</p>
      <p className={styles.textOnline}>online</p>
      <p className={styles.title}>e-mail</p>
      <p className={styles.text}>{hackerinfo.email}</p>
      <p className={styles.title}>Ontdekte interesses</p>
      {interests.length > 0 ? (
        <ul className={styles.interests}>
          {interests.map((interest, index) => (
            <li key={index} className={styles.interest}>
              {interest}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          Je hebt nog geen interesses verzameld. Gebruik een van je acties om de
          user zijn interesses te ontdekken
        </p>
      )}
    </article>
  );
};

export default HackerInfo;
