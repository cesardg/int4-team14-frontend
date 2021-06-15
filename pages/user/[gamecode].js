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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useChannel } from "../../components/ChatReactEffect";
import UserRandom from "../../components/User/UserRandom";

const User = ({ data }) => {
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
  const [userStart, setUserStart] = useState(false);
  const [userDoubleTurn, setUserDoubleTurn] = useState(0);
  const [hackerDoubleTurn, setHackerDoubleTurn] = useState(0);
  const randomOptions = [
    {
      type: "good",
      action: "2kleineletters",
      text: "Je hebt je account op privé gezet. Voeg 2 extra letters toe aan je wachtwoord",
    },
    {
      type: "good",
      action: "veranderletter",
      text: "Je gebruikt een veilige internetbrowser zoals DuckDuckGo in plaats van Google. Verander 1 kleine letter van je wachtwoord",
    },
    {
      type: "good",
      action: "2kleineletters",
      text: "Je hebt je locatie uitgezet, zo kunnen hackers je locatie niet volgen. Voeg 2 extra letters toe aan je wachtwoord",
    },
    {
      type: "good",
      action: "letternaarhoofdletter",
      text: "Je hebt een antivirus-scanner gedownload om je computer extra te beveiligen. Verander 1 kleine letter in een hoofdletter",
    },
    {
      type: "good",
      action: "letternaarcijfer",
      text: "Je gebruikt de incognito-modus om te surfen. Verander 1 kleine letter in een cijfer",
    },
    {
      type: "good",
      action: "letternaarcijfer",
      text: "Je hebt een webcam-cover over je webcam geplaatst. Verander 1 kleine letter in een cijfer",
    },
    {
      type: "bad",
      action: "letterweghalen",
      text: "Je hebt een webcam-cover over je webcam geplaatst. Verander 1 kleine letter in een cijfer",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "Je raakt afgeleid door een complot-theorie op het internet. Sla een beurt over",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "Je bent verdwaald tussen alle vreemde YouTube-filmpjes waardoor je nu alleen nog teenkaas-filmpjes te zien krijgt. Sla een beurt over",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "De hacker ontdekt je oude Roblox-account en gebruikt dit om extra info over jou te ontdekken. Sla een beurt over",
    },
    {
      type: "bad",
      action: "letterweghalen",
      text: "Je probeert Minecraft te downloaden op een verdachte website, hierdoor heb je een virus. Haal 1 letter of cijfer uit je wachtwoord",
    },
    {
      type: "bad",
      action: "beurtoverlsaan",
      text: "Je probeert gratis muziek te downloaden op een verdachte website, hierdoor loopt je computer vast. Sla een beurt over",
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
  const [userPasswordAction, setUserPasswordAction] = useState("");
  const [receiveAdFromHacker, setReceiveAdFromHacker] = useState(false);
  const [accountStrongness, setAccountStrongness] = useState(
    data[0].userinfo.score
  );

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
          newPlayer = "hacker";
        }
      }

      // user komt op een random vak
      if (
        realtimeGameData.currentPlayer === "user" &&
        realtimeGameData.actionUser === "random"
      ) {
        setRandomOption(
          randomOptions[Math.floor(Math.random() * randomOptions.length)]
        );
        // setWindowComponent("random");
      }

      // if (
      //   realtimeGameData.currentPlayer === "user" &&
      //   realtimeGameData.actionUser === "action"
      // ) {
      //   console.log(realtimeGameData.actionUser);
      //   console.log("action");
      //   setWindowComponent("action");
      // }

      // console.log("User realtime", realtimeGameData.actionUser);

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
  });

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

  // logic functions
  const handleClickRandom = (value) => {
    console.log("random is oke");
    console.log(value);
    channel.publish({ name: gamecode, data: `playerchange-user-hacker` });
  };

  const handleClickAction = (action) => {
    if (action === "vpn") {
      setUserStart(false);
      setUserDoubleTurn(2);
    } else if (
      action === "add2letters" ||
      action === "add1capital" ||
      action === "add1number"
    ) {
      getUpdatedGamedata();
      setUserPasswordAction(action);
      setWindowComponent("password");
    }
    setRealtimeGameData({
      ...realtimeGameData,
      actionUser: "",
    });
  };

  const handleUpdatedPassword = (score) => {
    setAccountStrongness(score);
    channel.publish({
      name: gamecode,
      data: `playerchange-user-hacker`,
    });
    setWindowComponent("");
  };

  // general fetch functions
  const getUpdatedGamedata = async () => {
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
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [realtimeGameData]);

  return (
      <GameLayout style="user">
        <h1 className="title">Us3r</h1>
        <GameBoard boardInfo={realtimeGameData} />
        <UserInfo userinfo={gameData.userinfo} />
        <Turn who={realtimeGameData.currentPlayer} />
        <UserWarning />
        <Notes gameData={gameData} player="user" />
        <UserAccountStrongness value={accountStrongness} />
        <UserVpn />
        {/* acties */}
        {realtimeGameData.currentPlayer === "user" &&
        realtimeGameData.actionUser === "action"  ? (
          <UserAction
            onClickButton={(action) => handleClickAction(action)}
            start={userStart}
          />
        ) : (
          ""
        )}
        {windowComponent === "cookies" ? <UserDeleteCookies /> : ""}
        {windowComponent === "warning" ? <UserWarningMail /> : ""}
        {windowComponent === "password" ? (
          <UserAdjustPassword
            gameData={gameData}
            // action={"change1capital"}
            action={userPasswordAction}
            handleUpdatedPassword={(score) => handleUpdatedPassword(score)}
          />
        ) : (
          ""
        )}
        {receiveAdFromHacker ? <UserAd subject={receiveAdFromHacker} /> : ""}
        {realtimeGameData.currentPlayer === "user" &&
        realtimeGameData.actionUser === "random"  ? (
          <UserRandom
            randomCard={randomOption}
            onClickButton={(value) => handleClickRandom(value)}
          />
        ) : (
          ""
        )}
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
