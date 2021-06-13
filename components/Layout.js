import styles from "./Layout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hack-tic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>Hack-tic</h1>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src={`/assets/img/logo.svg`}
                alt="Picture of the user"
                width={246}
                height={56}
                />
            </a>
          </Link>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
