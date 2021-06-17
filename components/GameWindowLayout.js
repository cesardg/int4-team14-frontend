import styles from "./GameWindowLayout.module.css";

const GameWindowLayout = ({ children, title, bg, border }) => {
  return (
    <div className={styles.outerWindow} style={{ backgroundColor: border }}>
      <article className={styles.innerWindow} style={{ backgroundColor: bg }}>
        <div className={styles.header}>
          <h2 className={title == "Notities" || title === "ontdekkingen" ? styles.moveTitle : styles.title} style={{ backgroundColor: border }}>
            {title}
          </h2>
          <span className={styles.close}></span>
        </div>
        {children}
      </article>
    </div>
  );
};

export default GameWindowLayout;
