// components
import EndGameLayout from "../../components/Endgame/EndGameLayout";
import GameWindowLayout from "../../components/GameWindowLayout";
import PlayerInfo from "../../components/Endgame/PlayerInfo";
import Carousel from "../../components/Endgame/Carousel";
// styling
// import styles from "./../../components/EndGame/EndGameLayout.module.css";
// imports
import Image from "next/image";
import { useState } from "react";

const Userend = ({ data }) => {
  // console.log(data);

  return (
    <EndGameLayout style={"user"}>
      <div className={styles.userInfo}>
        <PlayerInfo info={data[0].userinfo} style={"user"} />
      </div>
      <div className={styles.winner}>
        <GameWindowLayout
          title="spelbord"
          bg="var(--brown)"
          border="var(--green)"
        >
          {data[0].winner === "user" ? (
            <div className={styles.winnerContainer}>
              <p className={styles.winnerTitle}>Gewonnen!</p>
              <p className={styles.winnerSubtitle}>Je bent</p>
              <p className={styles.winnerText}>
                Je account heeft een sterkte bereikt van 100%! Je hebt goed
                gebruik gemaakt van de acties waardoor je account ondoordingbaar
                is geworden voor de hacker. Goed gedaan!
              </p>
            </div>
          ) : (
            <div className={styles.winnerContainer}>
              <p className={styles.winnerTitle}>Verloren!</p>
              <p className={styles.winnerSubtitle}>Je bent</p>
              <p className={styles.winnerText}>
                Je account was niet sterk genoeg om de hacker uit de hielen te
                lopen. Hierdoor heeft hij al jouw persoonlijke informatie te
                pakken gekregen.
              </p>
            </div>
          )}
        </GameWindowLayout>
      </div>
      <div className={styles.tips}>
        <GameWindowLayout
          title="tips & tricks"
          bg="var(--brown)"
          border="var(--green)"
        >
          <div className={styles.tipsContainer}>
            <p className={styles.tipsTitle}>Wat hebben we geleerd vandaag?</p>
            <p className={styles.tipsSubtitle}>
              Gebruik deze tips om jouw online accounts ook in het echte leven
              ondoordringbaar te maken
            </p>
           <Carousel />
          </div>
        </GameWindowLayout>
      </div>
    </EndGameLayout>
  );
};

export default Userend;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  const data = await res.json();
  return { props: { data } };
};
