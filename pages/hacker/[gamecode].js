// components
import GameLayout from "../../components/GameLayout";
import Turn from "../../components/Turn";
import Notes from "../../components/Notes";
import GameBoard from "../../components/GameBoard";
import HackerAction from "../../components/Hacker/HackerAction";
import HackerInfo from "../../components/Hacker/HackerInfo";
import HackerDiscoveries from "../../components/Hacker/HackerDiscoveries";
import HackerAd from "../../components/Hacker/HackerAd";
import HackerDecryption from "../../components/Hacker/HackerDecryption";
import HackerInterests from "../../components/Hacker/HackerInterests";
import HackerScreencapture from "../../components/Hacker/HackerScreencapture";
import HackerVpn from "../../components/Hacker/HackerVpn";
import HackerHack from "../../components/Hacker/HackerHack";
import { useChannel } from "../../components/ChatReactEffect";
import HackerRandom from "../../components/Hacker/HackerRandom";
// styling
import styles from "./../../components/GameLayout.module.css";
// imports
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Hacker = ({ data }) => {
  // game
  const router = useRouter();
  const gamecode = router.query.gamecode;
  const [gameData, setGameData] = useState(data[0]);
  const [realtimeGameData, setRealtimeGameData] = useState({
    currentPlayer: data[0].startingPlayer,
    fieldUser: 1,
    actionUser: "start",
    fieldHacker: 1,
    actionHacker: "start",
  });

  // board
  let arr = [];
  let tempField;
  const [windowComponent, setWindowComponent] = useState("");
  const [hackerStart, setHackerStart] = useState(false);
  const [hackerDoubleTurn, setHackerDoubleTurn] = useState(0);
  const [userDoubleTurn, setUserDoubleTurn] = useState(0);
  const [notes, setNotes] = useState(data[0].usernotes);
  const randomOptions = [
    {
      type: "good",
      action: "1hoofdletter",
      text: "Er is een data-lek bij Facebook.",
      subtext: "Je krijgt 1 hoofdletter uit het wachtwoord",
      button: "Ontvang 1 hoofdletter",
    },
    {
      type: "good",
      action: "2kleineletters",
      text: "Je ontvangt data van je hackergroep.",
      subtext: "Je krijgt 2 kleine letters uit het wachtwoord",
      button: "Ontvang 2 kleine letters",
    },
    {
      type: "good",
      action: "2kleineletters",
      text: "Je ontvangt data van je hackergroep.",
      subtext: "Je krijgt 2 kleine letters uit het wachtwoord",
      button: "Ontvang 2 kleine letters",
    },
    {
      type: "good",
      action: "1cijfer",
      text: "Je leert een nieuw hack-commando.",
      subtext: "Je krijgt 1 cijfer uit het wachtwoord",
      button: "Ontvang 1 cijfer",
    },
    {
      type: "good",
      action: "2kleineletters",
      text: "Je vindt een oude foto van de user en chanteert hem/haar hiermee.",
      subtext: "Je krijgt 2 kleine letters van het wachtwoord",
      button: "Ontvang 2 kleine letters",
    },
    {
      type: "good",
      action: "1hoofdletter",
      text: "Je vindt het oude Roblox-account van de user en kan het wachtwoord hacken.",
      subtext: "Je krijgt 1 hoofdletter van het wachtwoord",
      button: "Ontvang 1 hoofdletter",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "Je botst op een firewall.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "notitiegewist",
      text: "De user surft in incognito-modus en is dus onvindbaar.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "De user is slim genoeg om een slechte advertentie te ontwijken.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "notitiegewist",
      text: "De Federal Computer Crime Unit zit je op de hielen, ze hebben je notities gezien.",
      subtext: "Je laatste notitie wordt gewist",
      button: "Oke",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "Je morst je energiedrankje over je toetsenbord en moet wachten op een nieuwe computer.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "notitiegewist",
      text: "De user heeft al zijn/haar oude Roblox- en Brawl Stars-accounts verwijderd.",
      subtext: "Je laatste notitie wordt gewist",
      button: "Oke",
    },
  ];
  const fields = [
    { nummer: 1, command: "1", action: "start" },
    { nummer: 2, command: "2", action: "empty" },
    { nummer: 3, command: "3", action: "action" },
    { nummer: 4, command: "4", action: "empty" },
    { nummer: 5, command: "5", action: "random" },
    { nummer: 6, command: "6", action: "empty" },
    { nummer: 7, command: "7", action: "action" },
    { nummer: 8, command: "8", action: "empty" },
    { nummer: 9, command: "9", action: "nog beslist worden" },
    { nummer: 10, command: "Q", action: "empty" },
    { nummer: 11, command: "B", action: "action" },
    { nummer: 12, command: "C", action: "empty" },
    { nummer: 13, command: "D", action: "random" },
    { nummer: 14, command: "E", action: "empty" },
    { nummer: 15, command: "F", action: "action" },
    { nummer: 16, command: "G", action: "empty" },
    { nummer: 17, command: "H", action: "spam" },
    { nummer: 18, command: "I", action: "empty" },
    { nummer: 19, command: "J", action: "action" },
    { nummer: 20, command: "L", action: "empty" },
    { nummer: 21, command: "0", action: "random" },
    { nummer: 22, command: "N", action: "empty" },
    { nummer: 23, command: "O", action: "action" },
    { nummer: 24, command: "P", action: "empty" },
    { nummer: 25, command: "A", action: "wifi" },
    { nummer: 26, command: "R", action: "empty" },
    { nummer: 27, command: "S", action: "action" },
    { nummer: 28, command: "T", action: "empty" },
    { nummer: 29, command: "U", action: "random" },
    { nummer: 30, command: "Z", action: "empty" },
    { nummer: 31, command: "Y", action: "action" },
    { nummer: 32, command: "W", action: "empty" },
  ];
  const [randomOption, setRandomOption] = useState(
    randomOptions[Math.floor(Math.random() * randomOptions.length)]
  );

  // specific logic
  const [hackerDecryptionAction, setHackerDecryptionAction] = useState("");
  const [hackerGuessFeedback, setHackerGuessFeedback] = useState();

  // channel
  const [channel] = useChannel(gamecode, (message) => {
    const type = message.data.split("-")[0];

    if (type === "boardchange") {
      const newHackerField = message.data.split("-")[2];
      const newHackerAction = message.data.split("-")[3];
      const newUserField = message.data.split("-")[4];
      const newUserAction = message.data.split("-")[5];
      const lastAction = message.data.split("-")[6];
      let newPlayer = realtimeGameData.currentPlayer;

      // start passeren
      const checkPreviousField = async () => {
        const data = await fetchData("hackerinfos", gameData.hackerinfo.id);
        if (data.previousfield > 26 && newHackerField < 6) {
          setHackerStart(true);
        }
      };
      checkPreviousField();

      putData("hackerinfos", gameData.hackerinfo.id, {
        previousfield: newHackerField,
      });

      // player veranderen bij empty
      if (
        lastAction === "empty" &&
        realtimeGameData.currentPlayer === "hacker"
      ) {
        if (hackerDoubleTurn > 0) {
          newPlayer = "hacker";
          const turns = hackerDoubleTurn - 1;
          channel.publish({
            name: gamecode,
            data: `playerchange-hacker-hacker`,
          });
          setHackerDoubleTurn(turns);
        } else {
          newPlayer = "user";
        }
      } else if (
        lastAction === "empty" &&
        realtimeGameData.currentPlayer === "user"
      ) {
        if (userDoubleTurn > 0) {
          newPlayer = "user";
          const turns = userDoubleTurn - 1;
          channel.publish({ name: gamecode, data: `playerchange-user-user` });
          setUserDoubleTurn(turns);
        } else {
          newPlayer = "hacker";
        }
      }

      // hacker komt op een actie vak
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "action"
      ) {
        console.log("de hacker staat op een actievak, dit moet er gebeuren:");
      }

      // hacker komt op een random vak
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "random"
      ) {
        console.log("de hacker staat op een random vak, dit moet er gebeuren");
        setRandomOption(
          randomOptions[Math.floor(Math.random() * randomOptions.length)]
        );
        // setWindowComponent("random");
      }

      // hacker komt op een wifi vak
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "wifi"
      ) {
        console.log("de hacker staat op een wifi vakje, dit moet er gebeuren:");
      }

      // hacker komt op het pikante foto
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "pikant"
      ) {
        console.log(
          "de hacker staat op het pikante vakje, dit moet er gebeuren:"
        );
      }

      // hacker komt op het pikante foto
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "spam"
      ) {
        console.log("de hacker staat op het spamvakje, dit moet er gebeuren:");
      }

      // hacker komt een empty vak
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "empty"
      ) {
        console.log("de hacker staat op een empty vak, dit moet er gebeuren");
      }

      // if (
      //   realtimeGameData.currentPlayer === "hacker" &&
      //   realtimeGameData.actionHacker === "action"
      // ) {
      //   setWindowComponent("action");
      // }

      setRealtimeGameData({
        ...realtimeGameData,
        fieldUser: newUserField,
        actionUser: newUserAction,
        fieldHacker: newHackerField,
        actionHacker: newHackerAction,
        currentPlayer: newPlayer,
      });

      console.log("hacker realtime", realtimeGameData.actionHacker);
    }

    //updaten als de user is ingelogt
    if (type === "updatedata") {
      console.log("user logt in , hier moet data updaten", message.data);
      getUpdatedGamedata();
    }

    //user delete cookies, dus moet hier ook aangepast worden
    if (type === "deletecookies") {
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
      getUpdatedGamedata();
    }

    if (type === "playerchange") {
      console.log("from hacker:", message.data);
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
    }
  });

  // check board input
  const downHandler = ({ key }) => {
    arr.push(key);
    const index = arr.indexOf("X");
    if (
      index != -1 &&
      arr[index - 1] == "R"
      // // arr[index - 2] == "N" &&
      // // arr[index - 3] == "K" &&
      // // arr[index - 4] == "V" &&
      // // arr[index - 5] == "D" &&
      // arr[index - 6] == "R" &&
      // arr[index - 7] == "B"
    ) {
      tempField = arr[index + 1];
      if (tempField) {
        pionDetection(tempField);
        arr = [];
      }
    }
  };

  const pionDetection = (tempField) => {
    fields.forEach((element) => {
      if (tempField == element.command) {
        if (realtimeGameData.currentPlayer == "user") {
          channel.publish({
            name: gamecode,
            data: `boardchange-user-${realtimeGameData.fieldHacker}-${realtimeGameData.actionHacker}-${element.nummer}-${element.action}-${element.action}`,
          });
        } else if (realtimeGameData.currentPlayer == "hacker") {
          channel.publish({
            name: gamecode,
            data: `boardchange-hacker-${element.nummer}-${element.action}-${realtimeGameData.fieldUser}-${realtimeGameData.actionUser}-${element.action}`,
          });
        }
      }
    });
  };

  const handleClickRandom = (value) => {
    channel.publish({ name: gamecode, data: `playerchange-hacker-user` });
  };

  const handleClickAction = (action) => {
    if (action === "get interest") {
      hackerGetInterest();
    } else if (action === "send ad") {
      hackerSendAd();
    } else if (
      action === "get2characters" ||
      action === "get1capital" ||
      action === "get1number"
    ) {
      getUpdatedGamedata();
      setHackerDecryptionAction(action);
      setWindowComponent("decryption");
    } else if (action === "screencapture") {
      setWindowComponent("screencapture");
    }
    setRealtimeGameData({
      ...realtimeGameData,
      actionHacker: "",
    });
  };

  // logic functions
  const hackerGetInterest = async () => {
    const obtainedInterests = await fetchData(
      "hackerinfos",
      gameData.hackerinfo.id
    );
    const hackerInterestsArray = obtainedInterests.obtainedInterests.split("-");
    const userInterestsArray = gameData.userinfo.interests.split("-");
    userInterestsArray.shift();
    let newInterest = [];
    userInterestsArray.forEach((element) => {
      if (!hackerInterestsArray.includes(element)) newInterest.push(element);
    });
    const latest = newInterest.shift();
    hackerInterestsArray.push(latest);
    const string = hackerInterestsArray.join("-");
    const data = { obtainedInterests: string };
    if (latest) {
      sendDataToHacker(data);
    }
    channel.publish({
      name: gamecode,
      data: `playerchange-hacker-user`,
    });
  };

  const sendDataToHacker = async (data) => {
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
      console.log("joepie");
      getUpdatedGamedata();
    }
  };

  const hackerSendAd = () => {
    setWindowComponent("ad");
  };

  const handleClickAd = (ad) => {
    channel.publish({ name: gamecode, data: `sendad-hacker-${ad}` });
    deleteInterestAdByHacker(ad);
    setHackerDoubleTurn(2);
  };

  const deleteInterestAdByHacker = (ad) => {
    const obtainedInterests = gameData.hackerinfo.obtainedInterests.split("-");
    const index = obtainedInterests.indexOf(ad);
    if (index > -1) {
      obtainedInterests.splice(index, 1);
    }
    const string = obtainedInterests.join("-");
    const data = { obtainedInterests: string };
    sendDataToHacker(data);
  };

  const handleFormGuessPass = (e) => {
    e.preventDefault();
    if (e.target.hackpass.value == gameData.userinfo.password) {
      setHackerGuessFeedback("het is juist, de hacker heeft gewonnen");
    } else {
      setHackerGuessFeedback("het paswoord is niet juist!");
      setHackerStart(false);
    }
  };

  const handleUpdatedDiscoveries = async (gameData, discovery) => {
    const data = {
      discovery: discovery,
      game: gameData,
    };
    await postData("hackerdiscoveries", data);
    setHackerDecryptionAction("");
    setWindowComponent("");
    getUpdatedGamedata();
    channel.publish({ name: gamecode, data: `playerchange-hacker-user` });
  };

  const handleFormSubmissionNotes = async (e) => {
    e.preventDefault();
    if (e.target.note.value !== "") {
      const copyArr = [...notes, { note: e.target.note.value }];
      setNotes(copyArr);
      const data = {
        note: e.target.note.value,
        game: gameData.id,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/hackernotes`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("joepie");
      }
      e.target.reset();
    }
  };

  // general functions to fetch data
  const fetchData = async (collection, id) => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/${collection}/?id=${id}`
    );
    const res = await req.json();
    return res[0];
  };

  const postData = async (collection, data) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/${collection}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("joepie");
    }
  };

  const putData = async (collection, id, data) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/${collection}/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("put data joepie");
    }
  };

  const getUpdatedGamedata = async () => {
    const updatedGameData = await fetchData("games", gameData.id);
    setGameData(updatedGameData);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [realtimeGameData]);

  return (
    <GameLayout>
      <div className={styles.gameboard}>
        <GameBoard boardInfo={realtimeGameData} />
      </div>
      <div className={styles.hackerInfo}>
        <HackerInfo hackerinfo={gameData.hackerinfo} />
      </div>
     
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
};
