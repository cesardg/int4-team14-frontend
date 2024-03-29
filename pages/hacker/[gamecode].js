// components
import GameLayout from "../../components/GameLayout";
import Turn from "../../components/Turn";
import YourTurn from "../../components/YourTurn";
import Notes from "../../components/Notes";
import SpamMail from "../../components/SpamMail";
import Wifi from "../../components/Wifi";
import Spicy from "../../components/Spicy";
import HackerAction from "../../components/Hacker/HackerAction";
import HackerInfo from "../../components/Hacker/HackerInfo";
import HackerDiscoveries from "../../components/Hacker/HackerDiscoveries";
import HackerAd from "../../components/Hacker/HackerAd";
import HackerDecryption from "../../components/Hacker/HackerDecryption";
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
import Draggable from "react-draggable";
import Link from "next/link";
import Image from "next/image";

const Hacker = ({ data }) => {
  // game
  const router = useRouter();
  const gamecode = router.query.gamecode;
  const [gameData, setGameData] = useState(data[0]);
  const [realtimeGameData, setRealtimeGameData] = useState({
    currentPlayer: data[0].startingPlayer,
    fieldUser: data[0].userinfo ? data[0].userinfo.previousfield : 1,
    actionUser: "start",
    fieldHacker: data[0].hackerinfo.previousfield,
    actionHacker: "start",
  });

  // board
  let arr = [];
  let tempField;
  const [windowComponent, setWindowComponent] = useState("");
  const [hackerStart, setHackerStart] = useState(false);
  const [hackerDoubleTurn, setHackerDoubleTurn] = useState(0);
  const [userDoubleTurn, setUserDoubleTurn] = useState(0);
  const [notes, setNotes] = useState(data[0].hackernotes);
  const randomOptions = [
    {
      type: "good",
      action: "get1capital",
      text: "Er is een data-lek bij Facebook.",
      subtext: "Je krijgt 1 hoofdletter uit het wachtwoord",
      button: "Ontvang 1 hoofdletter",
    },
    {
      type: "good",
      action: "get2letters",
      text: "Je ontvangt data van je hackergroep.",
      subtext: "Je krijgt 2 kleine letters uit het wachtwoord",
      button: "Ontvang 2 kleine letters",
    },
    {
      type: "good",
      action: "get2letters",
      text: "Je ontvangt data van je hackergroep.",
      subtext: "Je krijgt 2 kleine letters uit het wachtwoord",
      button: "Ontvang 2 kleine letters",
    },
    {
      type: "good",
      action: "get1number",
      text: "Je leert een nieuw hack-commando.",
      subtext: "Je krijgt 1 cijfer uit het wachtwoord",
      button: "Ontvang 1 cijfer",
    },
    {
      type: "good",
      action: "get2letters",
      text: "Je vindt een oude foto van de user en chanteert hem/haar hiermee.",
      subtext: "Je krijgt 2 kleine letters van het wachtwoord",
      button: "Ontvang 2 kleine letters",
    },
    {
      type: "good",
      action: "get1capital",
      text: "Je vindt het oude Roblox-account van de user en kan het wachtwoord hacken.",
      subtext: "Je krijgt 1 hoofdletter van het wachtwoord",
      button: "Ontvang 1 hoofdletter",
    },
    {
      type: "bad",
      action: "deletediscovery",
      text: "Je botst op een firewall.",
      subtext: "Je laatste ontdekking wordt gewist",
      button: "Verder spelen",
    },
    {
      type: "bad",
      action: "deletediscovery",
      text: "De user surft in incognito-modus en is dus onvindbaar.",
      subtext: "Je laatste ontdekking wordt gewist",
      button: "Verder spelen",
    },
    {
      type: "bad",
      action: "deletediscovery",
      text: "De user is slim genoeg om een slechte advertentie te ontwijken.",
      subtext: "Je laatste ontdekking wordt gewist",
      button: "Verder spelen",
    },
    {
      type: "bad",
      action: "deletediscovery",
      text: "De Federal Computer Crime Unit zit je op de hielen, ze hebben je ontdekkingen gezien.",
      subtext: "Je laatste ontdekking wordt gewist",
      button: "Verder spelen",
    },
    {
      type: "bad",
      action: "deletediscovery",
      text: "Je morst je energiedrankje over je toetsenbord en moet wachten op een nieuwe computer.",
      subtext: "Je laatste ontdekking wordt gewist",
      button: "Verder spelen",
    },
    {
      type: "bad",
      action: "deletediscovery",
      text: "De user heeft al zijn/haar oude Roblox- en Brawl Stars-accounts verwijderd.",
      subtext: "Je laatste ontdekking wordt gewist",
      button: "Verder spelen",
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
    { nummer: 9, command: "9", action: "spicy" },
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
  const [randomOption, setRandomOption] = useState([]);

  // specific logic
  const [hackerDecryptionAction, setHackerDecryptionAction] = useState("");
  const [hackerGuessFeedback, setHackerGuessFeedback] = useState();

  // channel
  const [channel] = useChannel(gamecode, (message) => {
    const type = message.data.split("-")[0];
    console.log("wscall");
    getUpdatedGamedata();

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
        (lastAction === "empty" || lastAction === "start") &&
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
        (lastAction === "empty" || lastAction === "start") &&
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



      // hacker komt op een random vak
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "random"
      ) {
       
        setRandomOption(
          randomOptions[Math.floor(Math.random() * randomOptions.length)]
        );
     
      }

      // hacker komt op een wifi vak
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "wifi"
      ) {
        handlePionOnWifiOrSpicy();
      }

      // hacker komt op het pikante foto
      if (
        realtimeGameData.currentPlayer === "hacker" &&
        newHackerAction === "spicy"
      ) {
        handlePionOnWifiOrSpicy();
      }



      setRealtimeGameData({
        ...realtimeGameData,
        fieldUser: newUserField,
        actionUser: newUserAction,
        fieldHacker: newHackerField,
        actionHacker: newHackerAction,
        currentPlayer: newPlayer,
      });

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

    if (type === "installvpn") {
      setWindowComponent("vpn");
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
      setUserDoubleTurn(1);
      handleHackerVpn();
    }

    if (type === "playerchange") {
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
    }

    if (type === "endgame") {
      router.push(`/hackerend/${gamecode}`);
    }

    if (type === "doubleturn" && realtimeGameData.currentPlayer === "user") {
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
      setHackerDoubleTurn(1);
    }

    if (type === "doubleturn" && realtimeGameData.currentPlayer === "hacker") {
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
      setUserDoubleTurn(1);
    }
  }); // channel einde

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
            data: `boardchange-user-${realtimeGameData.fieldHacker}-done-${element.nummer}-${element.action}-${element.action}`,
          });
        } else if (realtimeGameData.currentPlayer == "hacker") {
          channel.publish({
            name: gamecode,
            data: `boardchange-hacker-${element.nummer}-${element.action}-${realtimeGameData.fieldUser}-done-${element.action}`,
          });
        }
      }
    });
  };

  const handleClickRandom = (value) => {
    setRandomOption([]);
    if (value === "deletediscovery") {
      if (gameData.hackerdiscoveries.length != 0){
      handleDeleteDiscovery();
      }
    } else if (value === "skipturn") {
      channel.publish({
        name: gamecode,
        data: `doubleturn-hacker-user`,
      });
    } else if (
      value === "get2letters" ||
      value === "get1capital" ||
      value === "get1number"
    ) {
      setHackerDecryptionAction(value);
      setWindowComponent("decryption");
      getUpdatedGamedata();
    }

    // double turn checken
    if (hackerDoubleTurn > 0) {
      const turns = hackerDoubleTurn - 1;
      channel.publish({ name: gamecode, data: `playerchange-hacker-hacker` });
      setHackerDoubleTurn(turns);
    } else {
      channel.publish({
        name: gamecode,
        data: `playerchange-hacker-user`,
      });
    }
  };

  const handleClickAction = (action) => {
    if (action === "get interest") {
      hackerGetInterest();
    } else if (action === "send ad") {
      hackerSendAd();
    } else if (
      action === "get2letters" ||
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
      actionHacker: "done",
    });
  };

  const handlePionOnWifiOrSpicy = () => {
    timeout();
    setTimeout(() => {
      setRealtimeGameData({
        ...realtimeGameData,
        actionHacker: "done",
      });
      channel.publish({ name: gamecode, data: `playerchange-hacker-user` });
    }, 7000);
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleHackerVpn = () => {
    timeout();
    setTimeout(() => {
      setWindowComponent("");
    }, 3000);
  };

  const handleDeleteDiscovery = async () => {
    const id =
      gameData.hackerdiscoveries[gameData.hackerdiscoveries.length - 1].id;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/hackerdiscoveries/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("del oke");
      getUpdatedGamedata();
    }
  };

  // logic functions
  const hackerGetInterest = async () => {
    const hackerinfo = await fetchData("hackerinfos", gameData.hackerinfo.id);
    let hackerInterestsArray = [];
    if (hackerinfo.obtainedInterests != null) {
      hackerInterestsArray = hackerinfo.obtainedInterests.split("-");
    }
    const userInterestsArray = gameData.userinfo.interests.split("-");
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

    // double turn checken
    if (hackerDoubleTurn > 0) {
      const turns = hackerDoubleTurn - 1;
      channel.publish({ name: gamecode, data: `playerchange-hacker-hacker` });
      setHackerDoubleTurn(turns);
    } else {
      channel.publish({
        name: gamecode,
        data: `playerchange-hacker-user`,
      });
    }
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
      console.log("put oke");
      getUpdatedGamedata();
    }
  };

  const hackerSendAd = () => {
    setWindowComponent("ad");
  };

  const handleClickAd = (ad) => {
    channel.publish({ name: gamecode, data: `sendad-hacker-${ad}` });
    deleteInterestAdByHacker(ad);
    setHackerDoubleTurn(1);
    setWindowComponent("");
    setRealtimeGameData({
      ...realtimeGameData,
      actionUser: "done",
    });
  };

  const deleteInterestAdByHacker = (ad) => {
    const obtainedInterests = gameData.hackerinfo.obtainedInterests.split("-");
    const index = obtainedInterests.indexOf(ad);
    if (index > -1) {
      obtainedInterests.splice(index, 1);
    }
    let data = null;
    if (obtainedInterests.length === 0) {
      data = { obtainedInterests: null };
    } else {
      data = { obtainedInterests: obtainedInterests.join("-") };
    }
    sendDataToHacker(data);
  };

  const handleFormGuessPass = (e) => {
    e.preventDefault();
    if (e.target.hackpass.value == gameData.userinfo.password) {
      putData("hackerinfos", gameData.hackerinfo.id, {
        latestguess: e.target.hackpass.value,
      });
      setHackerGuessFeedback("");
      putData("games", gameData.id, { winner: "hacker" });
      channel.publish({
        name: gamecode,
        data: `endgame-hacker-user`,
      });
    } else {
      setHackerStart(false);
      setHackerGuessFeedback("het wachtwoord is niet juist!");
      putData("hackerinfos", gameData.hackerinfo.id, {
        latestguess: e.target.hackpass.value,
      });
    }
    timeout();
    setTimeout(() => {
     setHackerGuessFeedback("")
    }, 5000);
  };

  const handleClickSpamMail = (reaction) => {
    if (reaction === "bad") {
          if (gameData.hackerdiscoveries.length != 0){
      handleDeleteDiscovery();
      }
    }
    channel.publish({
      name: gamecode,
      data: `playerchange-hacker-user`,
    });
  };

  const handleClickScreencatpure = () => {
    setWindowComponent("");
    // double turn checken
    if (hackerDoubleTurn > 0) {
      const turns = hackerDoubleTurn - 1;
      channel.publish({ name: gamecode, data: `playerchange-hacker-hacker` });
      setHackerDoubleTurn(turns);
    } else {
      channel.publish({
        name: gamecode,
        data: `playerchange-hacker-user`,
      });
    }
  };

  const handleUpdatedDiscoveries = async (gameData, discovery) => {
    if (discovery) {
      const data = {
        discovery: discovery,
        game: gameData,
      };
      await postData("hackerdiscoveries", data);
    }
    setHackerDecryptionAction("");
    setWindowComponent("");
    getUpdatedGamedata();
    // double turn checken
    if (hackerDoubleTurn > 0) {
      const turns = hackerDoubleTurn - 1;
      channel.publish({ name: gamecode, data: `playerchange-hacker-hacker` });
      setHackerDoubleTurn(turns);
    } else {
      channel.publish({
        name: gamecode,
        data: `playerchange-hacker-user`,
      });
    }
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
        console.log("post oke");
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
      console.log("post oke");
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
      console.log("put oke");
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
    <GameLayout
      style="hacker"
      vpnIcon={"nvt"}
      realtimeGameData={realtimeGameData}
    >
      <div className={styles.hackerInfo}>
        <HackerInfo hackerinfo={gameData.hackerinfo}  option={randomOption}/>
      </div>
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker !== "action" &&
      realtimeGameData.actionHacker !== "random" &&
      realtimeGameData.actionHacker !== "" &&
      realtimeGameData.actionHacker !== "wifi" &&
      realtimeGameData.actionHacker !== "spam" ? (
      <Draggable handle="strong">
        <div className={styles.yourturn}>
          <YourTurn />
        </div>
      </Draggable>
      ) : (
        ""
      )}
      {realtimeGameData.currentPlayer === "user" ? (
      <Draggable handle="strong">
        <div className={styles.turn}>
          <Turn who={realtimeGameData.currentPlayer} pic={gameData.userinfo ? gameData.userinfo.picture : "pf1" }/>
        </div>
      </Draggable>  
      ) : (
        ""
      )}

      <Draggable handle="strong">
        <div className={styles.notes}>
          <Notes
            notes={notes}
            player="hacker"
            handleFormSubmission={(e) => handleFormSubmissionNotes(e)}
          />
        </div>
      </Draggable>

      <Draggable handle="strong">
        <div className={styles.discoveries}>
          <HackerDiscoveries gameData={gameData} />
        </div>
      </Draggable>

      {realtimeGameData.currentPlayer === "hacker" ? (
        <Draggable handle="strong">
          <div className={styles.hack}>
            <HackerHack
              handleSubmitForm={(value) => handleFormGuessPass(value)}
              feedback={hackerGuessFeedback}
              start={hackerStart}
            />
          </div>
        </Draggable>
      ) : (
        ""
      )}

      {windowComponent === "screencapture" ? (
        <div className={styles.screencapture}>
          <HackerScreencapture
            gameData={gameData}
            handleClickScreencatpure={handleClickScreencatpure}
          />
        </div>
      ) : (
        ""
      )}

      {/* acties */}
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "action" ? (
        <div className={styles.action}>
          <HackerAction
            onClickButton={(action) => handleClickAction(action)}
            start={hackerStart}
            ads={gameData.hackerinfo.obtainedInterests !== null ? true : false}
          />
        </div>
      ) : (
        ""
      )}

      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "random" ? (
        <div className={styles.random}>
          <HackerRandom
            randomCard={randomOption}
            onClickButton={(value) => handleClickRandom(value)}
          />
        </div>
      ) : (
        ""
      )}
      {windowComponent === "ad" ? (
        <div className={styles.hackerAd}>
          <HackerAd
            gameData={gameData}
            onClickButton={(value) => handleClickAd(value)}
            start={hackerStart}
          />
        </div>
      ) : (
        ""
      )}

      {windowComponent === "vpn" ? (
        <div className={styles.hackerVpn}>
          <HackerVpn />{" "}
        </div>
      ) : (
        ""
      )}

      {windowComponent === "decryption" ? (
        <div className={styles.decryption}>
          <HackerDecryption
            gameData={gameData}
            handleUpdatedDiscoveries={(gameData, discovery) =>
              handleUpdatedDiscoveries(gameData, discovery)
            }
            action={hackerDecryptionAction}
          />
        </div>
      ) : (
        ""
      )}
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "spam" ? (
        <div className={styles.spammail}>
          <SpamMail
            player="hacker"
            playerinfo={gameData.hackerinfo}
            handleClickSpamMail={(reaction) => handleClickSpamMail(reaction)}
          />
        </div>
      ) : (
        ""
      )}
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "wifi" ? (
        <div className={styles.wifi}>
          <Wifi />
        </div>
      ) : (
        ""
      )}
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "spicy" ? (
        <div className={styles.spicy}>
          <Spicy />
        </div>
      ) : (
        ""
      )}
      <div className={styles.rules} >
       <Link href={`/spelregels?tab=new`}>
          <a target="_blank">      
            <Image
              src={`/assets/img/rulesicon.svg`}
              alt="Picture of the user"
              width={120}
              height={80}
            />
            <p className={styles.nav}>spelregels</p>
         </a>
        </Link>
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
