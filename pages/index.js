// components
import Layout from "../components/Layout";
import WindowLayout from "../components/WindowLayout";
// styling
import styles from "./../styles/Home.module.css";
import buttonStyles from "./../styles/ButtonStyles.module.css";
// imports
import { useState, useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";

const Home = () => {
  const getStartingGamecode = (length) => {
    const result = [];
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  };

  const playerOptions = ["user", "hacker"];
  const randomStarter =
    playerOptions[Math.floor(Math.random() * playerOptions.length)];
  const [screen, setScreen] = useState("intro");
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();
  const [gamecode, setGamecode] = useState(getStartingGamecode(6));
  const [error, setError] = useState();
  const [showButton, setShowButton] = useState(false);
  const [profilePass, setProfilePass] = useState(["", "", "", "", "", ""]);
  const [passField, setPassField] = useState();

  const fetchDataGames = async (code) => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`
    );
    const res = await req.json();
    return res;
  };

  const handleSubmitGamecode = async (e) => {
    e.preventDefault();
    const tempcode = profilePass.join("");
    // controleert of de game code wel bestaat
    const data = await fetchDataGames(tempcode);
    if (data.length != "0") {
      setGamecode(tempcode);
      Router.push(`/lobby?gamecode=${tempcode}&player=${data[0].playertwo}`);
    } else {
      setError("Deze gamecode bestaat niet");
    }
  };

  const handeClickStartGame = () => {
    const data = {
      gamecode: gamecode,
      playerone: playerOne,
      playertwo: playerTwo,
      startingPlayer: randomStarter,
    };
    onSubmit(data);
  };

  const onSubmit = async (data) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("game zit nu in db ");
    }
  };

  const handelChangePas = (value, index) => {
    const copyArr = [...profilePass];
    copyArr[index] = value.target.value;
    setProfilePass(copyArr);
    const newIndex = Number(index) + 1;
    if (index == 5) {
      setShowButton(true);
    }
    if (value.target.value) {
      setPassField(newIndex);
    }
  };

  const callbackRef = useCallback(
    (field) => (inputElement) => {
      if (field == passField && inputElement) {
        inputElement.focus();
      }
    },
    [passField]
  );

  return (
    <Layout style="user">
      {screen == "intro" ? (
        <section className={styles.introContainer}>
          <div className={styles.introItemLeft}>
            <WindowLayout
              title="Start een nieuw spel"
              bg="var(--brown)"
              border="var(--green)"
              className={styles.left}
            >
              <div className={styles.inside}>
                <p className={styles.title}>Klaar om het spel te spelen?</p>
                <button
                  onClick={() => {
                    setScreen("start");
                  }}
                  className={buttonStyles.buttonRed}
                >
                  Spel starten
                </button>
              </div>
            </WindowLayout>
          </div>
          <div className={styles.introImg1}>
            <Image
              src={`/assets/img/userpicstr/pf3.svg`}
              alt="logo"
              width={416}
              height={331}
            />
          </div>
          <div className={styles.introImg2}>
            <Image
              src={`/assets/img/hackerpicstr/pf3.svg`}
              alt="logo"
              width={416}
              height={331}
            />
          </div>
          <div className={styles.introItemRight}>
            <WindowLayout
              title={"spelregels"}
              bg="var(--brown)"
              border="var(--yellow)"
            >
              <div className={styles.inside}>
                <p className={styles.title}>
                  Speel je dit spel voor de eerste keer?
                </p>
                <Link href={`/spelregels`}>
                  <a className={buttonStyles.buttonPurple}>
                    Bekijk de spelregels
                  </a>
                </Link>
              </div>
            </WindowLayout>
          </div>
          <div className={styles.introDiceImg1}>
            <Image
              src={`/assets/img/dice.svg`}
              alt="logo"
              width={416}
              height={331}
            />
          </div>
          <div className={styles.introDiceImg2}>
            <Image
              src={`/assets/img/dice.svg`}
              alt="logo"
              width={416}
              height={331}
            />
          </div>
          <div className={styles.introDiceImg3}>
            <Image
              src={`/assets/img/dice.svg`}
              alt="logo"
              width={416}
              height={331}
            />
          </div>

        </section>
      ) : (
        ""
      )}

      {screen == "start" ? (
        <>
          <section className={styles.startContainer}>
            <div className={styles.startItem}>
              <WindowLayout
                title="Start een nieuw spel"
                bg="var(--brown)"
                border="var(--green)"
                className={styles.left}
              >
                <div className={styles.inside}>
                  <p className={styles.title}>Start een nieuw spel</p>
                  <p className={styles.text}>
                    Eén speler start een nieuw spel en deelt de game code met de
                    tegenspeler
                  </p>
                  <button
                    onClick={() => {
                      setScreen("new");
                    }}
                    className={buttonStyles.buttonRed}
                  >
                    Nieuw spel starten
                  </button>
                </div>
              </WindowLayout>
            </div>

            <div className={styles.startItem}>
              <WindowLayout
                title="Neem deel aan een spel"
                bg="var(--brown)"
                border="var(--green)"
                className={styles.right}
              >
                <div className={styles.inside}>
                  <p className={styles.title}>Neem deel aan een spel</p>
                  <p className={styles.text}>
                    Heeft je tegenstander al een game code gemaakt? <br></br>{" "}
                    Vul hem dan hier in en neem deel aan het spel!
                  </p>
                  <form
                    onSubmit={(e) => handleSubmitGamecode(e)}
                    className={styles.form}
                  >
                    <label className={styles.codeLabel}>
                      <div className={styles.passwordWrapper}>
                        <input
                          className={styles.smallInput}
                          type="number"
                          maxLength="1"
                          placeholder="1"
                          name="code"
                          ref={callbackRef(0)}
                          value={profilePass[0]}
                          onChange={(value) => handelChangePas(value, "0")}
                          required
                        />

                        <input
                          className={styles.smallInput}
                          type="number"
                          name="code"
                          placeholder="2"
                          maxLength="1"
                          ref={callbackRef(1)}
                          value={profilePass[1]}
                          onChange={(value) => handelChangePas(value, "1")}
                          required
                        />

                        <input
                          className={styles.smallInput}
                          type="number"
                          name="code"
                          placeholder="3"
                          maxLength="1"
                          ref={callbackRef(2)}
                          value={profilePass[2]}
                          onChange={(value) => handelChangePas(value, "2")}
                          required
                        />

                        <input
                          className={styles.smallInput}
                          type="number"
                          name="code"
                          placeholder="4"
                          maxLength="1"
                          ref={callbackRef(3)}
                          value={profilePass[3]}
                          onChange={(value) => handelChangePas(value, "3")}
                          required
                        />

                        <input
                          className={styles.smallInput}
                          type="number"
                          name="code"
                          placeholder="5"
                          maxLength="1"
                          ref={callbackRef(4)}
                          value={profilePass[4]}
                          onChange={(value) => handelChangePas(value, "4")}
                          required
                        />

                        <input
                          className={styles.smallInput}
                          type="number"
                          name="code"
                          placeholder="6"
                          maxLength="1"
                          ref={callbackRef(5)}
                          value={profilePass[5]}
                          onChange={(value) => handelChangePas(value, "5")}
                          required
                        />
                      </div>
                    </label>
                    {error ? <span className={styles.error}>{error}</span> : ""}
                    {showButton ? (
                      <input
                        type="submit"
                        value="Deelnemen aan het spel"
                        className={buttonStyles.buttonRed}
                      />
                    ) : (
                      ""
                    )}
                  </form>
                </div>
              </WindowLayout>
            </div>
          </section>
          <button
            onClick={() => {
              setScreen("intro");
            }}
            className={styles.backButtonStart}
          >
            Terug
          </button>
        </>
      ) : (
        ""
      )}

      {screen == "new" ? (
        <section className={styles.playersContainer}>
          <WindowLayout
            title={"selecteer speler"}
            bg="var(--brown)"
            border="var(--green)"
          >
            <div
              className={
                playerOne ? styles.playersInside : styles.playersInsideEmpty
              }
            >
              <p className={styles.playersTitle}>Start een nieuw spel</p>
              <p className={styles.playersText}>Welke speler ben jij?</p>
              <div className={styles.players}>
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="player"
                    value="hacker"
                    checked={playerOne === "hacker"}
                    onChange={() => {
                      setPlayerOne("hacker"), setPlayerTwo("user");
                    }}
                    className={styles.input}
                  />
                  <div className={styles.player}>
                    <div className={styles.playerImg}>
                      <Image
                        src="/assets/img/hackerpics/pf1.svg"
                        alt="Picture of the hacker"
                        height={200}
                        width={300}
                      />
                    </div>
                    <p className={styles.playerTitle}>Hacker</p>
                    <ul className={styles.playerList}>
                      <li className={styles.playerListItem1}>
                        Hack het wachtwoord van de gebruiker
                      </li>
                      <li className={styles.playerListItem2}>
                        Gebruik hack aanvallen om informatie van de gebruiker te
                        weten te komen
                      </li>
                    </ul>
                  </div>
                </label>

                <label className={styles.label}>
                  <input
                    type="radio"
                    name="player"
                    value="user"
                    checked={playerOne === "user"}
                    onChange={() => {
                      setPlayerOne("user"), setPlayerTwo("hacker");
                    }}
                    className={styles.input}
                  />
                  <div className={styles.player}>
                    <div className={styles.playerImg}>
                      <Image
                        src="/assets/img/userpics/pf2.svg"
                        alt="Picture of the user"
                        height={200}
                        width={300}
                      />
                    </div>
                    <p className={styles.playerTitle}>Internetgebruiker</p>
                    <ul className={styles.playerList}>
                      <li className={styles.playerListItem3}>
                        Beveilig je persoonlijke gegegevens en maak je profiel
                        ondoordringbaar
                      </li>
                      <li className={styles.playerListItem4}>
                        Maak kennis met verschillende technieken en tips om je
                        gegevens beter te beschermen
                      </li>
                    </ul>
                  </div>
                </label>
              </div>
              {playerOne ? (
                <Link href={`/lobby?gamecode=${gamecode}&player=${playerOne}`}>
                  <a
                    onClick={handeClickStartGame}
                    className={buttonStyles.buttonRed}
                  >
                    Medespeler uitnodigen
                  </a>
                </Link>
              ) : (
                ""
              )}

              <button
                onClick={() => {
                  setScreen("start");
                }}
                className={styles.backButton}
              >
                Terug
              </button>
              <button className={styles.rulesButton}>
                <Link href={`/spelregels`}>
                  <a>Bekijk de spelregels</a>
                </Link>
              </button>
            </div>
          </WindowLayout>
        </section>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Home;
