import styles from "./GameLayout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect} from "react";

const Layout = ({ children, style }) => {
  
    let date = new Date().toLocaleString()
    const [time, setTime] = useState(date);


    useEffect(() => {
      const interval = setInterval(() => {
      console.log('This will run every minute!');
      settime(tempTime)
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className={style === "user" ? styles.userContainer :  styles.hackerContainer}>
      <Head>
        <title>Hack-tic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={style === "user" ? styles.userHeader :  styles.hackerHeader}>
        <h1 className={styles.title}>Hack-tic</h1>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src={`/assets/img/logo.svg`}
                alt="Picture of the user"
                width={154}
                height={35}
                />
            </a>
          </Link>
          <div>
            <p className={styles.time}>{time}</p>
          </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
