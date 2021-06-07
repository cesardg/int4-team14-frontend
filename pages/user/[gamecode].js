import UserInfo from '../../components/UserInfo';
import Turn from '../../components/Turn';
import Notes from '../../components/Notes';
import UserWaring from '../../components/UserWarning';
import { useState } from 'react';
import GameLayout from '../../components/GameLayout';
import UserAccountStrongness from '../../components/UserAccountStrongness';
import UserVpn from '../../components/UserVpn';
import UserAction from '../../components/UserAction';

const User = ({data}) => {

  const [gameData, setGameData] = useState(data[0])

  return (
    <>
      <GameLayout>
        <h1 className="title">Us3r</h1>
        <UserInfo userinfo={gameData.userinfo} />
        <Turn who={"hacker"} />
        <UserWaring/>
        <Notes/>
        <UserAccountStrongness/>
        <UserVpn/>
        <UserAction/>
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

