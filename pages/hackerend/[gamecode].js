// components
import Layout from "../../components/Layout";
import GameWindowLayout from "../../components/GameWindowLayout";
import HackerInfo from "../../components/Hacker/HackerInfo";
import HackerDiscoveries from "../../components/Hacker/HackerDiscoveries";
// styling
import styles from "./../../components/GameLayout.module.css";
import { useRouter } from "next/router";

const Hacker = ({ data }) => {
  console.log(data);
  const router = useRouter();

  return (
    <Layout style={"hacker"}>
      <p>halooooo</p>
      <GameWindowLayout
        title="spelbord"
        bg="var(--yellow)"
        border="var(--green)"
      >
        {data.winner === "user" ? <p>je bent verloren</p> : "er is nog geen winner, cesar is de winner!!!!!"}
        {data.winner === "hacker" ? <p>je bent gewonnen</p> : "er is nog geen winner, lieselot is de winner"}
      </GameWindowLayout>
      {/* <div className={styles.hackerInfo}>
        <HackerInfo hackerinfo={gameData.hackerinfo} />
      </div>
      <div className={styles.discoveries}>
        <HackerDiscoveries gameData={gameData} />
      </div>{" "} */}
      */
    </Layout>
  );
};

export default Hacker;

export const getStaticProps = async (ctx) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${ctx.params.gamecode}`
  );
  const data = await response.json();

  return {
    props: {
      data: data.length > 0 ? data.pop() : { error: true },
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games`);
  const data = await response.json();

  return {
    paths: data.map((game) => ({
      params: {
        gamecode: game.gamecode,
      },
    })),
    fallback: true,
  };
};
