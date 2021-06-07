import styles from "./UserAction.module.css";
import Image from 'next/image';

const UserAction = () => {
  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Je staat op een actievak</p>
      <button>
        <p>Versterk je wachtwoord</p>
        <p>Voeg twee kleine letters toe</p>
      </button>
      <button>
        <p>Versterk je wachtwoord</p>
        <p>Voeg 1 hoofdletter toe</p>
      </button>
      <button>
        <p>Versterk je wachtwoord</p>
        <p>Voeg 1 cijfer toe</p>
      </button>
      <button>
        <p>Verwijder je cookies</p>
        <p>Zo kan de hacker jouw interesses niet gebruiken voor zijn aanval </p>
      </button>
      <button>
        <p>Ontvang een waarschuwingsmail</p>
        <p>Ontdek de laatste zet van de hacker</p>
      </button>
      <button>
        <p>Je kan deze actie 1 keer per ronde gebruiken</p>
        <p>Deze optie wordt geactiveerd wanneer je start passeert</p>
        <p>Installeer je VPN</p>
        <p>De hacker moet 2 beurten overslaan</p>
      </button>
    </article>
  );
};

export default UserAction;
