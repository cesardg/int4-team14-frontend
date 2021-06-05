import Head from 'next/head';
import styles from './../styles/Usersetup.module.css';
import Image from 'next/image';
import {useState} from "react";
import Checkbox from "../components/Checkbox";
import Radiobutton from "../components/Radiobutton";
import { useRouter } from 'next/router'

const Hackersetup = () => {

  const router = useRouter()
  const gamecode = router.query.gamecode
  const profilePicturesOptions = ["user", "hacker" ];
  const [profilePicture, setProfilePicture] = useState("user");

  const fetchGameId = async (code) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`);
    const res = await req.json();
    return res[0].id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      picture: profilePicture
    };
    e.target.reset();
    onSubmit(data);
  };

  const onSubmit = async (data) => {
    const id = await fetchGameId(gamecode)
    data.game = id;
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/hackerinfos/`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("joepie")
        router.push(`/hacker?gamecode=${gamecode}`)
      }
  };



  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">H4ck3r</h1>
        <article>
          <h2>Creeër uw account</h2>
           <Image
              src={`/img/${profilePicture}.png`}
              alt="Picture of the user"
              width={30}
              height={30}
              />
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)} >
            <div className={styles.radiobuttons}>
            {profilePicturesOptions.map((item) => (
                <Radiobutton key={item} item={item} name={"profile-picture"} onClickButton={(value) => setProfilePicture(value)} />
               ))}
             </div>
    

            <label className={styles.label} >
              Username
              <input className={styles.input} type="text" name="username" required />
            </label>

      
            <input className={styles.button} type="submit" value="Start game as a hacker" />
          </form>
        </article>
      </main>

    </div>
  )
}

export default Hackersetup;
