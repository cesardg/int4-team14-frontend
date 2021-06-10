import styles from "./HackerDiscoveries.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const HackerDiscoveries = ({ gameData }) => {
  // const discoveries = ["az****", "**er**", "****ty"];

  const [discoveries, setDiscoveries] = useState([])
  const [password, setPassword] = useState()

  const fetchUpdatedGamedata = async (code) => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gameData.gamecode}`
    );
    const res = await req.json();
    return res[0];

  };

  const updateData = async () => {
    const updatedData = await fetchUpdatedGamedata();
    console.log(updatedData);
    // setDiscoveries(updatedData.hackerdiscoveries);
    // setPassword(updatedData.userinfo.password);
  };

    updateData();

  console.log(password);
  console.log(discoveries);
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
