import Layout from "../components/Layout";
import WindowLayout from "../components/WindowLayout";
import styles from "./../styles/Lobby.module.css";
import buttonStyles from "./../styles/buttonStyles.module.css";
import { useChannel } from "../components/ChatReactEffect";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";

const Lobby = () => {
  const router = useRouter();
  const gamecode = router.query.gamecode;
  const player = router.query.player;

  const [members, setMembers] = useState(1);

  const [channel] = useChannel(gamecode, (message) => {
    if (message.data === "game-data=start-game") {
      Router.push(`/${player}setup?gamecode=${gamecode}`);
    }
  });

  channel.presence.subscribe("enter", async () => {
    updateActiveCount(channel);
  });
  channel.presence.subscribe("leave", async () => {
    updateActiveCount(channel);
  });
  channel.presence.enter();

  const updateActiveCount = async (channel) => {
    const membersArr = await channel.presence.get();
    setMembers(membersArr.length);
  };

  const handleCLickStart = () => {
    channel.publish({ name: gamecode, data: "game-data=start-game" });
  };

  return (
    <Layout style="user">
      <section className={styles.playersContainer}>
        <WindowLayout
          title={"selecteer speler"}
          bg="var(--brown)"
          border="var(--green)"
        >
          <div className={styles.playersInside}>
            <p className={styles.playersTitle}>Start een nieuw spel</p>
            {player === "user" ? (
              <div className={styles.players}>
                <article className={styles.player}>
                  <p className={styles.playerTitle}>Internet gebruiker</p>
                  <div className={styles.playerImg}>
                    <Image
                      src="/assets/img/userpics/pf2.svg"
                      alt="Picture of the user"
                      height={200}
                      width={300}
                    />
                  </div>
                  <p className={styles.playerName}>Dit ben jij</p>
                </article>
                <p className={styles.vs}>vs</p>
                <article className={styles.player}>
                  <p className={styles.playerTitle}>Hacker</p>
                  <div className={styles.playerImg}>
                    <Image
                      src="/assets/img/hackerpics/pf1.svg"
                      alt="Picture of the hacker"
                      height={200}
                      width={300}
                    />
                  </div>
                  <p className={styles.playerName}>
                    {members === 1
                      ? "Wachten op tegenspeler..."
                      : "Tegenspeler gevonden!"}
                  </p>
                </article>
              </div>
            ) : (
              <div className={styles.players}>
                <article className={styles.player}>
                  <p className={styles.playerTitle}>Hacker</p>
                  <div className={styles.playerImg}>
                    <Image
                      src="/assets/img/hackerpics/pf1.svg"
                      alt="Picture of the hacker"
                      height={200}
                      width={300}
                    />
                  </div>

                  <p className={styles.playerName}>Dit ben jij</p>
                </article>
                <p className={styles.vs}>vs</p>
                <article className={styles.player}>
                  <p className={styles.playerTitle}>Internet gebruiker</p>
                  <div className={styles.playerImg}>
                    <Image
                      src="/assets/img/userpics/pf2.svg"
                      alt="Picture of the user"
                      height={200}
                      width={300}
                    />
                  </div>
                  <p className={styles.playerName}>
                    {members === 1
                      ? "Wachten op tegenspeler..."
                      : "Tegenspeler gevonden!"}
                  </p>
                </article>
              </div>
            )}
            {members === 1 ? (
              <div>
                <div className={styles.gamecode}>
                  {gamecode.split("").map((char) => (
                    <p className={styles.gamecodeChar}>{char}</p>
                  ))}
                </div>
                <p className={styles.text}>
                  Deel de game code met je tegenspeler om het spel te starten
                </p>
              </div>
            ) : (
              <div className={buttonStyles.button}>
                <Link href={`${player}setup/?gamecode=${gamecode}`}>
                  <a onClick={handleCLickStart}>Profiel aanmaken</a>
                </Link>
              </div>
            )}
            <div className={buttonStyles.backButton}>
              <Link href={`/`}>
                <a>Terug</a>
              </Link>
            </div>
            <div className={styles.rulesButton}>
              <Link href={`/spelregels`}>
                <a>Bekijk de spelregels</a>
              </Link>
            </div>
          </div>
        </WindowLayout>
      </section>
    </Layout>
  );
};

export default Lobby;
