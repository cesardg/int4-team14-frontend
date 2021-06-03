import Head from 'next/head'
import styles from './../styles/Home.module.css'
import Link from "next/link";
import { nanoid } from 'nanoid'

export default function Home() {

  const gameCode = nanoid(5);


  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">Us3r vs H4ck3r</h1>
        <p>Room code: <span>{gameCode}</span></p>
        <article>
          <h2>Choose</h2>
           <Link  href={`/user?game=2RF456`}><a className={styles.link}>Us3r | </a></Link>
           <Link  href={`/hacker?game=2RF456`}><a className={styles.link}>H4ck3r</a></Link>
        </article>
      </main>

    </div>
  )
}
