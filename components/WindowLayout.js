import styles from "./WindowLayout.module.css";

const WindowLayout = ({ children, title, bg }) => {
  console.log(bg)
 return (
    <div className={styles.outerWindow}>
      <article className={styles.innerWindow} style={{backgroundColor: bg}}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </article>
    </div>
  );
};

export default WindowLayout;
