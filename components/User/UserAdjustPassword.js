import styles from "./UserAdjustPassword.module.css";
import { useState } from "react";

const UserAdjustPassword = ({ gameData, action }) => {
  const [password, setPassword] = useState(
    gameData.userinfo.password.split("")
  );
  const [newPassword, setNewPassword] = useState();
  const actions = ["add2letters", "add1capital", "add1number", "change1capital"]

  let tempNewPassword;

  const setAction = () => {
    switch (action) {
      case "add2letters":
        tempNewPassword = [...password, "-c", "-c"]
      case "add1capital":
        tempNewPassword = [...password, "-C"]
    }
  }

  console.log(password);
  // const updatePassword
  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Versterk je wachtwoord</p>
      <p>Voeg 2 kleine letters toe</p>

      <p>Jouw huidige wachtwoord</p>
      <p className={styles.password}>
        {password.map((character, index) => (
          <span key={index} className={styles.character}>
            {character}
          </span>
        ))}
      </p>
      <p>Jouw nieuw wachtwoord</p>
      <div className={styles.password}>
        {password.map((character, index) => (
          <p key={index} className={styles.character}>
            {character}
          </p>
        ))}
        {action === "add2letters" ? (
          <>
            <input
              className={styles.input}
              type="text"
              name="letter1"
              required
            />
            <input
              className={styles.input}
              type="text"
              name="letter1"
              required
            />
          </>
        ) : (
          ""
        )}
        {action === "add1number" ? (
          <input
            className={styles.input}
            type="number"
            name="letter1"
            required
          />
        ) : (
          ""
        )}
      </div>

      <button>wachtwoord aanpassen</button>
    </article>
  );
};

export default UserAdjustPassword;
