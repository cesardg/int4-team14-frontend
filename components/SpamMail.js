// styling
import buttonStyles from "./../styles/ButtonStyles.module.css";
import styles from "./SpamMail.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";
import { useState } from "react";

const SpamMail = ({ handleClickSpamMail, player, playerinfo }) => {
  const [mail, setMail] = useState("start");

  return (
    <>
      {mail === "start" ? (
        <GameWindowLayout
          title="spelbord"
          bg={player === "user" ? "var(--brown)" : "var(--black)"}
          border="var(--green)"
        >
          <div
            className={
              player === "user" ? styles.container : styles.containerHacker
            }
          >
            <p className={styles.title}>E-mail</p>
            <p className={styles.label}>van</p>
            <p className={styles.email}>Albert, Baron Frère</p>
            <p className={styles.label}>naar</p>
            <p className={styles.email}>{playerinfo.username}@mail.be</p>
            <p className={styles.borderTop}>
              Deze boodschap komt van Albert, Baron Frère, een Belgische
              zakenman en de rijkste man van België
            </p>
            <p className={styles.text}>
              Ter viering van mijn verjaardag, geef ik een miljoen euro uit aan
              10 euro burgers, en je bent aangeworven als een van de gelukkige
              begunstigden.
            </p>
            <p className={styles.text}>
              Reageer alsjeblieft onmiddellijk als je dit bericht ontvangt voor
              instructies over hoe je je geld kunt ontvangen.
            </p>
            <p className={styles.text}>
              Alle antwoorden worden door mijn persoonlijke assistent behandeld
              Volgens mijn instructies.
            </p>
            <p className={styles.text}>Albert, Baron Frère</p>
            <p className={styles.text}>E-mail: Albertfrere92@yeah.net</p>
            <p className={styles.text}>Reageer met uw:</p>
            <p className={styles.text}>Namen:</p>
            <p className={styles.text}>Adres:</p>
            <p className={styles.text}>Contact telefoonnummer:</p>
            <p className={styles.text}>Nogmaals Gefeliciteerd</p>
            <p className={styles.text}>
              Oprechte groeten, Mr. Albert, Baron Frère & Family
            </p>
            <button
              className={buttonStyles.buttonGreen}
              onClick={() => {
                setMail("opened");
              }}
            >
              Beantwoorden met je gegevens
            </button>
            <button
              className={buttonStyles.buttonGreen}
              onClick={() => {
                setMail("closed");
              }}
            >
              Email verwijderen
            </button>
          </div>
        </GameWindowLayout>
      ) : (
        ""
      )}
      {mail === "opened" ? (
        <GameWindowLayout
          title="spelbord"
          bg="var(--yellow)"
          border="var(--green)"
        >
          <div className={styles.containerOpened}>
            <p className={styles.title}>Je bent in de val getrapt</p>
            {player === "user" ? (
              <p className={styles.subtitle}>
                Dit was een nep e-mail van de hacker met de bedoeling om jouw
                data te stelen. Hierdoor verlies je 1 karakter van je wachtwoord
              </p>
            ) : (
              <p className={styles.subtitle}>
                Dit was een nep e-mail van een andere hacker met de bedoeling om jouw
                data te stelen. Hierdoor verlies je je laatste ontdekking
              </p>
            )}

            <div className={styles.img}>
              <Image
                src={`/assets/img/ohno.svg`}
                alt="Picture of the user"
                width={150}
                height={150}
              />
            </div>
            <button
              className={buttonStyles.buttonGreen}
              onClick={() => handleClickSpamMail("bad")}
            >
              Verder spelen
            </button>
          </div>
        </GameWindowLayout>
      ) : (
        ""
      )}
      {mail === "closed" ? (
        <GameWindowLayout
          title="spelbord"
          bg="var(--yellow)"
          border="var(--green)"
        >
          <div className={styles.containerClosed}>
            <p className={styles.title}>Goed gedaan!</p>
            <p className={styles.subtitleClosed}>
              Je hebt de nep e-mail herkend en bent geen data kwijtgeraakt!
            </p>
            <button
              className={buttonStyles.buttonGreen}
              onClick={() => handleClickSpamMail("good")}
            >
              Verder spelen
            </button>
          </div>
        </GameWindowLayout>
      ) : (
        ""
      )}
    </>
  );
};

export default SpamMail;