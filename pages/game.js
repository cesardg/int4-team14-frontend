import Layout from "../components/Layout"
import styles from './../styles/Game.module.css'
import { useChannel } from "./../components/ChatReactEffect"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"

const Game = () => {
  const router = useRouter()
  const gamecode = router.query.gamecode
  const player = router.query.player

  const [members, setMembers] = useState(1);

  const [channel, ably] = useChannel(gamecode, (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const updateActiveCount = async(channel) => {
    const membersArr = await channel.presence.get();
    setMembers(membersArr.length)
  }

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
          : <Link href={`/testing`}><a>Start game</a></Link>
        }
        <Link href={`/`}><a className={"btnBack"}>Terug</a></Link>
        
      </section>
    </Layout>
  )
}

export default Game
        
