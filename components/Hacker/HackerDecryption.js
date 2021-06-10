import styles from "./HackerDecryption.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const HackerDecryption = ({ gameData }) => {
  const action = "get2characters";

  console.log("------")
  let discoveryArr = [];
  let passwordArr = gameData.userinfo.password.split("");

// nog voorbije discoveries checken
  const updateDatabaseDiscoveries = async () => {
    const discovery = discoveryArr.join("")
    console.log(discovery);

    const data = {
      Discovery: discoveryArr.join(""),
      game: gameData
    };

    console.log(data);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/hacker-discoveries`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("joepie");
    }
  }

  const updateDiscovery = () => {
    while (passwordArr.length !== discoveryArr.length) {
      discoveryArr.push("*");
    }
  }

  const getDiscoveredCharacters = () => {
    let discoveredCharacters = 0
    discoveryArr.map((char, index) => {
      if (char === "*") {
        if (action === "get2characters" && discoveredCharacters < 2) {
          if (/[a-z]/.test(passwordArr[index])) {
            discoveryArr[index] = passwordArr[index]
            discoveredCharacters++
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
    })
    
    updateDatabaseDiscoveries()
  }

  updateDiscovery()
  getDiscoveredCharacters()

  console.log("disc arr", discoveryArr);

  return (
    <article className={styles.article}>
      <h2>Wachtwoord ontsleutelaar</h2>
      <p>Ontdek 2 kleine letters van het wachtwoord</p>
      <p>Ontdek 1 hoofdletter van het wachtwoord</p>
      <p>Ontdek 1 cijfer van het wachtwoord</p>
      <p>Huidig wachtwoord van de user</p>
      <p>**er**</p>
      <button>Voeg dit toe aan je ontdekkingen</button>
    </article>
  );
};

export default HackerDecryption;
