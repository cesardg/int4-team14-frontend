import styles from "./Layout.module.css";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hack-tic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>Hack-tic</a>
          </Link>
        </h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
