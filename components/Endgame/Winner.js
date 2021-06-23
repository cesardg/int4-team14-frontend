// components
import GameWindowLayout from "../../components/GameWindowLayout";
// styling
import styles from "./Winner.module.css";
// imports
import Image from "next/image";

const Winner = ({ data, player }) => {
  return (
    <>
      {player === "user" ? (
        <GameWindowLayout
          title="spelbord"
          bg="var(--brown)"
          border="var(--green)"
        >
          {data.winner === "user" ? (
            <div className={styles.container}>
              <div className={styles.imgLeftConfetti}>
                <Image
                  src={`/assets/img/end/confetti.svg`}
                  alt="Picture of the user"
                  width={350}
                  height={500}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.title}>Gewonnen!</p>
                <p className={styles.subtitle}>Je bent</p>
                <p className={styles.text}>
                  Je account heeft een sterkte bereikt van 100%! Je hebt goed
                  gebruik gemaakt van de acties waardoor je account
                  ondoordingbaar is geworden voor de hacker. Goed gedaan!
                </p>
              </div>
              <div className={styles.imgRight}>
                <Image
                  src={`/assets/img/end/confetti.svg`}
                  alt="Picture of the user"
                  width={350}
                  height={500}
                />
              </div>
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.content}>
                <p className={styles.title}>Verloren!</p>
                <p className={styles.subtitle}>Je bent</p>
                <p className={styles.text}>
                  Je account was niet sterk genoeg om de hacker uit de hielen te
                  lopen. Hierdoor heeft hij al jouw persoonlijke informatie te
                  pakken gekregen.
                </p>
              </div>
            </div>
          )}
        </GameWindowLayout>
      ) : (
        <GameWindowLayout
          title="spelbord"
          bg="var(--black)"
          border="var(--green)"
        >
          {data.winner === "user" ? (
            <div className={styles.container}>
              <div className={styles.contentHacker}>
                <p className={styles.title}>verloren!</p>
                <p className={styles.subtitle}>Je bent</p>
                <p className={styles.text}>
                  De gebruiker heeft zijn/haar profiel zo sterk gemaakt dat je
                  hacks niet meer werken. Je zal een ander slachtoffer moeten
                  zoeken.
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.imgLeftConfetti}>
                <Image
                  src={`/assets/img/end/confetti.svg`}
                  alt="Picture of the user"
                  width={350}
                  height={500}
                />
              </div>
              <div className={styles.contentHacker}>
                <p className={styles.title}>gewonnen!</p>
                <p className={styles.subtitle}>Je bent</p>
                <p className={styles.text}>
                  Je hebt alle informatie van de gebruiker te weten gekomen, nu
                  kan je deze doorverkopen en een fortuin verdienen! Op naar het
                  volgende slachtoffer
                </p>
              </div>
              <div className={styles.imgRight}>
                <Image
                  src={`/assets/img/end/confetti.svg`}
                  alt="Picture of the user"
                  width={350}
                  height={500}
                />
              </div>
            </div>
          )}
        </GameWindowLayout>
      )}
    </>
  );
};

export default Winner;
