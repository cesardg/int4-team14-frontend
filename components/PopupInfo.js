// styling
import styles from "./PopupInfo.module.css";
import buttonStyles from "./../styles/ButtonStyles.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const PopupInfo = ({handleClickMoreInfo}) => {
  return (
    <div className={styles.overlay}>
    <div className={styles.outerContainer} onClick={() => handleClickMoreInfo("close")}>
    <GameWindowLayout title="meer info over cookies" bg="var(--brown)" border="var(--purple)">
      <div className={styles.containerOpened}>
        <p className={styles.title}>Wat zijn internet coockies?</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/useractions/cookies.svg`}
            alt="broken Spicy"
            width={100}
            height={100}
          />
        </div>
        <p className={styles.subtitle}>In tegenstelling tot de koekjes die je meepakt naar school, zijn internet cookies iets helemaal anders. Ze zijn digitaal, je kan ze niet vastpakken en ze komen voor online op je computer of tablet. </p>
        <p className={styles.subtitle}>Cookies zijn bestandjes die je surfgedrag bijhouden zodra je een website bezoekt. Hierdoor vind je online sneller wat je zoekt. Reclamemakers gebruiken jou cookies om persoonlijke advertenties te sturen </p>
        <div className={styles.buttonContainer}>
        <button
          className={buttonStyles.buttonRed}
        >
          ik begrijp het!
        </button>
        </div>
      </div>
    </GameWindowLayout>
    </div>
    </div>
  );
};

export default PopupInfo;
