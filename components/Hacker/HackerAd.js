// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./HackerAd.module.css";
// imports
import { useState } from "react";
import Image from "next/image";

const HackerAd = ({ gameData, onClickButton }) => {
  const [currentInterest, setCurrentInterest] = useState();
  const [adWindow, setAdWindow] = useState("info");

  let interests = gameData.hackerinfo.obtainedInterests;
  if (interests) {
    interests = gameData.hackerinfo.obtainedInterests.split("-");
  }

  const onChangeButton = (value) => {
    setAdWindow("ad");
    setCurrentInterest(value);
  };

  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.subtitle}>je staat op een</p>
        <p className={styles.title}>actievak</p>
        {adWindow === "info" ? (
          <>
            <div className={styles.actionButton}>
              <div className={styles.actionImg}>
                <Image
                  src={`/assets/img/hackeractions/ad.svg`}
                  alt="ad icon"
                  width={100}
                  height={80}
                />
              </div>
              <p className={styles.actionTitle}>
                Stuur een persoonlijke reclame
              </p>
              <p className={styles.actionSubtitle}>
                De gebruiker moet 2 beurten overslaan
              </p>
            </div>
            <p className={styles.text}>
              Welke advertentie wil je {gameData.userinfo.username} sturen?
            </p>
          </>
        ) : (
          ""
        )}

        {interests ? (
          <form className={styles.interests}>
            {interests.map((item) => (
              <label key={item} className={styles.interest}>
                <div className={styles.interestImg}>
                  <Image
                    src={`/assets/img/hackeractions/ad-icons/${item}.svg`}
                    alt="ad icon"
                    width={100}
                    height={80}
                  />
                </div>
                <input
                  onChange={(e) => onChangeButton(e.target.value)}
                  type="radio"
                  name="ad"
                  value={item}
                  className={styles.input}
                ></input>
                <p className={styles.interestText}>{item}</p>
              </label>
            ))}
          </form>
        ) : (
          ""
        )}
        {adWindow === "ad" ? (
          <div className={styles.adImg}>
            <Image
              src={`/assets/img/hackeractions/ads/sli.gif`}
              alt="Picture of ad"
              width={640}
              height={360}
            />
          </div>
        ) : (
          ""
        )}
        <button
          onClick={() => onClickButton(currentInterest)}
          className={buttonStyles.buttonGreen}
        >
          Advertentie versturen
        </button>
      </div>
    </GameWindowLayout>
  );
};

export default HackerAd;
