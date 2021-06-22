import styles from "./GameWindowLayout.module.css";

const GameWindowLayout = ({ children, title, bg, border }) => {
  console.log(title)
  return (
    <div className={styles.outerWindow} style={{ backgroundColor: border }}>
      <article className={styles.innerWindow} style={{ backgroundColor: bg }}>
       <strong> <div className={styles.header}>
          <h2 className={title == "Notities" || title === "ontdekkingen" || title === "spelbord" || title === "hacking"? styles.moveTitle : styles.title} style={{ backgroundColor: border }}>
            {title}
          </h2>
          <span className={title == "meer info" ? styles.closePurple : styles.close}></span>
        </div>
        </strong>
        {children}
      </article>
    </div>
  );
};

export default GameWindowLayout;
