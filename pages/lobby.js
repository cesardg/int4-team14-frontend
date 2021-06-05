import Layout from "../components/Layout"
import styles from './../styles/Game.module.css'
import { useChannel } from "../components/ChatReactEffect"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import Router from 'next/router'
import Image from 'next/image';

const Lobby = () => {
  const router = useRouter()
  const gamecode = router.query.gamecode
  const player = router.query.player

  const [members, setMembers] = useState(1);

  const [channel] = useChannel(gamecode, (message) => {
    console.log(message)
    if (message.data === "game-data=start-game"){
       Router.push(`/${player}setup?gamecode=${gamecode}`)
    }
  });

  channel.presence.subscribe('enter', async () => { updateActiveCount(channel); });
  channel.presence.subscribe('leave', async () => { updateActiveCount(channel); });
  channel.presence.enter();

  const updateActiveCount = async(channel) => {
    const membersArr = await channel.presence.get();
    setMembers(membersArr.length);
  }

  const handleCLickStart = () => {
    channel.publish({ name: gamecode, data: "game-data=start-game" });
  }

  return (
    <Layout>
      <section>
        <h2>Deel de game code</h2>
        {player === "user"
          ? <div className={styles.players}>
              <article className={styles.player}>
                <p>user</p>
                     <Image
                    src="/img/user.png"
                    alt="Picture of the user"
                    width={30}
                    height={30}
                   />
                <p>jij</p>
              </article>
              <article className={styles.player}>
                <p>hacker</p>
                    <Image
                    src="/img/hacker.png"
                    alt="Picture of the hacker"
                    width={30}
                    height={30}
                   />
                <p>{members === 1 ? "wachten..." : "tegenspeler"}</p>
              </article>
            </div>
        : <div className={styles.players}>
            <article className={styles.player}>
              <p>hacker</p>
                   <Image
                    src="/img/hacker.png"
                    alt="Picture of the hacker"
                    width={30}
                    height={30}
                   />
              <p>jij</p>
            </article>
            <article className={styles.player}>
              <p>user</p>
                   <Image
                    src="/img/user.png"
                    alt="Picture of the user"
                    width={30}
                    height={30}
                   />
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
            <Link href={`${player}/?gamecode=${gamecode}`}><a onClick={handleCLickStart}>Start game</a></Link>
          </div>
        }
        <Link href={`/`}><a className={"btnBack"}>Terug</a></Link>
        
      </section>
    </Layout>
  )
}

export default Lobby
        
