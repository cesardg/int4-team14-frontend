// styling
import styles from "./HackerHack.module.css";
import buttonStyles from "./../../styles/ButtonStyles.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";
// imports
import { useState } from "react";

const HackerHack = ({ handleSubmitForm, feedback, start }) => {
  const [view, setView] = useState("button");
  return (
    <GameWindowLayout title="hacking" bg="var(--black)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Hacking</p>
        <p className={styles.text}>
          Ben je zeker dat je het wachtwoord al zou kunnen hacken? Je kan 1 hack
          uitvoeren per ronde
        </p>

        {view === "button" && start ? (
          <button
            onClick={() => setView("form")}
            className={buttonStyles.buttonRedYellow}
          >
            Hack de user
          </button>
        ) : (
          ""
        )}
        {view === "form" && start ? (
          <div>
            <form onSubmit={(e) => handleSubmitForm(e)}>
              <input
                name="hackpass"
                type="text"
                className={styles.input}
              ></input>
              <input
                type="submit"
                value="Hacken!"
                className={buttonStyles.buttonRedYellow}
              ></input>
            </form>
          </div>
        ) : (
          ""
        )}
        {start ? (
     
          <p className={styles.subtext}>
            Je hebt 1 poging om de user te hacken!
          </p>
       
        ) : (
          <p className={styles.subtext}>
            Je kan de user proberen hacken nadat je start gepasseerd bent
          </p>
        )}
         <p className={styles.feedbackText}>{feedback}</p>
      </div>
    </GameWindowLayout>
  );
};

export default HackerHack;
