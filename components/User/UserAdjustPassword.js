import styles from "./UserAdjustPassword.module.css";
import { useState } from "react";

const UserAdjustPassword = ({ gameData, action }) => {
  const [error, setError] = useState("")
  const [password, setPassword] = useState(
    gameData.userinfo.password.split("")
  );
  const actions = ["add2letters", "add1capital", "add1number", "change1capital"]
  // let tempPassword = [...password];
  const [tempPassword, setTempPassword] = useState([...password])

  const validateNewCharacter = (char) => {
    if (action === "add2letters") {
      if (/[a-z]/.test(char)) {
        setError("");
      } else {
        setError("Je nieuwe letters mogen enkel kleine letters zijn")
      }
    } else if (action === "add1capital" || action === "change1capital") {
      if (/[A-Z]/.test(char)) {
        setError("");
      } else {
        setError("Je nieuwe letter mag enkel een hoofdletter zijn");
      }
    } else if (action === "add1number" || action === "change1number") {
      if (/[0-9]/.test(char)) {
        setError("");
      } else {
        setError("Je nieuwe karakter mag enkel een cijfer zijn");
      }
    }
  }

  const handleChangeCharacter = (e, index) => {
    let copyTemp = [...tempPassword];
    let changes = 0;
    let char
    if (e.target.value !== "") {
      char = e.target.value
    } else {
      char = password[index];
    }
    copyTemp[index] = char;
    setTempPassword(copyTemp);
    console.log("-------");
    console.log("temp", tempPassword);
    console.log("copy", copyTemp);

    copyTemp.map((char, index) => {
      if (char != password[index]) {
        changes++;
      }
    });
    console.log("changes", changes);
    if (changes > 1) {
      console.log("veel aanpassing");
      setError("Je mag maar 1 letter aanpassen");
    } else if (changes === 0) {
      setError("je moet 1 letter aanpassen");
      console.log("geen aanpassing");
    } else if (changes === 1) {
      setError("");
      console.log("juist 1 aanpassing");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action.includes("add")) {
      if (e.target.char2) {
        tempPassword.push(e.target.char1.value, e.target.char2.value);
      } else {
        tempPassword.push(e.target.char1.value);
      }      
    }
    
    setPassword(tempPassword);
    let data = { password: tempPassword.join("") };
   
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
      {action.includes("add") ? (
        <form className={styles.password} onSubmit={(e) => handleSubmit(e)}>
          {password.map((character, index) => (
            <p key={index} className={styles.character}>
              {character}
            </p>
          ))}
          <input
            className={styles.input}
            type={action === "add1capital" ? "number" : "text"}
            name="char1"
            maxLength="1"
            onChange={(e) => validateNewCharacter(e.target.value)}
            required
          />
          {action === "add2letters" ? (
            <input
              className={styles.input}
              type="text"
              name="char2"
              maxLength="1"
              required
              onKeyPress={(e) => validateNewCharacter(e.target.value)}
            />
          ) : (
            ""
          )}
          <span className={styles.error}>{error}</span>
          <input
            className={styles.button}
            type="submit"
            value="Wachtwoord aanpassen"
            disabled={error.length > 0 ? true : false}
          />
        </form>
      ) : (
        <form className={styles.password} onSubmit={(e) => handleSubmit(e)}>
          {password.map((character, index) =>
            /[a-z]/.test(character) ? (
              <input
                key={index}
                className={styles.input}
                type={action === "add1capital" ? "number" : "text"}
                name={"char" + (index + 1)}
                maxLength="1"
                placeholder={character}
                onChange={(e) => handleChangeCharacter(e, index)}
              />
            ) : (
              <p key={index} className={styles.character}>
                {character}
              </p>
            )
          )}
          <span className={styles.error}>{error}</span>
          <input
            className={styles.button}
            type="submit"
            value="Wachtwoord aanpassen"
            disabled={error.length > 0 ? true : false}
          />
        </form>
      )}
    </article>
  );
};

export default UserAdjustPassword;
