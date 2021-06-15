import Layout from "../components/Layout";
import WindowLayout from "../components/WindowLayout";
import styles from "./../styles/Home.module.css";
import buttonStyles from "./../styles/buttonStyles.module.css";
import { useState } from "react";
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

  const [screen, setScreen] = useState("start");
  const [playerOne, setPlayerOne] = useState("hacker");
  const [playerTwo, setPlayerTwo] = useState("user");
  const [gamecode, setGamecode] = useState(getStartingGamecode(6));

  const fetchDataGames = async (code) => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`
    );
    const res = await req.json();
    return res;
  };

  const handleSubmitGamecode = async (e) => {
    e.preventDefault();
    console.log(e.target.gamecode.value);
    // controleert of de game code wel bestaat
    const data = await fetchDataGames(e.target.gamecode.value);
    if (data.length != "0") {
      console.log("game bestaat");
      setGamecode(e.target.gamecode.value);
      Router.push(
        `/lobby?gamecode=${e.target.gamecode.value}&player=${data[0].playertwo}`
      );
    } else {
      console.log("game bestaat niet");
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

  console.log(playerOne);
  return (
    <Layout style="user">
      {screen == "start" ? (
        <section className={styles.introContainer}>
          <WindowLayout
            title="Start een nieuw spel"
            bg="var(--brown)"
            border="var(--green)"
            className={styles.left}
          >
            <div className={styles.inside}>
              <p className={styles.title}>Start een nieuw spel</p>
              <p className={styles.text}>
                Start een nieuw spel en deel de game code met je tegenspeler
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
          <WindowLayout
            title="Neem deel aan een spel"
            bg="var(--brown)"
            border="var(--green)"
            className={styles.right}
          >
            <div className={styles.inside}>
              <p className={styles.title}>Neem deel aan een spel</p>
              <p className={styles.text}>
                Heeft je tegenstander al een game code gemaakt?
              </p>
              <p className={styles.bold}>
                Vul hem dan hier in en neem deel aan het spel!
              </p>
              <form
                onSubmit={(e) => handleSubmitGamecode(e)}
                className={styles.form}
              >
                <input
                  type="text"
                  name="gamecode"
                  id="gamecode"
                  required
                  className={styles.gamecode}
                />
                <input
                  type="submit"
                  value="Deelnemen aan het spel"
                  className={buttonStyles.buttonRed}
                />
              </form>
            </div>
          </WindowLayout>

          <div className={styles.bottom}>
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
                  <a className={buttonStyles.buttonPurple}>Bekijk de spelregels</a>
                </Link>
              </div>
            </WindowLayout>
          </div>
        </section>
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
            <div className={styles.playersInside}>
              <p className={styles.playersTitle}>Start een nieuw spel</p>
              <p className={styles.playersText}>Welke speler ben jij?</p>
              <div className={styles.players}>
                <label>
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

                <label>
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
              <Link href={`/lobby?gamecode=${gamecode}&player=${playerOne}`}>
                <a onClick={handeClickStartGame} className={buttonStyles.buttonRed}>
                  Medespeler uitnodigen
                </a>
              </Link>
              <button
                onClick={() => {
                  setScreen("start");
                }}
                className={styles.backButton}
              >
                Terug
              </button>
              <div className={styles.rulesButton}>
                <Link href={`/spelregels`}>
                  <a>Bekijk de spelregels</a>
                </Link>
              </div>
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
