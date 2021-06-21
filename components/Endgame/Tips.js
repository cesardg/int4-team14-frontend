// components
import GameWindowLayout from "../../components/GameWindowLayout";
// styling
import styles from "./Tips.module.css";
// imports
import Image from "next/image";
import { useState } from "react";

const Tips = () => {
  const [carousel, setCarousel] = useState(1);
  const updateCarousel = (index) => {
    if (carousel === 1 && index == -1) {
      setCarousel(3);
      console.log("terug");
    } else if (carousel === 3 && index == 1) {
      setCarousel(1);
    } else {
      const newIndex = carousel + index;
      setCarousel(newIndex);
    }
    console.log(carousel);
  };

  return (
    <GameWindowLayout
      title="tips & tricks"
      bg="var(--yellow)"
      border="var(--green)"
    >
      <div className={styles.container}>
        <p className={styles.title}>Wat hebben we geleerd vandaag?</p>
        <p className={styles.subtitle}>
          Gebruik deze tips om jouw online accounts ook in het echte leven
          ondoordringbaar te maken
        </p>
        <div className={styles.carousel}>
          <button
            className={styles.buttonPrev}
            onClick={() => {
              updateCarousel(-1);
            }}
          >
            <span className={styles.hidden}>vorige</span>
          </button>

          {carousel === 1 ? (
            <div className={styles.carouselItem}>
              <div className={styles.img}>
                <Image
                  src={`/assets/img/end/cookie.svg`}
                  alt="Picture of the user"
                  width={120}
                  height={120}
                />
              </div>
              <p className={styles.carouselTitle}>Ruim op</p>
              <p className={styles.carouselText}>
                Ruim op door je zoekgeschiedenis en cookies te verwijderen. Zo
                kan de hacker niet smullen aan je informatie. En mama en papa
                zullen blij zijn dat het proper is.
              </p>
              <p className={styles.carouselTip}>
                Verwijder na het gebruik van de computer telkens je
                zoekgeschiedenis en cookies
              </p>
            </div>
          ) : (
            ""
          )}

          {carousel === 2 ? (
            <div className={styles.carouselItem}>
              <div className={styles.img}>
                <Image
                  src={`/assets/img/end/lock.svg`}
                  alt="Picture of the user"
                  width={120}
                  height={120}
                />
              </div>{" "}
              <p className={styles.carouselTitle}>Bewaar je geheim</p>
              <p className={styles.carouselText}>
                Gebruik een sterk wachtwoord met verschillende cijfers en
                hoofdletters om al jouw informatie veilig te bewaren.
              </p>
              <p className={styles.carouselTip}>
                Gebruik verschillende hoofdletters en cijfers in je wachtwoord
                en wijzig het af en toe eens
              </p>
            </div>
          ) : (
            ""
          )}

          {carousel === 3 ? (
            <div className={styles.carouselItem}>
              <div className={styles.img}>
                <Image
                  src={`/assets/img/end/wall.svg`}
                  alt="Picture of the user"
                  width={120}
                  height={120}
                />
              </div>
              <p className={styles.carouselTitle}>Bouw een muur</p>
              <p className={styles.carouselText}>
                Maak gebruik van een VPN en zet je browser op privé. Zo bouw je
                een sterke muur tussen jij en de hacker!
              </p>
              <p className={styles.carouselTip}>
                Maak gebruik van een VPN en zet je browser op privaat
              </p>
            </div>
          ) : (
            ""
          )}

          <button
            className={styles.buttonNext}
            onClick={() => {
              updateCarousel(+1);
            }}
          >
            <span className={styles.hidden}>volgende</span>
          </button>
        </div>
      </div>
    </GameWindowLayout>
  );
};

export default Tips;
