import styles from "./HackerAction.module.css";
import Image from "next/image";

const HackerAction = ({onClickButton}) => {
  return (
    <article className={styles.article}>
      <h2>spelbord</h2>
      <p>Je staat op een actievak</p>
      <button onClick={() => onClickButton("2letters")}>
        <p>Wachtwoord ontsleutelaar</p>
        <p>Ontdek 2 kleine letters</p>
      </button>
      <button onClick={() => onClickButton("1hoodfletter")}>
        <p>Wachtwoord ontsleutelaar</p>
        <p>Ontdek 1 hoofdletter</p>
      </button>
      <button onClick={() => onClickButton("1cijfer")}>
        <p>Wachtwoord ontsleutelaar</p>
        <p>Ontdek 1 cijfer</p>
      </button>
      <button onClick={() => onClickButton("get interest")}>
        <p>Ontdek interesses</p>
        <p>Ontdek de interesses van de user om een gepersonaliseerde ad te sturen</p>
      </button>
      <button onClick={() => onClickButton("schermovername")}>
        <p>Schermovername</p>
        <p>Ontdek de laatste aanpassing van de user aan het wachtwoord</p>
      </button>
      <button onClick={() => onClickButton("send ad")}>
        <p>Je kan deze actie 1 keer per ronde gebruiken</p>
        <p>Deze optie wordt geactiveerd wanneer je start passeert</p>
        <p>Stuur een gepersonaliseerde ad</p>
        <p>De user moet 2 beurten overslaan</p>
      </button>
    </article>
  );
};

export default HackerAction;
