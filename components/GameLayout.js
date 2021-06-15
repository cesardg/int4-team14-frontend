import styles from "./GameLayout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";


const Layout = ({ children, style }) => {

    let today = new Date()
    let tempTime = today.getHours() + ':' + today.getMinutes();
    const [time, setTime] = useState(tempTime);


    useEffect(() => {
      const interval = setInterval(() => {
        today = new Date()
        tempTime = today.getHours() + ':' + today.getMinutes();
        setTime(tempTime);
      }, 10000);
      return () => clearInterval(interval);
    }, []);
  
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
