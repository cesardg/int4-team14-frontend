import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Livechat() {

  const router = useRouter()
  const gamecode = router.query.gamecode
  console.log(gamecode);

  return (
    <div>
      <Head>
        <title>Team 14 groupchat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Live chat demo</h1>
        <Chat gamecode={gamecode}/>
      </main>

    </div>
  )
}

