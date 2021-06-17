// components
import Layout from "../../components/Layout";
import GameWindowLayout from "../../components/GameWindowLayout";
import HackerInfo from "../../components/Hacker/HackerInfo";
import HackerDiscoveries from "../../components/Hacker/HackerDiscoveries";
// styling
import styles from "./../../components/GameLayout.module.css";

const Userend = ({ data }) => {
  console.log(data);

  return (
    <Layout style={"user"}>
      <p>halooooo</p>
      <GameWindowLayout
        title="spelbord"
        bg="var(--yellow)"
        border="var(--green)"
      >
        {data[0].winner === "user" ? (
          <p>je bent verloren</p>
        ) : (
          "er is nog geen winner, cesar is de winner!!!!!"
        )}
        {data[0].winner === "hacker" ? (
          <p>je bent gewonnen</p>
        ) : (
          "er is nog geen winner, lieselot is de winner"
        )}
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

export default Userrend;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  const data = await res.json();
  return { props: { data } };
};
