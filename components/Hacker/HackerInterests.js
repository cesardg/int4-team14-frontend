import styles from "./HackerInterests.module.css";
import Image from "next/image";

const HackerInterests = ({ gameData }) => {
  let interests = gameData.hackerinfo.obtainedInterests;
  if (interests) {
    console.log("er zijn");
    interests = gameData.hackerinfo.obtainedInterests.split("-");
    interests.shift();
  } else {
    console.log("er zijn er geen");
  }

  return (
    <article className={styles.article}>
      <h2>User interesses</h2>
      <p>
        Gebruik deze interesses om gepersonaliseerde ads te sturen naar de
        gebruiker
      </p>
      {interests ? (
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      ) : (
        <p>
          Je hebt nog geen interesses verzameld. Gebruik een van je acties om de
          user zijn interesses te ontdekken
        </p>
      )}
    </article>
  );
};

export default HackerInterests;
