// components
import GameWindowLayout from "../GameWindowLayout";
// styling
import buttonStyles from "./../../styles/ButtonStyles.module.css";
import styles from "./HackerAd.module.css";
// imports
import { useState } from "react";

const HackerAd = ({ gameData, onClickButton }) => {
  const options = [
    {
      interest: "paardrijden",
      content: "bent u fan van paardrijden? open deze mail/ad",
    },
    { interest: "koken", content: "bent u fan van koken? open deze mail/ad" },
    {
      interest: "knutselen",
      content: "bent u fan van knutsellen? open deze mail/ad",
    },
    { interest: "roblox", content: "bent u fan van roblox? open deze mail/ad" },
  ];

  const [currentInterest, setCurrentInterest] = useState();
  let interests = gameData.hackerinfo.obtainedInterests;
  let defaulChecked;
  let tempContent;
  if (interests) {
    // console.log("er zijn");
    interests = gameData.hackerinfo.obtainedInterests.split("-");
    interests.shift();
    defaulChecked = interests[0];
    options.forEach((element) => {
      if (element.interest === currentInterest) tempContent = element.content;
    });
  } else {
    // console.log("er zijn er geen");
  }

  const onChangeButton = (value) => {
    setCurrentInterest(value);
  };

  return (
    <GameWindowLayout
      title="spelbord"
      bg="var(--yellow)"
      border="var(--green)"
    >
      <div className={styles.container}>
        <p className={styles.title}>actievak</p>
      {interests ? (
        <form>
          {interests.map((item) => (
            <label key={item}>
              {item}
              <input
                onChange={(e) => onChangeButton(e.target.value)}
                type="radio"
                name="ad"
                value={item}
              ></input>
            </label>
          ))}
        </form>
      ) : (
        ""
      )}
      <p>{tempContent}</p>
      <button onClick={() => onClickButton(currentInterest)} className={buttonStyles.buttonGreen}>
        Persoonlijke advertentie versturen
      </button>
    </div>
    </GameWindowLayout>
  );
};

export default HackerAd;
