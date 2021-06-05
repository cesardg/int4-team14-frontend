import Layout from "../components/Layout"
import styles from './../styles/Game.module.css'
import { useChannel } from "../components/ChatReactEffect"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Router from 'next/router'

const Lobby = () => {
  const router = useRouter()
  const gamecode = router.query.gamecode
  const player = router.query.player

  const [members, setMembers] = useState(1);
  const [counter, setCounter] = useState(5);

  const [channel, ably] = useChannel(gamecode);

  const updateActiveCount = async(channel) => {
    const membersArr = await channel.presence.get();
    setMembers(membersArr.length);
  }

  useEffect(() => {
    if (counter > 0 && members > 1){
      setTimeout(() => setCounter(counter - 1), 1000);
    } else if (counter == 0) {
      console.log("done")
      Router.push(`/testing?gamecode=${gamecode}&player=${player}`)
    }
  }, []);


  channel.presence.subscribe('enter', async () => { updateActiveCount(channel); });
  channel.presence.subscribe('leave', async () => { updateActiveCount(channel); });
  channel.presence.enter();

  return (
    <Layout>
      <section>
        <h2>Deel de game code</h2>
        {player === "user"
          ? <div className={styles.players}>
              <article className={styles.player}>
                <p>user</p>
                <img src="/user.png" alt="" />
                <p>jij</p>
              </article>
              <article className={styles.player}>
                <p>hacker</p>
                <img src="/hacker.png" alt="" />
                <p>{members === 1 ? "wachten..." : "tegenspeler"}</p>
              </article>
            </div>
        : <div className={styles.players}>
            <article className={styles.player}>
              <p>hacker</p>
              <img src="/hacker.png" alt="" />
              <p>jij</p>
            </article>
            <article className={styles.player}>
              <p>user</p>
              <img src="/user.png" alt="" />
              <p>{members === 1 ? "wachten..." : "tegenspeler"}</p>
            </article>
          </div>
        }
        { members === 1
          ? 
          <div>
            <p className={styles.gamecode}>{gamecode}</p>
            <p className={styles.text}>Deel de game code met je tegenspeler om het spel te starten</p>
          </div>
          : 
          <div>
            <Link href={`/testing?gamecode=${gamecode}&player=${player}`}><a>Start game</a></Link>
            starting game in {counter}
          </div>
        }
        <Link href={`/`}><a className={"btnBack"}>Terug</a></Link>
        
      </section>
    </Layout>
  )
}

export default Lobby
        
