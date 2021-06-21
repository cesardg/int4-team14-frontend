// components
import EndGameLayout from "../../components/Endgame/EndGameLayout";
import PlayerInfo from "../../components/Endgame/PlayerInfo";
import Tips from "../../components/Endgame/Tips";
import Winner from "../../components/Endgame/Winner";
import Discoveries from "../../components/Endgame/Discoveries";
// styling
import styles from "../../components/EndGame/End.module.css";

const Hackerend = ({ data }) => {
  return (
    <EndGameLayout style={"hacker"}>
      <div className={styles.userInfo}>
        <PlayerInfo info={data.hackerinfo} player={"hacker"} winner={data.winner} />
      </div>
      <div className={styles.winnerHacker}>
        <Winner data={data} player={"hacker"} />
      </div>
      <div className={styles.tips}>
        <Tips />
      </div>
      <div className={styles.discoveries}>
        <Discoveries data={data} />
      </div>
    </EndGameLayout>
  );
};

export default Hackerend;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  let data = await res.json();
  data = data[0];
  return { props: { data } };
};
