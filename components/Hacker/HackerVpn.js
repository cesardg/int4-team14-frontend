import styles from "./HackerVpn.module.css";
import Image from "next/image";

const HackerVpn = () => {
  
  return (
    <article className={styles.article}>
      <h2>VPN verbinding</h2>
      <p>
        De user zijn VPN zorgt voor een veilige verbinding tussen hem/haar en
        het internet, dit houdt de je dus even op een afstand. Je moet 2 beurten
        overslaan
      </p>
      <Image
        src={`/img/vpn.png`}
        alt="vpn"
        width={30}
        height={30}
      />{" "}
    </article>
  );
};

export default HackerVpn;
