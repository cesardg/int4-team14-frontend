// styling
import styles from "./Carousel.module.css";
// imports
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
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
    <div className={styles.carousel}>
      <button
        // className={buttonStyles.buttonGreen}
        onClick={() => {
          updateCarousel(-1);
        }}
      >
        vorige
      </button>

      {carousel === 1 ? (
        <div className={styles.carouselItem}>
          <p className={styles.carouselTitle}>Ruim op</p>
          <p className={styles.carouselText}>
            Ruim op door je zoekgeschiedenis en cookies te verwijderen. Zo kan
            de hacker niet smullen aan je informatie. En mama en papa zullen
            blij zijn dat het proper is.
          </p>
          <p className={styles.carouselTip}>
            Verwijder na het gebruik van de computer telkens je zoekgeschiedenis
            en cookies
          </p>
        </div>
      ) : (
        ""
      )}

      {carousel === 2 ? (
        <div className={styles.carouselItem}>
          <p className={styles.carouselTitle}>Bewaar je geheim</p>
          <p className={styles.carouselText}>
            Gebruik een sterk wachtwoord met verschillende cijfers en
            hoofdletters om al jouw informatie veilig te bewaren.
          </p>
          <p className={styles.carouselTip}>
            Gebruik verschillende hoofdletters en cijfers in je wachtwoord en
            wijzig het af en toe eens
          </p>
        </div>
      ) : (
        ""
      )}

      {carousel === 3 ? (
        <div className={styles.carouselItem}>
          <p className={styles.carouselTitle}>Bouw een muur</p>
          <p className={styles.carouselText}>
            Maak gebruik van een VPN en zet je browser op privé. Zo bouw je een
            sterke muur tussen jij en de hacker!
          </p>
          <p className={styles.carouselTip}>
            Maak gebruik van een VPN en zet je browser op privaat
          </p>
        </div>
      ) : (
        ""
      )}
      <button
        // className={buttonStyles.buttonGreen}
        onClick={() => {
          updateCarousel(+1);
        }}
      >
        volgende
      </button>
    </div>
  );
};

export default Carousel;
