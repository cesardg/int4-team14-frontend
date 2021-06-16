// styling
import buttonStyles from "./../styles/ButtonStyles.module.css";
import styles from "./SpamMail.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";
import { useState } from "react";

const SpamMail = () => {
  const [window, setWindow] = useState("mail-closed");

  const [opened, setOpened] = useState("");

  return (
    <>
      {opened === "" ? (
        <GameWindowLayout
          title="spelbord"
          bg="var(--brown)"
          border="var(--green)"
        >
          <div className={styles.container}>
            <p className={styles.title}>E-mail</p>
            <p className={styles.label}>van</p>
            <p className={styles.email}>Albert, Baron Frère</p>
            <p className={styles.label}>naar</p>
            <p className={styles.email}>emailadres</p>
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
                setOpened(true);
              }}
            >
              Beantwoorden met je gegevens
            </button>
            <button
              className={buttonStyles.buttonGreen}
              onClick={() => {
                setOpened(false);
              }}
            >
              Verwijderen
            </button>
          </div>
        </GameWindowLayout>
      ) : (
        ""
      )}
      {opened ? (
        <GameWindowLayout
          title="spelbord"
          bg="var(--yellow)"
          border="var(--green)"
        >
          <div className={styles.container}>
            <p className={styles.title}>Je bent in de val getrapt</p>
            <p className={styles.subtitle}>
              dit was een nep e-mail van de hacker met de bedoeling om jouw data
              te stelen. Hierdoor weet hij nu 2 letters van je wachtwoord
            </p>

            <button
              className={buttonStyles.buttonGreen}
              onClick={() => {
                setOpened(true);
              }}
            >
              Verder spelen
            </button>
          </div>
        </GameWindowLayout>
      ) : ""}
      {!opened ? (
        <GameWindowLayout
          title="spelbord"
          bg="var(--yellow)"
          border="var(--green)"
        >
          <div className={styles.container}>
            <p className={styles.title}>Je bent in de val getrapt</p>
            <p className={styles.subtitle}>
              dit was een nep e-mail van de hacker met de bedoeling om jouw data
              te stelen. Hierdoor weet hij nu 2 letters van je wachtwoord
            </p>

            <button
              className={buttonStyles.buttonGreen}
              onClick={() => {
                setOpened(true);
              }}
            >
              Verder spelen
            </button>
          </div>
        </GameWindowLayout>
      ) : ""}
    </>
  );
};

export default SpamMail;
