import Head from 'next/head'
import dynamic from 'next/dynamic'
import GameBoard from '../components/GameBoard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Testing() {

  const router = useRouter()
  const gamecode = router.query.gamecode
  console.log(gamecode);

  let arr = []
  let tempField;
  const [field, setField] = useState(1);
  // If pressed key is our target key then set to true- test branch
  const downHandler = ({key}) => {
    arr.push(key);
    const index =   arr.indexOf("K")
    if (index != -1 && arr[index - 1] == "V" && arr[index - 2] == "D" && arr[index - 3] == "R" && arr[index - 4] == "B"){
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
    <div>
      <Head>
        <title>Team 14 groupchat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Team 14 groupchat - Next.js x Ably x Arduino demo</h1>
        <Chat gamecode={gamecode}/>
        <GameBoard currentField={field}/>
      </main>

    </div>
  )
}

