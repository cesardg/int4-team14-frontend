import styles from "./WindowLayout.module.css";

const Layout = ({ children, title }) => {
 return (
    <div className={styles.outerWindow}>
      <article className={styles.innerWindow}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </article>
    </div>
  );
};

export default Layout;
