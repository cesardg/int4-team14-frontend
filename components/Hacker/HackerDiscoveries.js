import styles from "./HackerDiscoveries.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const HackerDiscoveries = ({ gameData }) => {
  // const [discoveries, setDiscoveries] = useState(gameData.hacker_discoveries)
  const [password, setPassword] = useState(gameData.userinfo.password)
  
  // let discoveries = []
  const getDiscoveries = () => {
    gameData.hacker_discoveries.map(discovery => {
      discoveries.push(discovery.discovery)
    })
  }

  getDiscoveries()
  console.log(gameData);
  return (
    <article className={styles.article}>
      <h2>Ontdekkingen</h2>
      <p>Ontdekkingen houden bij welke letters en cijfers je al ontdekt hebt</p>
      {discoveries.length > 0 ? (
        <ul>
          {discoveries.map((discovery, index) => (
            <li key={index}>{discovery}</li>
          ))}
        </ul>
      ) : (
        <p>
          Je hebt nog geen ontdekkingen. Gebruik je acties om een deel van het
          wachtwoord te ontdekken
        </p>
      )}
    </article>
  );
};

export default HackerDiscoveries;
