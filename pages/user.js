import Head from 'next/head'
import styles from './../styles/User.module.css'
import Image from 'next/image'
import UserInfo from "../components/UserInfo";
import { useRouter } from 'next/router'

const User = (data) => {

  const router = useRouter()
  const gamecode = router.query.gamecode;
  console.log(data)

  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1 className="title">Us3r</h1>
        < UserInfo/>
      </main>
    </div>
  );
}

export default User

/*
export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const {code} = ctx.params.gamecode
  //const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=ABC123`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
*/
