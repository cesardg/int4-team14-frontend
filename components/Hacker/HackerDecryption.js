import styles from "./HackerDecryption.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const HackerDecryption = ({ gameData }) => {
  const [discoveries, setDiscoveries] = useState(gameData.hacker_discoveries);
  const [password, setPassword] = useState(gameData.userinfo.password);
  const action = "get2characters";

  
  console.log("------")
  let totalDiscovery = "";

  const getDiscovery = () => {
    for (let i = 0; i < password.length; i++) {

      console.log(password.charAt(i));
      totalDiscovery.concat("*")
    }

    console.log(totalDiscovery)
  }

  getDiscovery()
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
