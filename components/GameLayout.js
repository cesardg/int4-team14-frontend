import styles from "./GameLayout.module.css";
import Head from "next/head";
import Link from "next/link";

const GameLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naam te bepalen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>home</a>
          </Link>
        </h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default GameLayout;
