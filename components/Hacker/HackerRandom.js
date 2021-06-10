import styles from "./HackerRandom.module.css";

const HackerRandom = ({randomCard, onClickButton}) => {

  return (
    <article className={styles.article}>
      <h2>Random vak</h2>
      <p>{randomCard.text}</p>
      <button onClick={() => onClickButton(randomCard.action)}>OK</button>
    </article>
  );
};

export default HackerRandom;
