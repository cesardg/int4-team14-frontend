// styling
import styles from "./PopupInfo.module.css";
import buttonStyles from "./../styles/ButtonStyles.module.css";
// components
import GameWindowLayout from "./GameWindowLayout";
// imports
import Image from "next/image";

const PopupInfo = ({subject, handleClickMoreInfo}) => {
  return (
    <div className={styles.overlay} onClick={() => handleClickMoreInfo("close")}>
    <div className={styles.outerContainer}>
    <GameWindowLayout title="meer info" bg="var(--brown)" border="var(--purple)">
      {subject === "info cookies" ? 
      <div className={styles.containerOpened}>
        <p className={styles.title}>Wat zijn internet cookies?</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/useractions/cookies.svg`}
            alt="icon"
            width={100}
            height={100}
          />
        </div>
        <p className={styles.subtitle}>In tegenstelling tot de koekjes die je meepakt naar school, zijn internet cookies iets helemaal anders. Ze zijn <span className={styles.strong}> digitaal </span>, je kan ze niet vastpakken en ze komen voor <span className={styles.strong}>online op je computer of tablet. </span></p>
        <p className={styles.subtitle}>Cookies zijn bestandjes die je <span className={styles.strong}>surfgedrag</span> bijhouden zodra je een website bezoekt. Hierdoor vind je online sneller wat je zoekt. Reclamemakers gebruiken jou cookies om <span className={styles.strong}>persoonlijke advertenties</span>  te sturen </p>
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
            alt="icon"
            width={200}
            height={100}
          />
        </div>
        <p className={styles.subtitle}>We kiezen meestal voor een wachtwoord dat we makkelijk onthouden. Vaak gebruiken we verjaardagen, (familie)namen of simpele toetsenbordcombinaties zoals “azerty”. Maar zulke wachtwoorden zijn makkelijk te raden door mensen met kwade intenties. </p>
         <p className={styles.subtitle}>Maak je account sterker door <span className={styles.strong}> extra letters, hoofdletters en cijfers toe te voegen</span> als je op een actie-vak komt.  <span className={styles.strong}> Bij een account sterkte van 100% win jij van de hacker!</span></p>
        
        <div className={styles.buttonContainer}>
        <button
          className={buttonStyles.buttonRed}
        >
          ik begrijp het!
        </button>
        </div>
      </div>
      : ""}
      { subject === "info toevoegen" ? 
       <div className={styles.containerOpened}>
        <p className={styles.title}>Voeg extra letters toe</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/moreinfotoevoegen.svg`}
            alt="icon toevoegen"
            width={300}
            height={150}
          />
        </div>
        <p className={styles.subtitle}>Hoe vind je dan een wachtwoord dat én sterk én makkelijk te onthouden is? Oplossing: maak het jezelf niet te moeilijk, maar maak het lang! Verzin twee of drie random woorden en plak die dan aan elkaar. Wat dacht je van het wachtwoord “PaardMetBaard”? Makkelijk te onthouden, toch?</p>
        
        
        <div className={styles.buttonContainer}>
        <button
          className={buttonStyles.buttonRed}
        >
          ik begrijp het!
        </button>
        </div>
      </div>
      : ""}

          { subject === "info vpn" ? 
       <div className={styles.containerOpened}>
        <p className={styles.title}>Wat is een VPN?</p>
        <div className={styles.img}>
          <Image
            src={`/assets/img/useractions/vpn.svg`}
            alt="icon toevoegen"
            width={230}
            height={130}
          />
        </div>
        <p className={styles.subtitle}> Een VPN zorgt voor een <span className={styles.strong}>beveiligde verbinding</span> tussen jou en het internet.
De verbinding is veiliger dan wifi en <span className={styles.strong}>houdt veel hackers tegen</span>.</p>
<p className={styles.subtitle}>Voer deze actie uit zodat de hacker een beurt moet overslaan</p>
        
        
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
