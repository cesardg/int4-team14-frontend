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
import HackerRandom from '../../components/Hacker/HackerRandom';

const Hacker = ({ data }) => {
  const router = useRouter();
  const gamecode = router.query.gamecode;
  
  let arr = []
  let tempField;

  const randomOptions= [
    {type: "good", action: "1hoofdletter", text: "Er is een data-lek bij Facebook. Je krijgt 1 hoofdletter uit het wachtwoord"},
    {type: "good", action: "2kleineletters", text: "Je ontvangt data van je hackergroep. Je krijgt 2 kleine letters uit het wachtwoord"},
    {type: "good", action: "2kleineletters", text: "Je ontvangt data van je hackergroep. Je krijgt 2 kleine letters uit het wachtwoord"},
    {type: "good", action: "1cijfer", text: "Je leert een nieuw hack-commando. Je krijgt 1 cijfer uit het wachtwoord"},
    {type: "good", action: "2kleineletters", text: "Je vindt een oude foto van de user en chanteert hem/haar hiermee. Je krijgt 2 kleine letters van het wachtwoord"},
    {type: "good", action: "1hoofdletter", text: "Je vindt het oude Roblox-account van de user en kan het wachtwoord hacken. Je krijgt 1 hoofdletter van het wachtwoord"},
    {type: "bad", action: "beurtoverlsaan", text: "Je botst op een firewall. Sla een beurt over"},
    {type: "bad", action: "notitiegewist", text: "De user surft in incognito-modus en is dus onvindbaar. Sla een beurt over"},
    {type: "bad", action: "beurtoverlsaan", text: "De user is slim genoeg om een slechte advertentie te ontwijken. Sla een beurt over"},
    {type: "bad", action: "notitiegewist", text:  "De Federal Computer Crime Unit zit je op de hielen, ze hebben je notities gezien. Je laatste notitie wordt gewist"},
    {type: "bad", action: "beurtoverlsaan", text: "Je morst je energiedrankje over je toetsenbord en moet wachten op een nieuwe computer. Sla een beurt over"},
    {type: "bad", action: "notitiegewist", text: "De user heeft al zijn/haar oude Roblox- en Brawl Stars-accounts verwijderd. Je laatste notitie wordt gewist"}
  ]

  const fields = [
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
  const [realtimeGameData, setRealtimeGameData] = useState({currentPlayer: data[0].startingPlayer, fieldUser: 1, actionUser: "start", fieldHacker: 1, actionHacker: "start"})
  const [randomOption, setRandomOption] = useState(randomOptions[Math.floor(Math.random() * randomOptions.length)]);

  const [channel] = useChannel(gamecode, (message) => {
    const type = message.data.split('-')[0];

    if (type === "boardchange"){
      const sender = message.data.split('-')[1];
      const newHackerField = message.data.split('-')[2];
      const newHackerAction = message.data.split('-')[3];
      const newUserField = message.data.split('-')[4];
      const newUserAction = message.data.split('-')[5];
      const lastAction = message.data.split('-')[6];
      let newUser = realtimeGameData.currentPlayer;

      // player veranderen bij empty 
      if (lastAction === "empty" && realtimeGameData.currentPlayer === "hacker"){
        newUser = "user"
      } else if (lastAction === "empty" && realtimeGameData.currentPlayer === "user"){
        newUser = "hacker"
      }
      
      // hacker komt op een random vak
      if (realtimeGameData.currentPlayer === "hacker" &&  realtimeGameData.actionHacker === "random"){
        setRandomOption(randomOptions[Math.floor(Math.random() * randomOptions.length)]);
      }

      setRealtimeGameData({
        ...realtimeGameData,
        fieldUser: newUserField, actionUser: newUserAction, fieldHacker: newHackerField, actionHacker: newHackerAction, currentPlayer: newUser
      })
    }

    if (type === "playerchange"){
      console.log("from hacker:", message.data)
      setRealtimeGameData({
        ...realtimeGameData,
       currentPlayer: message.data.split('-')[2]
      })
    }

  });

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
       if (realtimeGameData.currentPlayer == "user"){
          channel.publish({ name: gamecode, data: `boardchange-user-${realtimeGameData.fieldHacker}-${realtimeGameData.actionHacker}-${element.nummer}-${element.action}-${element.action}` });
        } else if (realtimeGameData.currentPlayer == "hacker") {
          channel.publish({ name: gamecode, data: `boardchange-hacker-${element.nummer}-${element.action}-${realtimeGameData.fieldUser}-${realtimeGameData.actionUser}-${element.action}` });
        } 
      }
    });
  }

  const handleClickRandom = (value) => {
    console.log("random is oke")
    console.log(value)
    channel.publish({ name: gamecode, data: `playerchange-hacker-user` });
  }

  const handleClickAction = (action) => {
    console.log("actie is oke", action)
    if (action === "get interest"){
      hackerGetInterest();
    }
  }

  const fetchData = async () => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/hackerinfos/?id=${gameData.hackerinfo.id}`);
    const res = await req.json();
    return res[0];
  };


  const hackerGetInterest = async () => {
    const obtainedInterests = await fetchData();
    console.log(obtainedInterests.obtainedInterests)
    const userInterests = gameData.userinfo.interests.split('-');
    userInterests.shift()
    console.log(userInterests);
    const data = {
      obtainedInterests: userInterests[1],
    };

    sendData(data)
  }

  const sendData = async (data) => {
    console.log(data)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/hackerinfos/${gameData.hackerinfo.id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("joepie")
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [realtimeGameData]);

  return (
    <GameLayout>
       <h1 className="title">Hacker</h1>
      <GameBoard boardInfo={realtimeGameData}/>
      <HackerInfo />
      <Turn who={realtimeGameData.currentPlayer} />
      <Notes gameData={gameData} player="hacker" />
      <HackerDiscoveries gameData={gameData} />
      {realtimeGameData.currentPlayer === "hacker" && realtimeGameData.actionHacker === "action" ?  <HackerAction onClickButton={(value) => handleClickAction(value)} /> : ""}
      <HackerAd />
      <HackerDecryption />
      <HackerHack />
      <HackerInterests />
      <HackerScreencapture />
      <HackerVpn />
       {realtimeGameData.currentPlayer === "hacker" && realtimeGameData.actionHacker === "random" ? <HackerRandom randomCard={randomOption}  onClickButton={(value) => handleClickRandom(value)} /> : ""}
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