// components
import GameLayout from "../../components/GameLayout";
import Turn from "../../components/Turn";
import YourTurn from "../../components/YourTurn";
import Notes from "../../components/Notes";
import SpamMail from "../../components/SpamMail";
import Wifi from "../../components/Wifi";
import Spicy from "../../components/Spicy";
import GameBoard from "../../components/GameBoard";
import UserInfo from "../../components/User/UserInfo";
import UserAccountStrongness from "../../components/User/UserAccountStrongness";
import UserInstallsVpn from "../../components/User/UserInstallsVpn";
import UserAction from "../../components/User/UserAction";
import UserDeleteCookies from "../../components/User/UserDeleteCookies";
import UserWarningMail from "../../components/User/UserWarningMail";
import UserAdjustPassword from "../../components/User/UserAdjustPassword";
import UserAd from "../../components/User/UserAd";
import PopupInfo from "../../components/PopupInfo";
import { useChannel } from "../../components/ChatReactEffect";
import UserRandom from "../../components/User/UserRandom";
// styling
import styles from "./../../components/GameLayout.module.css";
// imports
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Draggable from "react-draggable";

const User = ({ data }) => {
  // game
  const router = useRouter();
  const gamecode = router.query.gamecode;
  const [gameData, setGameData] = useState(data[0]);
  const [realtimeGameData, setRealtimeGameData] = useState({
    currentPlayer: data[0].startingPlayer,
    fieldUser: data[0].userinfo.previousfield,
    actionUser: "start",
    fieldHacker: data[0].hackerinfo ? data[0].hackerinfo.previousfield : 1,
    actionHacker: "start",
  });

  // board
  let arr = [];
  let tempField;
  const [windowComponent, setWindowComponent] = useState("");
  const [userStart, setUserStart] = useState(false);
  const [userDoubleTurn, setUserDoubleTurn] = useState(0);
  const [hackerDoubleTurn, setHackerDoubleTurn] = useState(0);
  const [notes, setNotes] = useState(data[0].usernotes);
  const [vpnIcon, setVpnIcon] = useState(false);
  const randomOptions = [
    {
      type: "good",
      action: "add2letters",
      text: "Je hebt je account op privé gezet.",
      subtext: "Voeg 2 extra letters toe aan je wachtwoord",
      button: "Voeg 2 letters toe",
    },
    {
      type: "good",
      action: "change1number",
      text: "Je gebruikt een veilige internetbrowser zoals DuckDuckGo in plaats van Google.",
      subtext: "Verander 1 kleine letter in een cijfer",
      button: "Verander een letter",
    },
    {
      type: "good",
      action: "add2letters",
      text: "Je hebt je locatie uitgezet, zo kunnen hackers je locatie niet volgen.",
      subtext: "Voeg 2 extra letters toe aan je wachtwoord",
      button: "Voeg 2 letters toe",
    },
    {
      type: "good",
      action: "change1capital",
      text: "Je hebt een antivirus-scanner gedownload om je computer extra te beveiligen.",
      subtext: "Verander 1 kleine letter in een hoofdletter",
      button: "Verander een letter",
    },
    {
      type: "good",
      action: "change1number",
      text: "Je gebruikt de incognito-modus om te surfen.",
      subtext: "Verander 1 kleine letter in een cijfer",
      button: "Verander een letter",
    },
    {
      type: "good",
      action: "change1capital",
      text: "Je hebt een webcam-cover over je webcam geplaatst.",
      subtext: "Verander 1 kleine letter in een hoofdletter",
      button: "Verander een letter",
    },
    {
      type: "bad",
      action: "removechar",
      text: "Je hebt je niet uitgelogd op de computer van de bib.",
      subtext: "Je verliest 1 karater uit je wachtwoord",
      button: "Verder spelen",
    },
    {
      type: "bad",
      action: "skipturn",
      text: "Je raakt afgeleid door een complot-theorie op het internet.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "skipturn",
      text: "Je bent verdwaald tussen alle vreemde YouTube-filmpjes waardoor je nu alleen nog teenkaas-filmpjes te zien krijgt.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "skipturn",
      text: "De hacker ontdekt je oude Roblox-account en gebruikt dit om extra info over jou te ontdekken.",
      subtext: "Sla een beurt over",
      button: "Oke",
    },
    {
      type: "bad",
      action: "removechar",
      text: "Je probeert Minecraft te downloaden op een verdachte website, hierdoor heb je een virus.",
      subtext: "Je verliest 1 karater uit je wachtwoord",
      button: "Oke",
    },
    {
      type: "bad",
      action: "skipturn",
      text: "Je probeert gratis muziek te downloaden op een verdachte website, hierdoor loopt je computer vast.",
      subtext: "Sla een beurt over",
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
  const [userPasswordAction, setUserPasswordAction] = useState("");
  const [receiveAdFromHacker, setReceiveAdFromHacker] = useState(false);
  const [accountStrongness, setAccountStrongness] = useState(
    data[0].userinfo.score
  );

  // channel
  const [channel] = useChannel(gamecode, (message) => {
    const type = message.data.split("-")[0];
    console.log("ably?");
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
        const data = await fetchData("userinfos", gameData.userinfo.id);
        if (data.previousfield > 26 && newUserField < 6) {
          setUserStart(true);
        }
      };
      checkPreviousField();

      putData("userinfos", gameData.userinfo.id, {
        previousfield: newUserField,
      });

      // player veraderen bij empty
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
          setVpnIcon(false);
          newPlayer = "hacker";
        }
      }

      // user komt op een wifi vakk
      if (
        realtimeGameData.currentPlayer === "user" &&
        newUserAction === "action"
      ) {
        console.log("de user staat op een actie, dit moet er gebeuren:");
      }

      // user komt op een random vak
      if (
        realtimeGameData.currentPlayer === "user" &&
        newUserAction === "random"
      ) {
        console.log("de user staat op een random vak");
        setRandomOption(
          randomOptions[Math.floor(Math.random() * randomOptions.length)]
        );
        // setWindowComponent("random");
      }

      // user komt op een wifi vak
      if (
        realtimeGameData.currentPlayer === "user" &&
        newUserAction === "wifi"
      ) {
        console.log("de user staat op een Wifi vakje, dit moet er gebeuren:");
        handlePionOnWifiOrSpicy();
      }

      // user komt op het pikante foto
      if (
        realtimeGameData.currentPlayer === "user" &&
        newUserAction === "spicy"
      ) {
        handlePionOnWifiOrSpicy();
      }

      // user komt op het spam vakje
      if (
        realtimeGameData.currentPlayer === "user" &&
        newUserAction === "spam"
      ) {
        console.log("de user staat op het spamvakje, dit moet er gebeuren:");
      }

      // user komt een empty vak
      if (
        realtimeGameData.currentPlayer === "user" &&
        newUserAction === "empty"
      ) {
        console.log("de user staat op een empty vak, dit moet er gebeuren");
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

    if (type === "playerchange") {
      console.log("from user:", message.data);
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
    }

    if (type === "sendad") {
      console.log(
        "de ad van de hacker is toegekomen bij de user, onderwerp:",
        message.data.split("-")[2]
      );
      setReceiveAdFromHacker(message.data.split("-")[2]);
    }

    //updaten als de hacker is ingelogt
    if (type === "updatedata") {
      console.log("hacker in , hier moet data updaten", message.data);
      getUpdatedGamedata();
    }

    if (type === "deletecookies") {
      setRealtimeGameData({
        ...realtimeGameData,
        currentPlayer: message.data.split("-")[2],
      });
      getUpdatedGamedata();
    }

    if (realtimeGameData.currentPlayer === "user") {
      setReceiveAdFromHacker(false);
    }

    if (type === "endgame") {
      router.push(`/userend/${gamecode}`);
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
      // arr[index - 2] == "N" &&
      // arr[index - 3] == "K" &&
      // arr[index - 4] == "V" &&
      // arr[index - 5] == "D" &&
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

  // logic functions
  const handleClickRandom = (value) => {
    setRandomOption([])
    if (value === "removechar") {
      handleRemoveChar();
      // double turn checken
      if (userDoubleTurn > 0) {
        const turns = userDoubleTurn - 1;
        channel.publish({ name: gamecode, data: `playerchange-user-user` });
        setUserDoubleTurn(turns);
      } else {
        channel.publish({
          name: gamecode,
          data: `playerchange-user-hacker`,
        });
      }
    } else if (value === "skipturn") {
      console.log("beurt overslaan");
      channel.publish({
        name: gamecode,
        data: `doubleturn-user-hacker`,
      });
    } else if (
      value === "add2letters" ||
      value === "add1capital" ||
      value === "add1number" ||
      value === "change1number" ||
      value === "change1capital"
    ) {
      setUserPasswordAction(value);
      setWindowComponent("password");
      setRealtimeGameData({
        ...realtimeGameData,
        actionUser: "",
      });

    }
  };

  const handleRemoveChar = () => {
    const newPass = gameData.userinfo.password.substring(
      0,
      gameData.userinfo.password.length - 1
    );
    console.log(newPass);
    data = { password: newPass };
    putData("userinfos", gameData.userinfo.id, data);
  };

  const handleClickAction = (action) => {
    if (action === "vpn") {
      setUserStart(false);
      setUserDoubleTurn(1);
      setWindowComponent("vpn");
      setVpnIcon(true);
    } else if (
      action === "add2letters" ||
      action === "add1capital" ||
      action === "add1number" ||
      action === "change1number" ||
      action === "change1capital"
    ) {
      setUserPasswordAction(action);
      setWindowComponent("password");
    } else if (action === "waarschuwingsmail") {
      setWindowComponent("warnings");
    } else if (action === "deletescookies") {
      setWindowComponent("cookies");
    }
    setRealtimeGameData({
      ...realtimeGameData,
      actionUser: "done",
    });
  };

  const handleUpdatedPassword = (score) => {
    if (score >= 100) {
      putData("games", gameData.id, { winner: "user" });
      channel.publish({
        name: gamecode,
        data: `endgame-user-hacker`,
      });
    }
    setAccountStrongness(score);
    getUpdatedGamedata();
    // double turn checken
    if (userDoubleTurn > 0) {
      const turns = userDoubleTurn - 1;
      channel.publish({ name: gamecode, data: `playerchange-user-user` });
      setUserDoubleTurn(turns);
    } else {
      channel.publish({
        name: gamecode,
        data: `playerchange-user-hacker`,
      });
    }
    setWindowComponent("");
  };

  const onClickButtonMail = (note) => {
    sendNoteToDb(`laatste ontdekking hacker: ${note}`);
    // double turn checken
    if (userDoubleTurn > 0) {
      const turns = userDoubleTurn - 1;
      channel.publish({ name: gamecode, data: `playerchange-user-user` });
      setUserDoubleTurn(turns);
    } else {
      channel.publish({
        name: gamecode,
        data: `playerchange-user-hacker`,
      });
    }
    setWindowComponent("done");
    setRealtimeGameData({
      ...realtimeGameData,
      actionUser: "done",
    });
  };

  const sendNoteToDb = async (note) => {
    const copyArr = [...notes, { note: note }];
    setNotes(copyArr);
    const data = {
      note: note,
      game: gameData.id,
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/usernotes`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("joepie, notes na mail");
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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/usernotes`,
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

  const handlePionOnWifiOrSpicy = () => {
    timeout();
    setTimeout(() => {
      setRealtimeGameData({
        ...realtimeGameData,
        actionUser: "done",
      });
      channel.publish({ name: gamecode, data: `playerchange-user-hacker` });
    }, 3000);
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleClickSpamMail = (reaction) => {
    if (reaction === "bad") {
      handleRemoveChar();
    }
    channel.publish({ name: gamecode, data: `playerchange-user-hacker` });
    setRealtimeGameData({
      ...realtimeGameData,
      actionUser: "done",
    });
  };

  const handleClickUserDeleteCookies = () => {
    const data = { obtainedInterests: null };
    sendDataToHacker(data);
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
      console.log("inter put");
      channel.publish({ name: gamecode, data: `deletecookies-user-hacker` });
      setWindowComponent("");
      setRealtimeGameData({
        ...realtimeGameData,
        actionUser: "done",
      });
    }
  };

  const handleClickInstallsVpn = () => {
    setWindowComponent("");
    setRealtimeGameData({
      ...realtimeGameData,
      actionUser: "done",
    });
    setUserDoubleTurn(1);
    channel.publish({ name: gamecode, data: `installvpn-user-user` });
  };

  // general fetch functions
  const getUpdatedGamedata = async () => {
    console.log("update");
    const updatedGameData = await fetchData("games", gameData.id);

    setGameData(updatedGameData);
  };

  const fetchData = async (collection, id) => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/${collection}/?id=${id}`
    );
    const res = await req.json();
    return res[0];
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
      console.log("joepie");
      getUpdatedGamedata();
    }
  };

  const handleClickMoreInfo = (subject) => {
    console.log(subject)
    if (subject === "close"){
      setWindowComponent("")
    } else {
      setWindowComponent(subject)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [realtimeGameData]);


  return (
    <GameLayout
      style="user"
      vpnIcon={vpnIcon}
      realtimeGameData={realtimeGameData}
    >
      <div className={styles.userInfo}>
        <UserInfo userinfo={gameData.userinfo} option={randomOption} />
      </div>
      {realtimeGameData.currentPlayer === "user" &&
      realtimeGameData.actionUser !== "action" &&
      realtimeGameData.actionUser !== "random" &&
      realtimeGameData.actionUser !== "" &&
      realtimeGameData.actionUser !== "wifi" &&
      realtimeGameData.actionUser !== "spam" ? (
        <div className={styles.yourturn}>
     
          <YourTurn />
        </div>
      ) : (
        ""
      )}
      {realtimeGameData.currentPlayer === "hacker" ? (
        <div className={styles.turn}>
          <Turn who={realtimeGameData.currentPlayer} />
        </div>
      ) : (
        ""
      )}
      <Draggable>
        <div className={styles.notes}>
          <Notes
            notes={notes}
            player="user"
            handleFormSubmission={(e) => handleFormSubmissionNotes(e)}
          />
        </div>
      </Draggable>
      <div className={styles.strongness}>
        <UserAccountStrongness value={accountStrongness} handleClickMoreInfo={(subject) => handleClickMoreInfo(subject)} />
      </div>

      {/* acties */}
      {realtimeGameData.currentPlayer === "user" &&
      realtimeGameData.actionUser === "action" ? (
        <div className={styles.action}>
          <UserAction
            password={gameData.userinfo.password}
            onClickButton={(action) => handleClickAction(action)}
            start={userStart}
            handleClickMoreInfo={(subject) => handleClickMoreInfo(subject)}
          />
        </div>
      ) : (
        ""
      )}

      {windowComponent === "cookies" ? (
        <div className={styles.cookies}>
          <UserDeleteCookies
            handleClickUserDeleteCookies={handleClickUserDeleteCookies}
          />
        </div>
      ) : (
        ""
      )}

      {windowComponent === "vpn" ? (
        <div className={styles.vpn}>
          <UserInstallsVpn handleClickInstallsVpn={handleClickInstallsVpn} />
        </div>
      ) : (
        ""
      )}

      {realtimeGameData.currentPlayer === "user" &&
      realtimeGameData.actionUser === "spam" ? (
        <div className={styles.spammail}>
          <SpamMail
            player="user"
            playerinfo={gameData.userinfo}
            handleClickSpamMail={(reaction) => handleClickSpamMail(reaction)}
          />
        </div>
      ) : (
        ""
      )}

      {realtimeGameData.currentPlayer === "user" &&
      realtimeGameData.actionUser === "wifi" ? (
        <div className={styles.wifi}>
          <Wifi />
        </div>
      ) : (
        ""
      )}

      {realtimeGameData.currentPlayer === "user" &&
      realtimeGameData.actionUser === "spicy" ? (
        <div className={styles.spicy}>
          <Spicy />
        </div>
      ) : (
        ""
      )}

      {windowComponent === "warnings" ? (
        <div className={styles.warningmail}>
          <UserWarningMail
            gameData={gameData}
            onClickButtonMail={(note) => onClickButtonMail(note)}
          />
        </div>
      ) : (
        ""
      )}
      {windowComponent === "password" ? (
        <div className={styles.password}>
          <UserAdjustPassword
            gameData={gameData}
            action={userPasswordAction}
            handleUpdatedPassword={(score) => handleUpdatedPassword(score)}
          />
        </div>
      ) : (
        ""
      )}

      {receiveAdFromHacker ? (
        <div className={styles.userAd}>
          <UserAd subject={receiveAdFromHacker} />
        </div>
      ) : (
        ""
      )}
      {realtimeGameData.currentPlayer === "user" &&
      realtimeGameData.actionUser === "random" ? (
        <div className={styles.random}>
          <UserRandom
            randomCard={randomOption}
            onClickButton={(value) => handleClickRandom(value)}
          />
        </div>
      ) : (
        ""
      )}
      {windowComponent === "info cookies" || windowComponent === "info strongness" || windowComponent === "info toevoegen" ?
      <PopupInfo subject={windowComponent} handleClickMoreInfo={(subject) => handleClickMoreInfo(subject)}/>   
     : ""}
 
    </GameLayout>
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
