import GameLayout from '../../components/GameLayout';
import Turn from "../../components/Turn";
import Notes from "../../components/Notes";
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
import { useState } from "react";

const Hacker = ({ data }) => {
  const [gameData, setGameData] = useState(data[0])

  console.log("hallooo werk", gameData);
  console.log("whyyyy", data);

  return (
    <GameLayout>
      <HackerInfo />
      <Turn who={"hacker"} />
      <Notes gameData={gameData} player="hacker" />
      <HackerDiscoveries />
      <HackerAction />
      <HackerAd />
      <HackerDecryption />
      <HackerHack />
      <HackerInterests />
      <HackerScreencapture />
      <HackerVpn />
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