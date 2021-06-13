import styles from './../styles/Usersetup.module.css';
import Image from 'next/image';
import {useState} from 'react';
import Checkbox from '../components/Checkbox';
import Radiobutton from '../components/Radiobutton';
import WindowLayout from '../components/WindowLayout'
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Link from "next/link";

const Usersetup = () => {

  const router = useRouter()
  const gamecode = router.query.gamecode
  const profilePicturesOptions = ["pf1", "pf2", "pf3", "pf4" ];
  const userInterestsOptions = ["paardrijden", "knutselen", "roblox", "koken"];  
  const [userInterests, setUserInterests] = useState([]);
  const [profilePicture, setProfilePicture] = useState("pf1");
  const [profilePass, setProfilePass] = useState(["","", "", "", "", ""]);
  const [passField, setPassField] = useState();
  const [profileInput, setProfileInput] = useState({username: "", password:"", email:""});
  const [profileError, setProfileError] = useState({username: "", password:"", email:""});
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
   
      userInterests.forEach(userInterest => {
        interests = interests + "-" + userInterest;
      });
      const data = {
        password: profileInput.password,
        username: profileInput.username,
        interests: interests,
        picture: profilePicture,
        email: profileInput.email
      };

    e.target.reset();
    onSubmit(data);
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

  const handelChangePas = (value, index) => {
    const copyArr = [...profilePass];
    copyArr[index] = value.target.value;
    setProfilePass(copyArr);
    setPassField(index + 1);
    const tmp = { ...profileInput };
    tmp["password"] = copyArr.join("");
    setProfileInput(tmp);
    }



  const validateForm = () => {

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
      const length = profileInput.password.split("").length;
      const numbersOrCapitals = checkForNumbersAndCapitals(profileInput.password.split(""))

      if (length != 6) {
          tmp["password"] = `paswoord moet bestaan uit 6 karakters`
      } else {
        if (numbersOrCapitals) {
         tmp["password"] = `paswoord mag nog geen nummers of hoofdletters bevaten`
        } else {
            setCurrentField("interests")
       }
      }
    }
  }

  const checkForNumbersAndCapitals =  (password) => {
  let error = false
    password.forEach(element => {
        console.log(element)
        if (element == element.toUpperCase()) {error = true}
        if (!isNaN(element)) {error = true}
    });
   console.log(error)
   return error
  }

  const setInput = (channel, e) => {
    const tmp = { ...profileInput };
    tmp[channel] = e.target.value;
    setProfileInput(tmp);
  };



  return (
  <Layout>
    <section className={styles.section}>
      <div className={styles.backButton}>
         <Link href="/">
            <a className={styles.logo}>
              <Image
                src={`/assets/img/backbutton.svg`}
                alt="Picture of the user"
                width={75}
                height={75}
               />
            <p className={styles.back}>Terug</p>
          </a>
        </Link>
      </div>
      <h1 className={styles.title}>Gebruiker pagina</h1>
        <div className={styles.layoutWrapper}>
        <WindowLayout title="account aanmaken">
          <div className={styles.container}>
          <p className={styles.intro}>Maak je user-profiel en kies je eerste wachtwoord</p>
          <p className={styles.info}>Beveilig je account met een sterk wachtwoord van letters. De hacker zal dit wachtwoord proberen te kraken maar gelukkig kan jij je wachtwoord later  versterken met extra letters, hoofdletters en cijfers.</p>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formContainer}>
            <legend className={styles.legend}>
                <div className={styles.img}>
                  <Image
                    src={`/assets/img/userpics/${profilePicture}.svg`}
                    alt="Picture of the user"
                    width={331}
                    height={212}
                  />
                  </div>
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
              {currentField === "account" ? <button className={styles.secButton} onClick={(e) => handleClickButton(e, "picture")} >Kies je profielfoto</button> : "" }
          </legend>
         
          {currentField === "account" ? 
           <legend className={styles.legend}>
              <label  className={styles.label}>
                Gebruikersnaam
                     <span className={styles.error}>{profileError.username}</span>
                <input
                
                  className={styles.input}
                  type="text"
                  name="username"
                  value={profileInput.username}
                  onChange={(value) => setInput("username", value)}
                  required
                />
              </label>
          <label className={styles.label}>
                Email adres
                <span className={styles.error}>{profileError.email}</span>
                <input
                  className={styles.input}
                  type="email"
                  name="mail"
                  value={profileInput.email}
                  onChange={(value) => setInput("email", value)}
                  required
                />
              </label>
            
            
              <label className={styles.label}>
                Wachtwoord
                <span className={styles.error}>{profileError.password}</span>
                <span  className={styles.passwordInfo}>Je wachtwoord moet exact 6 kleine letters bevatten. Hoofdletters, leestekens of speciale tekens zijn niet toegelaten.</span>
                <div className={styles.passwordWrapper}>
                <input
                  className={styles.smallInput}
                  type="text"
                  maxLength="1"
                  name="password"
                  value={profilePass[0]}
                  onChange={(value) => handelChangePas(value, "0")}
                  required
                />
               <span className={styles.smallInputStripe}>-</span>
                 <input
                  className={styles.smallInput}
                  type="text"
                  name="password"
                  maxLength="1"
                  value={profilePass[1]}
                  onChange={(value) => handelChangePas(value, "1")}
                  required
                />
                   <span className={styles.smallInputStripe}>-</span>
                 <input
                  className={styles.smallInput}
                  type="text"
                  name="password"
                  maxLength="1"
                  value={profilePass[2]}
                  onChange={(value) => handelChangePas(value, "2")}
                  required
                />
                   <span className={styles.smallInputStripe}>-</span>
                 <input
                  className={styles.smallInput}
                  type="text"
                  name="password"
                  maxLength="1"
                  value={profilePass[3]}
                  onChange={(value) => handelChangePas(value, "3")}
                  required
                />
                   <span className={styles.smallInputStripe}>-</span>
                 <input
                  className={styles.smallInput}
                  type="text"
                  name="password"
                  maxLength="1"
                  value={profilePass[4]}
                  onChange={(value) => handelChangePas(value, "4")}
                  required
                />
                    <span className={styles.smallInputStripe}>-</span>
                 <input
                  className={styles.smallInput}
                  type="text"
                  name="password"
                  maxLength="1"
                  value={profilePass[5]}
                  onChange={(value) => handelChangePas(value, "5")}
                  required
                />
                </div>
              </label>
             
    
          
            </legend>
            : ""}
       
        
          {currentField === "interests" ? 
            <legend>
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
        
            {userInterests.length < 3 ? 
              <p>Selecteer nog minstens {3 - (userInterests.length)} interesses</p>
              :
              <input
                className={styles.button}
                type="submit"
                value="Start game as a user"
              />
            }
            </legend>
              : ""}
              </div>
                {currentField === "account" ? <button className={styles.primButton} onClick={(e) => handleClickButton(e, "submit")} >selecteer je interesses  <Image
                    src={`/assets/img/arrow.svg`}
                    alt="arrow"
                    width={30}
                    height={12}
                  /> </button> : "" }
          </form>
          </div>
    </WindowLayout>
    </div>
    <div className={styles.spacer}></div>
    </section>
  </Layout>
  );
}

export default Usersetup;
