// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./HackerDecryption.module.css";
// imports
import Image from "next/image";

const HackerDecryption = ({ gameData, handleUpdatedDiscoveries, action }) => {
  let discoveryArr = [];
  let info = "";

  if (gameData.hackerdiscoveries.length > 0) {
    discoveryArr =
      gameData.hackerdiscoveries[
        gameData.hackerdiscoveries.length - 1
      ].discovery.split("");
  }

  let passwordArr = gameData.userinfo.password.split("");
  let discovery = "";

  const getDiscoveredCharacters = () => {
    while (passwordArr.length !== discoveryArr.length) {
      discoveryArr.push("*");
    }

    gameData.hackerdiscoveries.forEach((discoveryObj) => {
      let arr = discoveryObj.discovery.split("");
      arr.forEach((element, index) => {
        if (element !== "*") {
          discoveryArr[index] = "-";
        }
      });
    });

    let discoveredCharacters = 0;
    discoveryArr.map((char, index) => {
      if (char === "*") {
        if (action === "get2letters" && discoveredCharacters < 2) {
          if (/[a-z]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index];
            discoveredCharacters++;
          }
        } else if (action === "get1capital" && discoveredCharacters < 1) {
          if (/[A-Z]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index];
            discoveredCharacters++;
          }
        } else if (action === "get1number" && discoveredCharacters < 1) {
          if (/[0-9]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index];
            discoveredCharacters++;
          }
        }
      }
      console.log("werkt dit?");
    });

    discoveryArr.map((discovery, index) => {
      if (discovery === "-") {
        discoveryArr[index] = "*";
      }
    });
    discovery = discoveryArr.join("");
  };

  const checkDiscoveredCharacters = () => {
    if (
      discoveryArr.every((value) => value === discoveryArr[0] && value === "*")
    ) {
      if (action === "get1capital") {
        info = "Oeps, er zijn op dit moment geen hoofdletters om te ontdekken";
      } else if (action === "get1number") {
        info = "Oeps, er zijn op dit moment geen cijfers om te ontdekken";
      } else if (action === "get2letters") {
        info = "Oeps, er zijn op dit moment geen nieuwe letters te ontdekken";
      }
    } else {
      info = "";
    }
  };

  if (action !== "") {
    getDiscoveredCharacters();
    checkDiscoveredCharacters();
  }

  return (
    <GameWindowLayout title="spelbord" bg="var(--black)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Wachtwoord ontsleutelaar</p>
        {action === "get2letters" ? (
          <p className={styles.action}>
            Ontdek 2 kleine letters van het wachtwoord
          </p>
        ) : (
          ""
        )}
        {action === "get1capital" ? (
          <p className={styles.action}>
            Ontdek 1 hoofdletter van het wachtwoord
          </p>
        ) : (
          ""
        )}
        {action === "get1number" ? (
          <p className={styles.action}>Ontdek 1 cijfer van het wachtwoord</p>
        ) : (
          ""
        )}
        <div className={styles.img}>
          <Image
            src={`/assets/img/hackeractions/movingeyes.gif`}
            alt="eyes"
            width={440}
            height={120}
          />
        </div>
        {info !== "" ? <p className={styles.info}>{info}</p> : ""}
        <p className={styles.password}>
          {discoveryArr.map((character, index) => (
            <span
              key={index}
              className={
                character === "*"
                  ? styles.characterEmpty
                  : styles.characterFilled
              }
            >
              {character}
            </span>
          ))}
        </p>
        {console.log(info)}
        {info !== "" ? (
          <button
            onClick={() => handleUpdatedDiscoveries(gameData, null)}
            className={buttonStyles.buttonRedYellow}
          >
            Verder spelen
          </button>
        ) : (
          <button
            onClick={() => handleUpdatedDiscoveries(gameData, discovery)}
            className={buttonStyles.buttonRedYellow}
          >
            Voeg dit toe aan je ontdekkingen
          </button>
        )}
      </div>
    </GameWindowLayout>
  );
};

export default HackerDecryption;
