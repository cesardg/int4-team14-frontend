import Head from 'next/head';
import styles from './../styles/Usersetup.module.css';
import Image from 'next/image';
import {useState} from "react";
import Checkbox from "../components/Checkbox";
import Radiobutton from "../components/Radiobutton";
import { useRouter } from 'next/router'

const Usersetup = () => {

  const router = useRouter()
  const gamecode = router.query.gamecode
  const profilePicturesOptions = ["user", "hacker" ];
  const userIntrestsOptions = ["Paardrijden", "Knutsellen", "roblox", "koken"];  
  const [userIntrests, setUserIntrests] = useState([]);
  const [profilePicture, setProfilePicture] = useState("user");

  const handleClickCheckbox = (value) => {
    if (userIntrests.includes(value)) {
      const copyArr = userIntrests.filter(e => e !== value); 
      setUserIntrests (copyArr);
    } else {
      const copyArr = [...userIntrests, value];
      setUserIntrests(copyArr);
    }
  }

  const fetchGameId = async (code) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`);
    const res = await req.json();
    return res[0].id;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let intrests = "";
    if (e.target.password.value === e.target.reppassword.value){
      userIntrests.forEach(userIntrest => {
        intrests = intrests + "-" + userIntrest;
      });
      const data = {
        password: e.target.password.value,
        username: e.target.username.value,
        email: e.target.email.value,
        intrests: intrests,
        picture: profilePicture,
      };

      
    e.target.reset();
    onSubmit(data);
    } else {
      console.log("niet het zelfde")
    }
  };

  const onSubmit = async (data) => {
    const id = await fetchGameId(gamecode)
    data.game = id;
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/userinfos/`,
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
        router.push(`/user?gamecode=${gamecode}`)
      }
  };


console.log(userIntrests, profilePicture)

  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">Us3r</h1>
        <article>
          <h2>Creeër uw account</h2>
          <Image
            src={`/img/${profilePicture}.png`}
            alt="Picture of the user"
            width={30}
            height={30}
          />
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.radiobuttons}>
              {profilePicturesOptions.map((item) => (
                <Radiobutton
                  key={item}
                  item={item}
                  name={"profile-picture"}
                  onClickButton={(value) => setProfilePicture(value)}
                />
              ))}
            </div>

            <label className={styles.label}>
              Gebruikersnaam
              <input
                className={styles.input}
                type="text"
                name="username"
                required
              />
            </label>

            <label className={styles.label}>
              Emailadres
              <input
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>

            <label className={styles.label}>
              Wachtwoord
              <input
                className={styles.input}
                type="password"
                name="password"
                required
              />
            </label>

            <label className={styles.label}>
              Herhaal wachtwoord
              <input
                className={styles.input}
                type="password"
                name="reppassword"
                required
              />
            </label>
            <div className={styles.radiobuttons}>
              {userIntrestsOptions.map((item) => (
                <Checkbox
                  key={item}
                  item={item}
                  name={"user-intrests"}
                  onClickButton={(value) => handleClickCheckbox(value)}
                />
              ))}
            </div>
            <input
              className={styles.button}
              type="submit"
              value="Start game as a user"
            />
          </form>
        </article>
      </main>
    </div>
  );
}

export default Usersetup;
