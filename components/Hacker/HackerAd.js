import styles from "./HackerAd.module.css";
import { useState} from "react";

const HackerAd = ({gameData, onClickButton}) => {
  console.log(gameData.hackerinfo);
  const interests = gameData.hackerinfo.obtainedInterests.split('-')
  interests.shift();

  const options = [
    {interest: "Paardrijden", content: "bent u fan van paardrijden? open deze mail/ad"},
    {interest: "koken", content: "bent u fan van koken? open deze mail/ad"},
    {interest: "Knutselen", content: "bent u fan van knutselen? open deze mail/ad"},
    {interest: "roblox" ,content: "bent u fan van roblox? open deze mail/ad"}
  ]

  const [currentInterest, setCurrentInterest] = useState(interests[0]);

  let tempContent;
  options.forEach(element => {if (element.interest === currentInterest)tempContent = element.content });

  const onChangeButton = (value) => {
    setCurrentInterest(value)
  }
  
  return (
    <article className={styles.article}>
      <h2>Stuur een gepersonaliseerde advertentie</h2>
        <form >
        {interests.map((item) => (
          <label key={item}>
            {item}
            <input onChange={(e) => onChangeButton(e.target.value)} type="radio" checked={item === currentInterest ? "checked" : ""} name="ad" value={item}></input>
          </label>
        ))}
        </form>
      <p>{tempContent}</p>
      <button onClick={() => onClickButton(currentInterest)} >Persoonlijke advertentie versturen</button>
    </article>
  );
};

export default HackerAd;
