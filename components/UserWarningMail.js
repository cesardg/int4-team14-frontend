import styles from "./UserWarningMail.module.css";

const UserWarningMail = () => {
  return (
        <article className={styles.article}>
          <h2>spelbord</h2>
          <div>
            <p>Waarschuwingsmail</p>
            <p>Open deze mail en ontdek de laatste zet van de hacker</p>
            <button>Mail lezen</button>
          </div>
          <div>
            <p>Waarschuwingsmail</p>
            <p>Er probeerde zojuist iemand in te loggen op je account vanaf een nieuw apparaat. Je ontvangt deze e-mail omdat we zeker willen zijn dat jij dit was.</p>
            <p>Het volgende wachtwoord werd hiervoor gebruikt:</p>
            <p>azerty123</p>
            <p>Ben jij dit niet? Versterk dan zo snel mogelijk je wachtwoord</p>
            <button>Verder Spelen</button>
          </div>
        </article>
  );
};

export default UserWarningMail;
