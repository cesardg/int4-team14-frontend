// components
import EndGameLayout from "../../components/Endgame/EndGameLayout";
import PlayerInfo from "../../components/Endgame/PlayerInfo";
import Tips from "../../components/Endgame/Tips";
import Winner from "../../components/Endgame/Winner";
import Password from "../../components/Endgame/Password";
import UserAccountStrongness from "../../components/User/UserAccountStrongness";
// styling
import styles from "./../../components/EndGame/End.module.css";

const Userend = ({ data }) => {
  return (
    <EndGameLayout style={"user"}>
      <div className={styles.userInfo}>
        <PlayerInfo info={data.userinfo} player={"user"} winner={data.winner} />
      </div>
      <div className={styles.strongness}>
        <UserAccountStrongness value={data.userinfo.score} />
      </div>
      <div className={styles.winner}>
        <Winner data={data} player={"user"} />
      </div>
      <div className={styles.tips}>
        <Tips />
      </div>
      <div className={styles.password}>
        <Password data={data} />
      </div>
    </EndGameLayout>
  );
};

export default Userend;

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`
  );
  let data = await res.json();
  data = data[0];
  return { props: { data } };
};
