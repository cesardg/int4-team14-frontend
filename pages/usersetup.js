import Head from 'next/head';
import styles from './../styles/Usersetup.module.css';
import Image from 'next/image';
import {useState} from 'react';
import Checkbox from '../components/Checkbox';
import Radiobutton from '../components/Radiobutton';
import { useRouter } from 'next/router'

const Usersetup = () => {

  const router = useRouter()
  const gamecode = router.query.gamecode
  const profilePicturesOptions = ["user", "hacker" ];
  const userInterestsOptions = ["Paardrijden", "Knutsellen", "roblox", "koken"];  
  const [userInterests, setUserInterests] = useState([]);
  const [profilePicture, setProfilePicture] = useState("user");
  const [profileInput, setProfileInput] = useState({username: "", password:"", reppassword:""});
  const [profileError, setProfileError] = useState({username: "", password:"", reppassword:""});
  const [currentField, setCurrentField] = useState("account");

  const handleClickCheckbox = (value) => {
    if (userInterests.includes(value)) {
      const copyArr = userInterests.filter(e => e !== value); 
      setUserInterests (copyArr);
    } else {
      const copyArr = [...userInterests, value];
      setUserInterests(copyArr);
    }
  }

  const fetchGameId = async (code) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`);
    const res = await req.json();
    return res[0].id;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let interests = "";
    if ( profileInput.password ===  profileInput.reppassword){
      userInterests.forEach(userInterest => {
        interests = interests + "-" + userInterest;
      });
      const data = {
        password: profileInput.password,
        username: profileInput.username,
        interests: interests,
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
      router.push(`/user/${gamecode}`)
    }
  };

  const handleClickButton = (e, action) => {
  e.preventDefault();
    if (action === "submit"){
      validateForm(e);
    } else {
      setCurrentField(action)
    }
  }

  const validateForm = (e) => {

    const tmp = { ...profileError };
    const entries = Object.entries(profileInput)
    entries.forEach(element => {
      if (element[1] === ""){
        tmp[element[0]] = `${element[0]} niet ingevuld`;
        setProfileError(tmp);
      } else {
         tmp[element[0]] = "";
        setProfileError(tmp);
      }
    });

    if (profileInput.reppassword != "" && profileInput.password != "" && profileInput.username != "" ){
      if ( profileInput.password !=  profileInput.reppassword){
      setProfileError({ ...profileError, password: "paswoorden niet het zelde", reppassword: "paswoorden niet het zelde" })
      } else {
        console.log("wachtwoord wel het zelfde")
        setCurrentField("interests")
    }
  }
  }

console.log(profileError)

  const setInput = (channel, e) => {
    const tmp = { ...profileInput };
    tmp[channel] = e.target.value;
    setProfileInput(tmp);
  };



  return (
    <div>
      <Head>
        <title>Hack-tic</title>
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
            {currentField === "picture" ? 
            <div>
            <p>Kies een profielfoto</p>
            <button onClick={(e) => handleClickButton(e, "account")}>terug</button>
            <button onClick={(e) => handleClickButton(e, "account")}>klaar</button>
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
            </div>
            : ""}
           {currentField === "account" ? <button onClick={(e) => handleClickButton(e, "picture")} >Kies profielfoto</button> : "" }
           {currentField === "account" ? 
            <div>
              <label className={styles.label}>
                Gebruikersnaam
                <input
                  className={styles.input}
                  type="text"
                  name="username"
                  value={profileInput.username}
                  onChange={(value) => setInput("username", value)}
                  required
                />
              </label>
              <span>{profileError.username}</span>
            
            
              <label className={styles.label}>
                Wachtwoord
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  value={profileInput.password}
                  onChange={(value) => setInput("password", value)}
                  required
                />
              </label>
              <span>{profileError.password}</span>
              <label className={styles.label}>
                Herhaal wachtwoord
                <input
                  className={styles.input}
                  type="password"
                  name="reppassword"
                  value={profileInput.reppassword}
                  onChange={(value) => setInput("reppassword", value)}
                  required
                />
              </label>
              <span>{profileError.reppassword}</span>
            </div>
            : ""}
          {currentField === "account" ? <button onClick={(e) => handleClickButton(e, "submit")} >Volgende stappp</button> : "" }
          {currentField === "interests" ? 
            <div>
              <button onClick={(e) => handleClickButton(e, "account")}>terug</button>
              <p>Vul je profiel aan met jouw interesses</p>
              <p>Om je gebruikers-profiel verder aan te vullen hebben we nog jouw 5 favoriete interesses nodig.</p>
              <div className={styles.radiobuttons}>
                {userInterestsOptions.map((item) => (
                  <Checkbox
                    key={item}
                    item={item}
                    name={"user-interests"}
                    onClickButton={(value) => handleClickCheckbox(value)}
                  />
                ))}
              </div>
              <p>Selecteer nog 3 interesses</p>
              <input
                className={styles.button}
                type="submit"
                value="Start game as a user"
              />
            </div>
              : ""}
          </form>
        </article>
      </main>
    </div>
  );
}

export default Usersetup;
