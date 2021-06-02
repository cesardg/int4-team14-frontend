import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from './../styles/Home.module.css'

const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Better team 14 groupchat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">The better team 14 groupchat - Next.js and Ably Chat Demo</h1>
        <Chat/>
      </main>

    </div>
  )
}
