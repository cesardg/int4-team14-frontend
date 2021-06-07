import GameLayout from '../../components/GameLayout';
import HackerInfo from '../../components/HackerInfo';
import Notes from '../../components/Notes';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Hacker = ({ data }) => {
  const [gameData, setGameData] = useState(data[0])

  return (
    <GameLayout>
      <HackerInfo />
      <Notes data={gameData} />
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