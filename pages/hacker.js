import Head from 'next/head'
import styles from './../styles/Home.module.css'

export default function Hacker() {


  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">H4ck3r</h1>
      </main>

    </div>
  )
}
