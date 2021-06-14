import styles from "./WindowLayout.module.css";

const WindowLayout = ({ children, title, bg, border }) => {

 return (
    <div className={styles.outerWindow} style={{backgroundColor: border}}>
      <article className={styles.innerWindow} style={{backgroundColor: bg}}>
        <h2 className={styles.title} style={{backgroundColor: border}}>{title}</h2>
        {children}
      </article>
    </div>
  );
};

export default WindowLayout;
