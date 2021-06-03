import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from './../styles/Home.module.css'
import GameBoard from '../components/GameBoard';
import { useState, useEffect } from 'react';

const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Home() {


  const [keyPressed, setKeyPressed] = useState(false);
  let arr = []

  // If pressed key is our target key then set to true
  const downHandler = ({key}) => {
      setKeyPressed(key);
      // if toestenbord else spelbord
      if (key === "V"){
       initArray(key)
      }
      if (key === "Q" || key === "K" ){
        addArray(key)
      }
  }

  const initArray = (key) => {
    arr.push(key)
  }

  const addArray = (key) => {
    arr.push(key)
    console.log(arr);
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount


  return (
    <div className={styles.container}>
      <Head>
        <title>Better team 14 groupchat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">The better team 14 groupchat - Next.js x Ably x Spongebob live Chat Demo</h1>
        <Chat/>
        <GameBoard pion={keyPressed} />
      </main>

    </div>
  )
}
