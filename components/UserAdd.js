import styles from "./UserWarningMail.module.css";

const UserAdd = () => {
  return (
        <article className={styles.article}>
          <h2>Gepersonaliseerde advertentie</h2>
          <p>De hacker heeft jouw cookies gebruikt om je een persoonlijke advertentie te sturen. Je moet 2 beurten overslaan</p>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
  );
};

export default UserAdd;
