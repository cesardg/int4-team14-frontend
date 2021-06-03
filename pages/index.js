import Layout from "../components/Layout";
import styles from './../styles/Home.module.css';
import { useState } from 'react';
import Link from "next/link";
import { nanoid } from 'nanoid'

const Home = () => {
  const [screen, setScreen] = useState("start");
  const [player, setPlayer] = useState();
  const [gamecode, setGamecode] = useState(nanoid(5));
  
  const handleSubmitGamecode = (e) => {
    e.preventDefault();
    setGamecode(e.target.gamecode.value)
    setScreen("participate")
  }

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
              <input type="text" name="gamecode" id="gamecode" />
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
            <article className={styles.player}>
              <img src="hacker.png" alt="" />
              <p>Hacker</p>
              <ul>
                <li>Hack het paswoord van de user</li>
                <li>Verstuur spam-mails om de user af te leiden</li>
              </ul>
            </article>
            <article className={styles.player}>
              <img src="/user.png" alt="" />
              <p>User</p>
              <ul>
                <li>Bescherm je wachtwoord als de beste</li>
                <li>Zorg dat je de hacker te slim af bent</li>
              </ul>
            </article>
          </div>
          <button onClick={() => {setScreen("gamecode")} }>Medespeler uitnodigen →</button>
          <button onClick={() => {setScreen("start")} } className={styles.btnBack}>←</button>
        </section>
      : ""}

      {screen == "participate" ?
        <section>
          <h2>Neem deel aan een spel</h2>
          <button onClick={() => {setScreen("start")} } className={styles.btnBack}>←</button>
        </section>
      : ""}
      
      {screen == "gamecode" ?
        <section>
          <h2>Deel de game code</h2>
          <p>{gamecode}</p>
          <p>Deel de game code met je tegenspeler en start het spel</p>
          <Link href={`/${player}?game=`+ gamecode}><a className={styles.link}>Start game →</a></Link>
          <button onClick={() => {setScreen("new")} } className={styles.btnBack}>←</button>
        </section>
      : ""}

      {screen == "ready" ?
        <section>
          <h2>Deel de game code</h2>
          <p>{gameCode}</p>
          <p>Deel de game code met je tegenspeler en start het spel</p>
          {/* <Link href={player == "user" ? `/user?game=`+ gameCode : `/hacker?game=`+ gameCode}><a className={styles.link}>Start game</a></Link> */}
        </section>
      : ""}
    </Layout>
  )
}

export default Home
        
