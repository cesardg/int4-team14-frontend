// components
import EndGameLayout from "../../components/EndGameLayout";
import GameWindowLayout from "../../components/GameWindowLayout";
import UserInfoEnd from "../../components/User/UserInfoEnd";
// styling
import styles from "./../../components/EndGameLayout.module.css";

const Userend = ({ data }) => {
  console.log(data);

  return (
    < EndGameLayout style={"user"}>
      <div className={styles.userInfo}>
        <UserInfoEnd userinfo={data[0].userinfo} />
      </div>
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

    </EndGameLayout>
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
