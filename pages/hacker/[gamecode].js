import GameLayout from '../../components/GameLayout';
import Turn from "../../components/Turn";
import Notes from "../../components/Notes";
import GameBoard from "../../components/GameBoard";
import HackerAction from "../../components/Hacker/HackerAction";
import HackerInfo from "../../components/Hacker/HackerInfo";
import HackerDiscoveries from "../../components/Hacker/HackerDiscoveries";
import HackerAd from '../../components/Hacker/HackerAd';
import HackerDecryption from '../../components/Hacker/HackerDecryption';
import HackerInterests from '../../components/Hacker/HackerInterests';
import HackerScreencapture from '../../components/Hacker/HackerScreencapture';
import HackerVpn from "../../components/Hacker/HackerVpn";
import HackerHack from "../../components/Hacker/HackerHack";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useChannel } from '../../components/ChatReactEffect';

const Hacker = ({ data }) => {
  const router = useRouter();
  const gamecode = router.query.gamecode;
  
  let arr = []
  let tempField;
  let fields = [
    {nummer: 1, command: "1", action:"start" },
    {nummer: 2, command: "2", action:"empty" },
    {nummer: 3, command: "3", action:"action" },
    {nummer: 4, command: "4", action:"empty" },
    {nummer: 5, command: "5", action:"random" },
    {nummer: 6, command: "6", action:"empty" },
    {nummer: 7, command: "7", action:"action" },
    {nummer: 8, command: "8", action:"empty" },
    {nummer: 9, command: "9", action:"nog beslist worden" },
    {nummer: 10, command: "Q", action:"empty" },
    {nummer: 11, command: "B", action:"action" },
    {nummer: 12, command: "C", action:"empty" },
    {nummer: 13, command: "D", action:"random" },
    {nummer: 14, command: "E", action:"empty" },
    {nummer: 15, command: "F", action:"action" },
    {nummer: 16, command: "G", action:"empty" },
    {nummer: 17, command: "H", action:"spam" },
    {nummer: 18, command: "I", action:"empty" },
    {nummer: 19, command: "J", action:"action" },
    {nummer: 20, command: "L", action:"empty" },
    {nummer: 21, command: "0", action:"random" },
    {nummer: 22, command: "N", action:"empty" },
    {nummer: 23, command: "O", action:"action" },
    {nummer: 24, command: "P", action:"empty" },
    {nummer: 25, command: "A", action:"wifi" },
    {nummer: 26, command: "R", action:"empty" },
    {nummer: 27, command: "S", action:"action" },
    {nummer: 28, command: "T", action:"empty" },
    {nummer: 29, command: "U", action:"random" },
    {nummer: 30, command: "Z", action:"empty" },
    {nummer: 31, command: "Y", action:"action" },
    {nummer: 32, command: "W", action:"empty" },
  ]

  const [gameData, setGameData] = useState(data[0]);
  const [currentPlayer, setCurrentPlayer] = useState(data[0].startingPlayer);
  const [fieldUser, setFieldUser] = useState([1, "start"]);
  const [fieldHacker, setFieldHacker] = useState([1, "start"]);

  const [channel] = useChannel(gamecode, (message) => {
    const data = message.data.split('-');
    console.log("data", data)
    //setCurrentPlayer(data[1].split('=')[1].split(',')[0])
    //setFieldUser([data[1].split('=')[1].split(',')[0], data[1].split('=')[1].split(',')[1]])
    //setFieldHacker([data[O].split('=')[1].split(',')[0], data[0].split('=')[1].split(',')[1]])
  });

  //console.log('player', currentPlayer);
  //console.log('user',fieldUser);
  //console.log('user',fieldHacker);

  //channel.publish({ name: gamecode, data: `hacker=${fieldHacker}-user=${fieldUser}-player=${currentPlayer}` });
  
  const downHandler = ({key}) => {
    arr.push(key);
    const index =   arr.indexOf("X")
    if (index != -1 && arr[index - 1] == "R" && arr[index - 2] == "N" && arr[index - 3] == "K" && arr[index - 4] == "V" && arr[index - 5] == "D" && arr[index - 6] == "R" && arr[index - 7] == "B"){
      tempField = arr[index + 1];
      if (tempField){
        pionDetection(tempField);
        arr = [];
      } 
    } 
  }

  const pionDetection = (tempField) => {
    fields.forEach(element => {
      if (tempField == element.command){
       if (currentPlayer === "user"){
          setFieldUser([element.nummer, element.action])
           //channel.publish({ name: gamecode, data: `hacker=${fieldHacker}-user=${element.nummer, element.action}-player=${currentPlayer}` });
        } else {
          setFieldHacker([element.nummer, element.action])
           channel.publish({ name: gamecode, data: `hacker=${element.nummer},${element.action}-user=${fieldUser}-player=${currentPlayer}` });
        } 
       
      }
    });
  }


  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return (
    <GameLayout>
      <HackerInfo />
      <GameBoard currentField1={fieldUser} currentField2={fieldHacker} player={currentPlayer} />
      <Turn who={"hacker"} />
      <Notes gameData={gameData} player="hacker" />
      <HackerDiscoveries />
      <HackerAction />
      <HackerAd />
      <HackerDecryption />
      <HackerHack />
      <HackerInterests />
      <HackerScreencapture />
      <HackerVpn />
    </GameLayout>
  );
};

export default Hacker;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  const data = await res.json();
  return { props: { data } };
}