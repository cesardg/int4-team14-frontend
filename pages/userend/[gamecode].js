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
        <p>
          {data[0].winner === "user"
            ? "je bent gewonnen, de user is gewonnen"
            : "je bent verloren, hacker is gewonnen"}
        </p>
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

export default Userend;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  const data = await res.json();
  return { props: { data } };
};
