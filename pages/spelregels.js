import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import WindowLayout from "../components/WindowLayout";
import styles from "./../styles/Rules.module.css";
import {useState} from 'react';

const Rules = () => {

  const fields =[
    {
      type: "start", 
      user: "Elke keer wanneer je voorbij de start passeert, ontgrendel je de mogelijkheid om je VPN in te schakelen.",
      hacker: "Elke keer wanneer je voorbij de start passeert, ontgrendel je de mogelijkheid om het wachtwoord van de user te raden. ",
      userWarning: "Opgepast! Wanneer je weer langs de start passeert zonder je VPN te gebruiken komt er geen tweede VPN beurt bij.",
      hackerWarning: "Opgepast! Wanneer je weer langs de start passeert zonder je gok te gebruiken komt er geen tweede gok bij."
    },
    {
      type: "actie", 
      user: "Wanneer u terecht komt op een actievak springt een venster open op uw scherm waarin u de keuze krijgt uit 6 verschillende acties om uw account uit de klauwen van de hacker te houden. Deze 6 acties luiden als volgt: ",
      hacker: "Wanneer u terecht komt op een actievak springt een venster open op uw scherm waarin u de keuze krijgt uit 6 verschillende acties om het account van de user binnen te dringen. Deze 6 acties luiden als volgt: ",
      userWarning: "",
      hackerWarning: ""
    },
    {
      type: "Random", 
      user: "Wanneer je op dit vakje terecht komt verschijnt er een willekeurig gegenereerd venster op uw scherm. Op dit venster staat een van de volgende opdrachten:",
      hacker: "Wanneer je op dit vakje terecht komt verschijnt er een willekeurig gegenereerd venster op uw scherm. Op dit venster staat een van de volgende opdrachten:",
      userWarning: "",
      hackerWarning: ""
    },
    {
      type: "mail", 
      user: "Je ontvangt een mail in je inbox. Het is aan jouw om hier correct op te reageren.",
      hacker: "Je ontvangt een mail in je inbox. Het is aan jouw om hier correct op te reageren.",
      userWarning: "",
      hackerWarning: ""
    },
    {
      type: "WIFI-vak/pikante foto", 
      user: "Je wifi is uitgevallen of je raakt afgeleid door een pikante pop-up , je bent een ronde uitgeschakeld.",
      hacker: "Je wifi is uitgevallen of je raakt afgeleid door een pikante pop-up , je bent een ronde uitgeschakeld.",
      userWarning: "",
      hackerWarning: ""
    },
  ]

  const [fieldIndex, setFieldIndex] = useState(0);

  const adjustfieldIndex = (action) => {
    let newIndex = fieldIndex;
    if (action === "prev"){
      if (newIndex == 0){
      newIndex = 4
      } else {
       newIndex--
      }
    } else {
     if (newIndex == 4){
      newIndex = 0
      } else {
        newIndex++
      }
    }
    setFieldIndex(newIndex);
  }

  console.log(fieldIndex)


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
            <WindowLayout
              title="spelregels"
              bg="var(--brown)"
              border="var(--green)"
            >
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
              <WindowLayout
                title="het spel in het kort"
                bg="var(--brown)"
                border="var(--orange)"
              >
                <div className={styles.shortContainer}>
                  <article className={styles.article}>
                    <h3 className={styles.subTitle}>Het spel in het kort</h3>
                    <p>
                      Hack-Tic is een spel waarbij een hacker en een gebruikers
                      account het tegen elkaar opnemen in de strijd om de
                      gegevens van een account. De beide spelers beginnen bij
                      “START” en verplaatsen hun pion tijdens hun beurt zoveel
                      vakjes over het speelbord als ze gegooid hebben met de
                      dobbelsteen. Naar gelang het vakje waar de speler op
                      belandt, zijn er verschillende acties die hem vooruit
                      kunnen helpen tijdens het spel. Dit spel wordt zowel
                      online als op een fysiek bord gespeeld.
                    </p>
                  </article>
                  <div className={styles.articlePurposeContainer}>
                    <article className={styles.articlePurpose}>
                      <h3 className={styles.subTitle}>Doel gebruiker</h3>
                      <p>
                        Zijn account zo goed mogelijk beveiligen zodat het voor
                        de hacker “onkraakbaar” wordt.
                      </p>
                    </article>
                    <article className={styles.articlePurpose}>
                      <h3 className={styles.subTitle}>Doel hacker</h3>
                      <p>
                        Alle tekens in het wachtwoord van de gebruiker te weten
                        komen.
                      </p>
                    </article>
                  </div>
                </div>
              </WindowLayout>
            </div>
            <div className={styles.img1}>
            <Image
              src={`/assets/img/userpicstr/pf3.svg`}
              alt="logo"
              width={416}
              height={331}
            />
            </div>
          </div>
          <div className={styles.startLayoutWrapper}>
            <WindowLayout
              title="opstart"
              bg="var(--brown)"
              border="var(--yellow)"
            >
              <div className={styles.container}>
                <article className={styles.article}>
                  <h3 className={styles.subTitle}>Opstart</h3>
                  <p className={styles.para}>
                    Dit spel kan gespeeld worden met twee laptops of met een
                    laptop en een tablet. Voor je het spel kan beginnen, moet
                    het spelbord eerst correct aangesloten worden door de
                    usb-tabel bij de laptop in te steken.
                  </p>
                  <p className={styles.para}>
                    Eén speler start een nieuw spel, deze speler krijgt als
                    eerste de keuze welke rol hij wilt aannemen tijdens het spel
                    : hacker of gebruiker? Daarna ontvangt hij een code die de
                    tegenspeler correct moet invoeren in het “neem deel aan een
                    spel”-vak. De tegenspeler krijgt automatisch de andere rol
                    toegewezen.
                  </p>
                  <p className={styles.para}>
                    De gebruiker moet een account aanmaken met een
                    gebruikersnaam, e-mailadres, profielfoto, sterk wachtwoord
                    en enkele interesses. Maar ook de hacker krijgt de kans om
                    een avatar te kiezen en een schuilnaam en e-mailadres in te
                    voeren.
                  </p>
                  <p className={styles.para}>
                    Wanneer alle gegevens correct zijn ingegeven, nemen beide
                    pionnen plaats op het startvak. De computer beslist welke
                    speler mag beginnen. Dit zal weergegeven worden op het
                    scherm.
                  </p>
                </article>
              </div>
            </WindowLayout>
          </div>
        </div>
        <div className={styles.gameImageWrapper}>
          <div className={styles.gameImage}>
            <Image
              src={`/assets/img/hackerpicstr/pf3.svg`}
              alt="logo"
              width={416}
              height={331}
            />
          </div>
          <div className={styles.gameLayoutWrapper}>
            <WindowLayout
              title="het spel"
              bg="var(--brown)"
              border="var(--green)"
            >
              <div className={styles.gameContainer}>
                <article className={styles.article}>
                  <h3 className={styles.subTitle}>Het spel</h3>
                  <p>
                    Als u aan de beurt bent gooit u de dobbelsteen en verplaatst
                    u uw pion het gegooide aantal vakjes. Zorg ervoor dat u
                    enkel stevig doorklikt op het laatste vakje waar de pion
                    moet blijven staan. Afhankelijk van het vakje waarop u
                    terecht komt, heeft u verschillende positieve of negatieve
                    acties. Deze zullen anders zijn wanneer u als hacker of als
                    gebruiker speelt.
                  </p>
                </article>
              </div>
            </WindowLayout>
          </div>
        </div>
        <div className={styles.previewLayoutWrapper}>
           <WindowLayout
              title="spelbord voorbeeld"
              bg="var(--brown)"
              border="var(--purple)"
            >
              <div className={styles.bordView}>
                        <Image
              src={`/assets/img/rules/bord${fieldIndex}.jpg`}
              alt="logo"
              width={400}
              height={400}
            />
              </div>
            </WindowLayout>
          </div>
        <div className={styles.fieldsLayoutWrapper}>
           <WindowLayout
              title="verschillende spelbord vakken"
              bg="var(--brown)"
              border="var(--purple)"
            >
              <div className={styles.fieldsContainer}>
                <div className={styles.purple}></div>
                  <form className={styles.form}>
                    {fields.map((item, index) => (
                      <div key={item.type} className={styles.radiobutton}>
                        <input id={item.type} onChange={() => setFieldIndex(index)}  checked={fieldIndex === index ? true : ""}  type="radio" name="tab "className={styles.input} value={item.type}></input>
                        <label htmlFor={item.type} className={styles.label} > {item.type}  </label>
                      </div>
                         ))}
                  </form>
                  <article className={styles.fieldArticle}>
                    <div className={styles.titleArrowWrapper} >
                      <div onClick={() => adjustfieldIndex("prev")}>
                        <Image
                          src={`/assets/img/backbuttongreen.svg`}
                          alt="arrow"
                          width={40}
                          height={40}
                   
                         />
                        </div>
                          <h3 className={styles.subFieldTitle}>{fields[fieldIndex].type}-vak</h3>
                       <div className={styles.arrowFr} onClick={() => adjustfieldIndex("next")}>
                        <Image
                          src={`/assets/img/backbuttongreen.svg`}
                          alt="arrow"
                          width={40}
                          height={40}
                         />
                         </div>
                     </div>
                     <div className={styles.hackerUserContainer}>
                      <article className={styles.userContainer}>
                          <div className={styles.subTitleBg}>
                          <h4 className={styles.subTitle}>gebruiker</h4>
                          </div>
                          <p>{fields[fieldIndex].user}</p>
                          <p>{fields[fieldIndex].userWarning}</p>
                        </article>
                        <article className={styles.hackerContainer}>
                          <div className={styles.subTitleBgHacker}>
                          <h4 className={styles.subTitle}>hacker</h4>
                          </div>
                          <p>{fields[fieldIndex].hacker}</p>
                          <p>{fields[fieldIndex].hackerWarning}</p>
                        </article>
                      </div>
                  </article>
              </div>
            </WindowLayout>
          </div>
     </section>
    </Layout>
  );
};

export default Rules;
