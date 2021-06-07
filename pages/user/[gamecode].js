import Head from 'next/head'
import styles from './../../styles/User.module.css'
import Image from 'next/image'
import UserInfo from "../../components/UserInfo";
import { useRouter } from 'next/router'
import { useState } from 'react';

const User = ({data}) => {

  const [gameData, setGameData] = useState(data[0])
  console.log(gameData.userinfo.interests)

  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1 className="title">Us3r</h1>
        < UserInfo userinfo={gameData.userinfo} />
      </main>
    </div>
  );
}

export default User

export const getServerSideProps = async (context) => {
  const { gamecode } = context.query;
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${gamecode}`);
  const data = await res.json();
  return { props: { data } };
}
