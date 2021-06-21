// styling
import styles from "./PopupInfo.module.css";
import buttonStyles from "./../styles/ButtonStyles.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const PopupInfo = ({subject, handleClickMoreInfo}) => {
  return (
    <div className={styles.overlay}>
    <div className={styles.outerContainer} onClick={() => handleClickMoreInfo("close")}>
    <GameWindowLayout title="meer info" bg="var(--brown)" border="var(--purple)">
      {subject === "info cookies" ? 
      <div className={styles.containerOpened}>
        <p className={styles.title}>Wat zijn internet cookies?</p>
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
      :      "" }
      { subject === "info strongness" ? 
       <div className={styles.containerOpened}>
        <p className={styles.title}>Wachtwoord sterkte</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/moreinfostrongness.svg`}
            alt="broken Spicy"
            width={200}
            height={100}
          />
        </div>
        <p className={styles.subtitle}>We kiezen meestal voor een wachtwoord dat we makkelijk onthouden. Vaak gebruiken we verjaardagen, (familie)namen of simpele toetsenbordcombinaties zoals “azertyuiop”. Maar zulke wachtwoorden zijn makkelijk te raden door mensen met kwade intenties. </p>
         <p className={styles.subtitle}>Maak je account sterker door extra letters, hoofdletters en cijfers toe te voegen. Bij een account sterkte van 100% win jij van de hacker!</p>
        
        <div className={styles.buttonContainer}>
        <button
          className={buttonStyles.buttonRed}
        >
          ik begrijp het!
        </button>
        </div>
      </div>
      : ""}
    </GameWindowLayout>
    </div>
    </div>
  );
};

export default PopupInfo;
