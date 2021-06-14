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
          <WindowLayout title="het spel in het kort" bg="var(--brown)" border="var(--orange)">
            <div className={styles.shortContainer}>
              <article className={styles.article}>
                <h3 className={styles.subTitle}>Het spel in het kort</h3>
                <p>Hack-Tic is een spel waarbij een hacker en een user-account het tegen elkaar opnemen in de strijd om de gegevens van een account. De beide spelers beginnen bij “START” en verplaatsen hun pion tijdens hun beurt zoveel vakjes over het speelbord als ze gegooid hebben met de dobbelsteen. 
                    Naar gelang het vakje waar de speler op belandt, zijn er verschillende acties die hem vooruit kunnen helpen tijdens het spel. Dit spel wordt zowel online als op een fysiek bord gespeeld.</p>
              </article>
              <div className={styles.articlePurposeContainer}>
                <article className={styles.articlePurpose}>
                  <h3 className={styles.subTitle}>Doel van de user</h3>
                  <p>Zijn account zo goed mogelijk beveiligen zodat het voor de hacker “onkraakbaar” wordt.</p>
                </article>
                <article className={styles.articlePurpose}>
                  <h3 className={styles.subTitle}>Doel van de hacker</h3>
                  <p>Alle tekens in het wachtwoord van de user te weten komen.</p>
                </article>
              </div>
            </div>
          </WindowLayout>
        </div>
         <Image src={`/assets/img/userpicstr/pf3.svg`} alt="logo" width={416} height={331} />
        </div>
        <div className={styles.startLayoutWrapper}>
          <WindowLayout title="opstart" bg="var(--brown)" border="var(--yellow)">
            <div className={styles.container}>
               <article className={styles.article}>
                <h3 className={styles.subTitle}>Opstart</h3>
                <p className={styles.para}>
                  Dit spel kan gespeeld worden met twee laptops of met een laptop en een tablet. Voor je het spel kan beginnen, moet het spelbord eerst correct aangesloten worden door de usb-tabel bij de laptop in te steken. 
                </p>
                <p className={styles.para}>
                 Eén speler start een nieuw spel, deze speler krijgt als eerste de keuze welke rol hij wilt aannemen tijdens het spel : hacker of user?  Daarna ontvangt hij een code die de tegenspeler correct moet invoeren in het “neem deel aan een spel”-vak.  De tegenspeler krijgt automatisch de andere rol toegewezen. 
                </p>
                <p className={styles.para}>
                 De user moet een account aanmaken met een gebruikersnaam, e-mailadres, profielfoto, sterk wachtwoord en enkele interesses. Maar ook de hacker krijgt de kans om een avatar te kiezen en een schuilnaam en e-mailadres in te voeren.
                </p>
                <p className={styles.para}>
                Wanneer alle gegevens correct zijn ingegeven, nemen beide pionnen plaats op het startvak. De computer beslist welke speler mag beginnen. Dit zal weergegeven worden op het scherm. 
                </p>
              </article>
            </div>
          </WindowLayout>
        </div>
      </div>
        <div className={styles.gameImageWrapper}>
            <div className={styles.gameImage}>
             <Image src={`/assets/img/hackerpicstr/pf3.svg`} alt="logo" width={416} height={331} />
            </div>
            <div className={styles.gameLayoutWrapper}>
              <WindowLayout title="het spel" bg="var(--brown)" border="var(--purple)">
                <div className={styles.gameContainer}>
               <article className={styles.article}>
                <h3 className={styles.subTitle}>Het spel</h3>
                <p >
                  Als u aan de beurt bent gooit u de dobbelsteen en verplaatst u uw pion het gegooide aantal vakjes. Zorg ervoor dat u enkel stevig doorklikt op het laatste vakje waar de pion moet blijven staan. Afhankelijk van het vakje waarop u terecht komt, heeft u verschillende positieve of negatieve acties. Deze zullen anders zijn wanneer u als hacker of als user speelt.
                </p>
               
              </article>
            </div>
          </WindowLayout>
          
        </div>
        </div>
        <div className={styles.hackerUserWrapper}>
          <div className={styles.userLayoutWrapper}>
              <WindowLayout title="de user" bg="var(--brown)" border="var(--red)">
                <div className={styles.imageContainer}>
                <Image
                src={`/assets/img/userpics/pf2.svg`}
                alt="picture of user"
                width={470}
                height={302}
                 />
                </div>
                <div className={styles.userContainer}>
                  <article className={styles.article}>
                  <h3 className={styles.subTitle}>De user</h3>
                  <p >
                    Als u aan de beurt bent gooit u de dobbelsteen en verplaatst u uw pion het gegooide aantal vakjes. Zorg ervoor dat u enkel stevig doorklikt op het laatste vakje waar de pion moet blijven staan. Afhankelijk van het vakje waarop u terecht komt, heeft u verschillende positieve of negatieve acties. Deze zullen anders zijn wanneer u als hacker of als user speelt.
                  </p>
                  </article>
                </div>
              </WindowLayout>
            </div>
          <div className={styles.hackerLayoutWrapper}>
              <WindowLayout title="de hacker" bg="var(--black)" border="var(--green)">
                <div className={styles.hackerContainer}>
                  <article className={styles.article}>
                  <h3 className={styles.subTitle}>De user</h3>
                  <p >
                    Als u aan de beurt bent gooit u de dobbelsteen en verplaatst u uw pion het gegooide aantal vakjes. Zorg ervoor dat u enkel stevig doorklikt op het laatste vakje waar de pion moet blijven staan. Afhankelijk van het vakje waarop u terecht komt, heeft u verschillende positieve of negatieve acties. Deze zullen anders zijn wanneer u als hacker of als user speelt.
                  </p>
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
