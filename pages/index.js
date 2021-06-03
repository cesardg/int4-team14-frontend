import Head from 'next/head'
import styles from './../styles/Home.module.css'
import Link from "next/link";
import { nanoid } from 'nanoid'

export default function Home() {

  //const gameCode = nanoid(5);
  const gameCode = "hardCoded123"


  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">Us3r vs H4ck3r</h1>

        <article>
          <h2>Code</h2>
          <p>Room code: <span>{gameCode}</span></p>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)} >
            <label className={styles.label} >
              Fill in room code
              <input className={styles.input} type="text" name="code" required />
            </label>
            <input className={styles.button} type="submit" value="Join game" />
          </form>
        </article>
       
        <article>
          <h2>Choose</h2>
           <Link  href={`/user?game=`+ gameCode}><a className={styles.link}>Us3r | </a></Link>
           <Link  href={`/hacker?game=`+ gameCode}><a className={styles.link}>H4ck3r</a></Link>
        </article>
      </main>

    </div>
  )
}
