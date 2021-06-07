import styles from "./UserDeleteCookies.module.css";

const UserDeleteCookies = () => {
  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Je cookies zijn verwijderd</p>
      <p>
        Hackers kunnen je cookies gebruiken om je interesses, locatie, favoriete websites, … te weten te komen.
        Door je cookies te verwijderen weet de hacker jouw interesses niet meer en kan hij ze dus niet gebruiken om een gepersonaliseerde ad te sturen, goed gedaan!
      </p>
      <button>Verder Spelen</button>
    </article>
  );
};

export default UserDeleteCookies;
