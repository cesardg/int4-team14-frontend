import styles from "./GameLayout.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";


const Layout = ({ children, style, vpnIcon }) => {

    let today = new Date()
    let tempTime = today.getHours() + ':' + today.getMinutes();
    const [time, setTime] = useState(tempTime);

    const [popupDice, setPopupDice] = useState("none");
    const [popupVpn, setPopupVpn] = useState("none");

    useEffect(() => {
      const interval = setInterval(() => {
        today = new Date()
        tempTime = today.getHours() + ':' + today.getMinutes();
        setTime(tempTime);
      }, 10000);
      return () => clearInterval(interval);
    }, []);

    const handleClickPopup = (icon) => {
      if (icon === "dice"){
        if (popupDice === "none"){
          setPopupDice("block")
          setPopupVpn("none")
        } else {
          setPopupDice("none")
        }
      } else if (icon === "vpn") {
        if (popupVpn === "none") {
          setPopupVpn("block")
          setPopupDice("none")
        } else {
          setPopupVpn("none")
        }
      }
    }
  
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
          <div className={styles.headerRight}>
            {style === "user" ? 
            <div className={styles.headerIcon}  onClick={() => handleClickPopup("dice")}>
              <div style={vpnIcon? {filter : "opacity(1)"} : {filter : "opacity(.4)"}}>
              <Image
                src={`/assets/img/vpnicon.svg`}
                alt="Picture of the dice"
                width={22}
                height={22}
            
                />
                </div>
              <span className={styles.popup} style={{display : popupDice}} >Je vpn staat {vpnIcon ? "aan, nice" : "uit, niet goed"}</span>
              </div>
              : "" }
            <div  className={styles.headerIcon} onClick={() => handleClickPopup("vpn")}>
              <Image
                src={`/assets/img/diceicon.svg`}
                alt="Picture of the dice"
                width={22}
                height={22}
                />
                <span className={styles.popup} style={{display : popupVpn}} >welke info komt er hier?</span>
              </div>
            <p className={styles.time}>{time}</p>
          </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
