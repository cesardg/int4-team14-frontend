import GameLayout from "../../components/GameLayout";
import Turn from "../../components/Turn";
import Notes from "../../components/Notes";
import GameBoard from "../../components/GameBoard";
import UserInfo from "../../components/User/UserInfo";
import UserWarning from "../../components/User/UserWarning";
import UserAccountStrongness from "../../components/User/UserAccountStrongness";
import UserVpn from "../../components/User/UserVpn";
import UserAction from "../../components/User/UserAction";
import UserDeleteCookies from "../../components/User/UserDeleteCookies";
import UserWarningMail from "../../components/User/UserWarningMail";
import UserAdjustPassword from "../../components/User/UserAdjustPassword";
import UserAd from "../../components/User/UserAd";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useChannel } from '../../components/ChatReactEffect';

const User = ({ data }) => {

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
  const [realtimeGameData, setRealtimeGameData] = useState({currentPlayer: data[0].startingPlayer, fieldUser: 1, actionUser: "start", fieldHacker: 1, actionHacker: "start"})

  const [channel] = useChannel(gamecode, (message) => {
    const type = message.data.split('-')[0];
    if (type === "boardchange"){
      const sender = message.data.split('-')[1];
      const newHackerField = message.data.split('-')[2];
      const newHackerAction = message.data.split('-')[3];
      const newUserField = message.data.split('-')[4];
      const newUserAction = message.data.split('-')[5];
      const lastAction = message.data.split('-')[6];
      let newUser = realtimeGameData.currentPlayer
      if (lastAction === "empty" && realtimeGameData.currentPlayer === "hacker"){
        newUser = "user"
      } else if (lastAction === "empty" && realtimeGameData.currentPlayer === "user"){
        newUser = "hacker"
      }
      //console.log(type, sender, newHackerField, newHackerAction, newUserField, newUserAction)
      setRealtimeGameData({
        ...realtimeGameData,
        fieldUser: newUserField, actionUser: newUserAction, fieldHacker: newHackerField, actionHacker: newHackerAction, currentPlayer: newUser
      })
    }
  });

  console.log(realtimeGameData)

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

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return (
    <>
      <GameLayout>
        <h1 className="title">Us3r</h1>
        <GameBoard boardInfo={realtimeGameData}/>
        <UserInfo userinfo={gameData.userinfo} />
        <Turn who={realtimeGameData.currentPlayer} />
        <UserWarning />
        <Notes gameData={gameData} player="user" />
        <UserAccountStrongness />
        <UserVpn />
        {realtimeGameData.currentPlayer === "user" && realtimeGameData.actionUser === "action" ?<UserAction /> : ""}
        <UserDeleteCookies />
        <UserWarningMail />
        <UserAdjustPassword gameData={gameData} action={"add1capital"} />
        <UserAd />
      </GameLayout>
    </>
  );
};

export default User;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  const data = await res.json();
  return { props: { data } };
};
