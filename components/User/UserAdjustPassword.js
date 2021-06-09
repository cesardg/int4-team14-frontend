import styles from "./UserAdjustPassword.module.css";
import { useState } from "react";

const UserAdjustPassword = ({ gameData, action }) => {
  const [password, setPassword] = useState(
    gameData.userinfo.password.split("")
  );
  const actions = ["add2letters", "add1capital", "add1number", "change1capital"]

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempPassword;
    if (e.target.char2) {
      tempPassword = [...password, e.target.char1.value, e.target.char2.value];
    } else {
      tempPassword = [...password, e.target.char1.value];
    }

    setPassword(tempPassword);

    const data = {
      password: tempPassword.join(""),
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/userinfos/${gameData.userinfo.id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("joepie");
    }
    e.target.reset();
  }

  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Versterk je wachtwoord</p>
      <p>{action}</p>

      <p>Jouw huidige wachtwoord</p>
      <p className={styles.password}>
        {password.map((character, index) => (
          <span key={index} className={styles.character}>
            {character}
          </span>
        ))}
      </p>
      <p>Jouw nieuw wachtwoord</p>
      <form className={styles.password} onSubmit={(e) => handleSubmit(e)}>
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
              name="char1"
              maxLength="1"
              required
            />
            <input
              className={styles.input}
              type="text"
              name="char2"
              maxLength="1"
              required
            />
          </>
        ) : (
          ""
        )}
        {action === "add1number" ? (
          <input className={styles.input} type="number" name="char1" required />
        ) : (
          ""
        )}
        {action === "add1capital" ? (
          <input
            className={styles.input}
            type="text"
            name="char1"
            maxLength="1"
            required
          />
        ) : (
          ""
        )}
        <input
          className={styles.button}
          type="submit"
          value="Wachtwoord aanpassen"
        />
      </form>
    </article>
  );
};

export default UserAdjustPassword;
