import UserInfo from '../../components/UserInfo';
import Turn from '../../components/Turn';
import Notes from '../../components/Notes';
import UserWarning from '../../components/UserWarning';
import { useState } from 'react';
import GameLayout from '../../components/GameLayout';
import UserAccountStrongness from '../../components/UserAccountStrongness';
import UserVpn from '../../components/UserVpn';
import UserAction from '../../components/UserAction';
import UserDeleteCookies from '../../components/UserDeleteCookies';
import UserWarningMail from '../../components/UserWarningMail';
import UserAdjustPassword from '../../components/UserAdjustPassword';
import UserAdd from '../../components/UserAdd';

const User = ({data}) => {

  const [gameData, setGameData] = useState(data[0])

  return (
    <>
      <GameLayout>
        <h1 className="title">Us3r</h1>
        <UserInfo userinfo={gameData.userinfo} />
        <Turn who={"hacker"} />
        <UserWarning/>
        <Notes/>
        <UserAccountStrongness/>
        <UserVpn/>
        <UserAction/>
        <UserDeleteCookies/>
        <UserWarningMail/>
        <UserAdjustPassword/>
        <UserAdd/>
      </GameLayout>
    </>
  );
}

export default User

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`);
  const data = await res.json();
  return { props: { data } };
}

