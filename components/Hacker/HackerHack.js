import styles from './HackerHack.module.css';
import {useState} from 'react';

const HackerHack = ({handleSubmitForm, feedback}) => {

  const [view, setView] = useState("button");

  return (
    <article className={styles.article}>
      <h2>Hack</h2>
      <p>Ben je zeker dat je het wachtwoord al zou kunnen hacken? Je kan 1 hack uitvoeren per ronde</p>
      <p>Je kan de user proberen hacken nadat je start gepasseerd bent</p>
      <p>Je kan de user nog eens proberen hacken nadat je opnieuw start gepasseerd bent</p>
      <p>Je hebt 1 poging om de user te hacken!</p>
      {view === "button" ? 
        <button onClick={() => setView("form")}>Hack de user</button>
      : 
      <div>
        <form onSubmit={(e) => handleSubmitForm(e)}>
          <input
          name="hackpass"
          type="text"
        ></input>
          <input type="submit" value="Hack te password"></input>
        </form>
        <p>{feedback}</p>
      </div>
      }
      
    </article>
  );
};

export default HackerHack;
