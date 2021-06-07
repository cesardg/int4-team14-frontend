import styles from "./HackerInfo.module.css";
import Image from "next/image";

const HackerInfo = () => {
  return (
    <article>
      <h2 className={styles.article}>Hacker info</h2>
      <Image
        src="/img/hacker.png"
        alt="Picture of the hacker"
        width={30}
        height={30}
      />
    </article>
  );
};

export default HackerInfo;
