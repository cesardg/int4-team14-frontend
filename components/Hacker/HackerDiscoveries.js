// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import styles from "./HackerDiscoveries.module.css";
// imports
import { useState, useEffect } from "react";
import Image from "next/image";

const HackerDiscoveries = ({ gameData }) => {
  return (
    <GameWindowLayout
      title="ontdekkingen"
      bg="var(--black)"
      border="var(--green)"
    >
      <div className={styles.container}>
        <p className={styles.title}>Ontdekkingen</p>
        <p className={styles.text}>
          Ontdekkingen houden bij welke letters en cijfers je al ontdekt hebt
        </p>
        {gameData.hackerdiscoveries.length > 0 ? (
          <ul className={styles.list}>
            {gameData.hackerdiscoveries.map((discovery, index) => (
              <li key={index} className={styles.listItem}>
                {discovery.discovery}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            Je hebt nog geen ontdekkingen. Gebruik je acties om een deel van het
            wachtwoord te ontdekken
          </p>
        )}
      </div>
    </GameWindowLayout>
  );
};

export default HackerDiscoveries;
