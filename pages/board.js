import Head from 'next/head'
import GameBoard from '../components/GameBoard';
import { useState, useEffect } from 'react';

export default function Board() {

  let arr = []
  let tempField;

  // Pion speler 1
  const [field1, setField1] = useState(1);

  //Pion speler 2 - nu nog hardcoded, later moet de computer detecteren wie er aan de beurt is
  const [field2, setField2] = useState(1);

  const downHandler = ({key}) => {
    arr.push(key);
    console.log(key)
    const index =   arr.indexOf("K")
    if (index != -1 && arr[index - 1] == "V" && arr[index - 2] == "D" && arr[index - 3] == "R" && arr[index - 4] == "B"){
      tempField = arr[index + 1]
      if (tempField){
        if (tempField === "X") {
          tempField = 10
        } else if (tempField === "Y") {
          tempField = 11
        } else if (tempField === "Z") {
            tempField = 12
        }
        setField1(tempField)
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
        <title>Digital board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Game board demo with Arduino</h1>
        <GameBoard currentField1={field1} currentField2={field2}/>
      </main>

    </div>
  )
}
