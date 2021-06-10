import styles from "./UserAction.module.css";
import Image from 'next/image';

const UserAction = ({onClickButton}) => {
  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Je staat op een actievak</p>
      <button onClick={() => onClickButton("voegtweeletterstoe")}>
        <p>Versterk je wachtwoord</p>
        <p>Voeg twee kleine letters toe</p>
      </button>
      <button onClick={() => onClickButton("voeghoofdlettertoe")}>
        <p>Versterk je wachtwoord</p>
        <p>Voeg 1 hoofdletter toe</p>
      </button>
      <button onClick={() => onClickButton("voegcijfertoe")}>
        <p>Versterk je wachtwoord</p>
        <p>Voeg 1 cijfer toe</p>
      </button>
      <button onClick={() => onClickButton("deletescookies")}>
        <p>Verwijder je cookies</p>
        <p>Zo kan de hacker jouw interesses niet gebruiken voor zijn aanval </p>
      </button>
      <button onClick={() => onClickButton("waarschuwingsmail")}>
        <p>Ontvang een waarschuwingsmail</p>
        <p>Ontdek de laatste zet van de hacker</p>
      </button>
      <button onClick={() => onClickButton("vpn")}>
        <p>Je kan deze actie 1 keer per ronde gebruiken</p>
        <p>Deze optie wordt geactiveerd wanneer je start passeert</p>
        <p>Installeer je VPN</p>
        <p>De hacker moet 2 beurten overslaan</p>
      </button>
    </article>
  );
};

export default UserAction;
