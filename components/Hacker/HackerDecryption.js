import styles from "./HackerDecryption.module.css";

const HackerDecryption = ({
  gameData,
  handleUpdatedDiscoveries,
  action,
}) => {
  let discoveryArr = [];

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
        if (
          action === "get2characters" &&
          discoveredCharacters < 2
        ) {
          if (/[a-z]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index];
            discoveredCharacters++;
          }
        } else if (
          action === "get1capital" &&
          discoveredCharacters < 1
        ) {
          if (/[A-Z]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index];
            discoveredCharacters++;
          }
        } else if (
          action === "get1number" &&
          discoveredCharacters < 1
        ) {
          if (/[0-9]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index];
            discoveredCharacters++;
          }
        }
      }
    });

    discoveryArr.map((discovery, index) => {
      if (discovery === "-") {
        discoveryArr[index] = "*";
      }
    });

    discovery = discoveryArr.join("");
  };

  if (action !== "") {
    getDiscoveredCharacters();
  }

  return (
    <article className={styles.article}>
      <h2>Wachtwoord ontsleutelaar</h2>
      {action === "get2characters" ? (
        <p>Ontdek 2 kleine letters van het wachtwoord</p>
      ) : (
        ""
      )}
      {action === "get1capital" ? (
        <p>Ontdek 1 hoofdletter van het wachtwoord</p>
      ) : (
        ""
      )}
      {action === "get1number" ? (
        <p>Ontdek 1 cijfer van het wachtwoord</p>
      ) : (
        ""
      )}
      <p>Huidig wachtwoord van de user</p>
      <p>{discovery}</p>
      <button onClick={() => handleUpdatedDiscoveries(gameData, discovery)}>
        Voeg dit toe aan je ontdekkingen
      </button>
    </article>
  );
};

export default HackerDecryption;
