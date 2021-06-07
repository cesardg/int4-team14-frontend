import styles from "./UserVpn.module.css";
import Image from 'next/image';

const UserVpn= ( ) => {
  return (
    <article className={styles.article}>
      <h2>VPN staat uit</h2>
      <p>Je VPN zorgt voor een veilige verbinding tussen jou en het internet, dit houdt de hacker dus even op een afstand. </p>
      <p>Gebruik je acties om je VPN in te schakelen</p>
    </article>
  );
};

export default UserVpn;
