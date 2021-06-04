import Head from "next/head";
import styles from "./../styles/User.module.css";

const Gamerules = () => {
  return (
    <div>
      <Head>
        <title>Spelregels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">Spelregels</h1>
       
      </main>
    </div>
  );
}

export default Gamerules
