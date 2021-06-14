import Layout from '../components/Layout';
import styles from './../styles/Rules.module.css';
import Link from "next/link";
import Image from 'next/image';
import WindowLayout from '../components/WindowLayout';

const Rules = () => {
  return (
    <Layout style="user">
      <section className={styles.section}>
        <div className={styles.intro}>
          <div className={styles.backButton}>
            <Link href={`/`}>
              <a>
                <Image
                  src={`/assets/img/backbutton.svg`}
                  alt="Back button"
                  width={75}
                  height={75}
                />
              <p className={styles.back}>Terug</p>
            </a>
          </Link>
        </div>
      <h1 className={styles.title}>De spelregels</h1>
        <div className={styles.layoutWrapper}>
          <WindowLayout title="spelregels" bg="var(--brown)"  border="var(--green)">
            <div className={styles.container}>
              <div className={styles.logoContainer}>
                <Image
                src={`/assets/img/logo.svg`}
                alt="logo"
                width={492}
                height={112}
                />
                <p className={styles.sublogo}>De spelregels</p>
              </div>
            </div>
          </WindowLayout>
        </div>
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.startShortWrapper}>
        <div className={styles.shortImgWrapper}>
         <div className={styles.shortLayoutWrapper}>
          <WindowLayout title="spelregels" bg="var(--brown)" border="var(--orange)">
            <div className={styles.shortContainer}>
              <article className={styles.article}>
                <h3 className={styles.subTitle}>Het spel in het kort</h3>
                <p>Hack-Tic is een spel waarbij een hacker en een user-account het tegen elkaar opnemen in de strijd om de gegevens van een account. De beide spelers beginnen bij “START” en verplaatsen hun pion tijdens hun beurt zoveel vakjes over het speelbord als ze gegooid hebben met de dobbelsteen. 
Naar gelang het vakje waar de speler op belandt, zijn er verschillende acties die hem vooruit kunnen helpen tijdens het spel. Dit spel wordt zowel online als op een fysiek bord gespeeld.</p>
              </article>
              <div className={styles.articlePurpose}>
              <article className={styles.article}>
                <h3 className={styles.subTitle}>Doel van de user</h3>
                <p>Zijn account zo goed mogelijk beveiligen zodat het voor de hacker “onkraakbaar” wordt</p>
              </article>
              <article className={styles.article}>
                <h3 className={styles.subTitle}>Doel van de hacker</h3>
                <p>Alle tekens in het wachtwoord van de user te weten komen</p>
              </article>
              </div>
            </div>
          </WindowLayout>
        </div>
         <Image src={`/assets/img/userpicstr/pf3.svg`} alt="logo" width={416} height={331} />
        </div>
         <div className={styles.layoutWrapper}>
          <WindowLayout title="spelregels" bg="var(--brown)" border="var(--yellow)">
            <div className={styles.container}>
               <article className={styles.article}>
                <h3 className={styles.subTitle}>Opstart</h3>
                <p>Hack-Tic is een spel waarbij een hacker en een user-account het tegen elkaar opnemen in de strijd om de gegevens van een account. De beide spelers beginnen bij “START” en verplaatsen hun pion tijdens hun beurt zoveel vakjes over het speelbord als ze gegooid hebben met de dobbelsteen. 
Naar gelang het vakje waar de speler op belandt, zijn er verschillende acties die hem vooruit kunnen helpen tijdens het spel. Dit spel wordt zowel online als op een fysiek bord gespeeld.</p>
              </article>
            </div>
          </WindowLayout>
        </div>
      </div>
    </section>
  </Layout>
  );
}

export default Rules
