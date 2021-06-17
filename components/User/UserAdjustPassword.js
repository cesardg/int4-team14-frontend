// styling
import styles from "./UserAdjustPassword.module.css";
import buttonStyles from "./../../styles/ButtonStyles.module.css";
// components
import GameWindowLayout from "../GameWindowLayout";
// imports
import { useState } from "react";
import Image from "next/image";

const UserAdjustPassword = ({ gameData, action, handleUpdatedPassword }) => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState(
    gameData.userinfo.password.split("")
  );
  console.log(action)

  const [tempPassword, setTempPassword] = useState([...password]);

  const validateNewCharacter = (char) => {
    console.log("vlaidate", char);
    if (action === "add2letters") {
      if (/[a-z]/.test(char)) {
        setError("");
      } else {
        setError("Je nieuwe letters mogen enkel kleine letters zijn");
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
  };

  const handleChangeCharacter = (e, index) => {
    let copyTemp = [...tempPassword];
    let changes = 0;
    let checkChar = false;
    let char;

    if (e.target.value !== "" && e.target.value !== password[index]) {
      char = e.target.value;
      console.log("char", char);

      if (action === "change1letter") {
        if (/[a-z]/.test(char)) {
          setError("");
          checkChar = true;
        } else {
          setError("Je nieuwe letter mag enkel een kleine letter zijn");
          checkChar = false;
        }
      } else if (action === "change1capital") {
        if (/[A-Z]/.test(char)) {
          setError("");
          checkChar = true;
        } else {
          setError("Je nieuwe letter mag enkel een hoofdletter zijn");
          checkChar = false;
        }
      } else if (action === "change1number") {
        if (/[0-9]/.test(char)) {
          setError("");
          checkChar = true;
        } else {
          setError("Je nieuwe karakter mag enkel een cijfer zijn");
          checkChar = false;
        }
      }
    } else {
      char = password[index];
      checkChar = true;
    }

    if (checkChar === true) {
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
  };

  const handleSubmit = async (e) => {
    const newScore = gameData.userinfo.score + 3;
    e.preventDefault();
    if (action.includes("add")) {
      if (e.target.char2) {
        tempPassword.push(e.target.char1.value, e.target.char2.value);
      } else {
        tempPassword.push(e.target.char1.value);
      }
    }

    setPassword(tempPassword);
    let data = { password: tempPassword.join(""), score: newScore };
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
      console.log("joepie user adjust pw");
      handleUpdatedPassword(newScore);
    }
    e.target.reset();
  };
  console.log(action);

  return (
    <GameWindowLayout title="spelbord" bg="var(--yellow)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Versterk je wachtwoord</p>
        {action === "add2letters" ? (
          <p className={styles.action}>Voeg 2 kleine letters toe</p>
        ) : (
          ""
        )}
        {action === "add1capital" ? (
          <p className={styles.action}>Voeg 1 hoofdletter toe</p>
        ) : (
          ""
        )}
        {action === "add1number" ? (
          <p className={styles.action}>Voeg 1 cijfer toe</p>
        ) : (
          ""
        )}
        {action === "change1number" ? (
          <p className={styles.action}>
            Verander 1 kleine letter in een cijfer
          </p>
        ) : (
          ""
        )}
        {action === "change1capital" ? (
          <p className={styles.action}>
            Verander 1 kleine letter in een hoofdletter
          </p>
        ) : (
          ""
        )}
        <div className={styles.img}>
          <Image
            src={`/assets/img/${action}.svg`}
            alt="Picture of the action"
            width={150}
            height={150}
          />
        </div>
        <p className={styles.textFirst}>Jouw huidig wachtwoord</p>
        <p className={styles.password}>
          {password.map((character, index) => (
            <span key={index} className={styles.character}>
              {character}
            </span>
          ))} 
        </p>
        <p className={styles.text}>Jouw nieuw wachtwoord</p>
        {action.includes("add") ? (
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.password}>
              {password.map((character, index) => (
                <p key={index} className={styles.character}>
                  {character}
                </p>
              ))}
              <input
                className={styles.input}
                type={action === "add1number" ? "number" : "text"}
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
                  onChange={(e) => validateNewCharacter(e.target.value)}
                />
              ) : (
                ""
              )}
            </div>
            <span className={styles.error}>{error}</span>
            <input
              className={styles.button}
              type="submit"
              value="Wachtwoord aanpassen"
              disabled={error.length > 0 ? true : false}
              className={buttonStyles.buttonGreen}
            />
          </form>
        ) : (
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.password}>
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
            </div>

            <span className={styles.error}>{error}</span>
            <input
              className={styles.button}
              type="submit"
              value="Wachtwoord aanpassen"
              disabled={error.length > 0 ? true : false}
              className={buttonStyles.buttonGreen}
            />
          </form>
        )}
      </div>
    </GameWindowLayout>
  );
};

export default UserAdjustPassword;
