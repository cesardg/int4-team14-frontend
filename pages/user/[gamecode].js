import GameLayout from "../../components/GameLayout";
import Turn from "../../components/Turn";
import Notes from "../../components/Notes";
import UserInfo from "../../components/User/UserInfo";
import UserWarning from "../../components/User/UserWarning";
import UserAccountStrongness from "../../components/User/UserAccountStrongness";
import UserVpn from "../../components/User/UserVpn";
import UserAction from "../../components/User/UserAction";
import UserDeleteCookies from "../../components/User/UserDeleteCookies";
import UserWarningMail from "../../components/User/UserWarningMail";
import UserAdjustPassword from "../../components/User/UserAdjustPassword";
import UserAd from "../../components/User/UserAd";
import { useState } from "react";

const User = ({ data }) => {
  const [gameData, setGameData] = useState(data[0]);

  return (
    <>
      <GameLayout>
        <h1 className="title">Us3r</h1>
        <UserInfo userinfo={gameData.userinfo} />
        <Turn who={"hacker"} />
        <UserWarning />
        <Notes />
        <UserAccountStrongness />
        <UserVpn />
        <UserAction />
        <UserDeleteCookies />
        <UserWarningMail />
        <UserAdjustPassword />
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
