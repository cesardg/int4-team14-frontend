import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from './../styles/Home.module.css'
import GameBoard from '../components/GameBoard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Testing() {

  const router = useRouter()
  const gameCode = router.query
  console.log(gameCode);

  let arr = []
  let tempField;
  const [field, setField] = useState(1);
  // If pressed key is our target key then set to true
  const downHandler = ({key}) => {
    arr.push(key);
    const index =   arr.indexOf("K")
    if (index != -1 && arr[index - 1] == "Q" && arr[index - 2] == "V" ){
      tempField = arr[index + 1]
      if (tempField){
        setField(tempField)
        arr = [];
      } 
    } 
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
        <title>Team 14 groupchat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Team 14 groupchat - Next.js x Ably x Arduino demo</h1>
        <Chat gameCode={gameCode.game}/>
        <GameBoard currentField={field}/>
      </main>

    </div>
  )
}

