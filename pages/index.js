import Layout from "../components/Layout";
import styles from './../styles/Home.module.css';
import { useState } from 'react';
import Link from "next/link";
import Router from 'next/router'
import { nanoid } from 'nanoid'

const Home = () => {
  const [screen, setScreen] = useState("start");
  const [playerOne, setPlayerOne] = useState("hacker");
  const [playerTwo, setPlayerTwo] = useState("user");
  const [gamecode, setGamecode] = useState(nanoid(5));


  const fetchDataGames = async () => {
    const req = await fetch(`http://localhost:1337/games/`);
    const res = await req.json();
    return res;
  };

  const handleSubmitGamecode = async (e) => {
    e.preventDefault();
    // controleert of de game code wel bestaat
    const data =  await fetchDataGames();
    data.forEach(game => {
      if (game.gamecode === e.target.gamecode.value) {
        console.log("game bestaat")
        setGamecode(e.target.gamecode.value)
        setScreen("participate")
        Router.push(`/lobby?gamecode=${e.target.gamecode.value}&player=${game.playertwo}`)
      } else {
        console.log("game bestaat niet")
      }
    });
  }

  // ---- begin game toevoegen aan database ----
  const handeClickStartGame = () => {
    const data = {
      gamecode: gamecode,
      playerone: playerOne,
      playertwo: playerTwo
    };
    onSubmit(data)
  }

  const onSubmit = async (data) => {

  const response = await fetch(
    `http://localhost:1337/games/`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("game zit nu in db ")
    }
  };

    // ---- einde game toevoegen aan database ----

  return (
    <Layout>
      {screen == "start" ?
        <section className={styles.intro}>
          <h2 className="hidden">Start een spel</h2>
          <div className={styles.left}>
            <p>Start een nieuw spel</p>
            <p>Start een nieuw spel en deel de game code met je tegenspeler</p>
            <button onClick={() => {setScreen("new")}}>→</button>
          </div>
          <div className={styles.right}>
            <p>Neem deel aan een spel</p>
            <p>Heb je al een game code? Neem snel deel aan het spel</p>
            <form onSubmit={(e) => handleSubmitGamecode(e)}>
              <input type="text" name="gamecode" id="gamecode" required />
              <input type="submit" value="→" />
            </form>
          </div>
          <div className={styles.bottom}>
            <p>Speel je dit spel voor de eerste keer?</p>
            <Link href={`/spelregels`}><a className={styles.link}>Bekijk de spelregels</a></Link>
          </div>
        </section>
      : ""}
      
      {screen == "new" ?
        <section>
          <h2>Start een nieuw spel</h2>
          <p>Welke speler ben jij?</p>
          <div className={styles.players}>
            <div className={styles.player}>
              <label>
                <input
                  type="radio"
                  name="player"
                  value="hacker"
                  checked={playerOne === "hacker"}
                  onChange={() => {setPlayerOne("hacker"), setPlayerTwo("user")}}
                  className="form-check-input"
                />
                <img src="hacker.png" alt="" />
                <p>Hacker</p>
                <ul>
                  <li>Hack het paswoord van de user</li>
                  <li>Verstuur spam-mails om de user af te leiden</li>
                </ul>
              </label>
            </div>

            <div className={styles.player}>
              <label>
                <input
                  type="radio"
                  name="player"
                  value="user"
                  checked={playerOne === "user"}
                  onChange={() => {setPlayerOne("user"), setPlayerTwo("hacker")}}
                  className="form-check-input"
                />
                <img src="/user.png" alt="" />
                <p>User</p>
                <ul>
                  <li>Bescherm je wachtwoord als de beste</li>
                  <li>Zorg dat je de hacker te slim af bent</li>
                </ul>
              </label>
            </div>
            
          </div>
          <Link href={`/lobby?gamecode=${gamecode}&player=${playerOne}`}><a onClick={handeClickStartGame} className={styles.link}>Start game →</a></Link>
          <button onClick={() => {setScreen("start")} } className={"btnBack"}>Terug</button>
        </section>
      : ""}

      {screen == "participate" ?
        <section>
          <h2>Neem deel aan een spel</h2>
          <button onClick={() => {setScreen("start")} } className={styles.btnBack}>Terug</button>
        </section>
      : ""}

    </Layout>
  )
}

export default Home
      