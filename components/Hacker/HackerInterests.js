import styles from "./HackerInterests.module.css";
import Image from "next/image";

const HackerInterests = () => {
  const interests = ["paardrijden", "dansen"];
  
  return (
    <article className={styles.article}>
      <h2>User interesses</h2>
      <p>
        Gebruik deze interesses om gepersonaliseerde ads te sturen naar de
        gebruiker
      </p>
      {interests.length > 0 ? (
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
