import Head from 'next/head';
import styles from './../styles/Setup.module.css';
import Image from 'next/image';
import {useState} from 'react';
import Radiobutton from '../components/Radiobutton';
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import WindowLayout from '../components/WindowLayout';
import Router from 'next/router';

const Hackersetup = () => {

  const router = useRouter()
  const gamecode = router.query.gamecode
  const profilePicturesOptions = ["user", "hacker" ];
  const [profilePicture, setProfilePicture] = useState("user");
  const [currentField, setCurrentField] = useState("account");
  const [profileError, setProfileError] = useState({username: "", email:""});
  const [profileInput, setProfileInput] = useState({username: "",  email:""});

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
      router.push(`/hacker/${gamecode}`)
    }
  };


  const handleClickBack = () => {
    if (currentField === "account"){
      Router.push('/')
    } else if (currentField === "interests"){
      setCurrentField("account")
    } else if (currentField === "picture"){
      setCurrentField("account")
    }
  }



  return (
  <Layout style="hacker">
    <section className={styles.section}>
      <div className={styles.backButton}>
 
            <a onClick={handleClickBack} className={styles.logo}>
              <Image
                src={`/assets/img/backbutton.svg`}
                alt="Picture of the user"
                width={75}
                height={75}
               />
            <p className={styles.back}>Terug</p>
          </a>
     
      </div>
      <h1 className={styles.title}>Gebruiker pagina</h1>
        <div className={styles.layoutWrapper}>
        <WindowLayout title="account aanmaken">
          <div className={styles.container}>
          {currentField === "account"? <p className={styles.intro}>Maak je user-profiel en kies je eerste wachtwoord</p> : ""}
          {currentField === "picture"? <p className={styles.intro}>Kies een profielfoto</p> : ""}
          {currentField === "interests"? <p className={styles.intro}>Vul je profiel aan met jouw interesses</p> : ""}
          {currentField === "account"?   <p className={styles.info}>Beveilig je account met een sterk wachtwoord van letters. De hacker zal dit wachtwoord proberen te kraken maar gelukkig kan jij je wachtwoord later  versterken met extra letters, hoofdletters en cijfers.</p> : ""}
          {currentField === "interests"? <p className={styles.info}>Om je gebruikers-profiel verder aan te vullen hebben we nog jouw 3 favoriete interesses nodig.</p>  : ""}
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formContainer}>
              {currentField === "account" || currentField === "picture" ?  
            <legend className={styles.legend}>
                {currentField === "picture" ?  "" : 
                <div onClick={(e) => handleClickButton(e, "picture")} className={styles.img}>
                  <Image
                    src={`/assets/img/userpics/${profilePicture}.svg`}
                    alt="Picture of the user"
                    width={331}
                    height={212}
                  />
                  </div>
                  }
                {currentField === "picture" ? 
                <div>
                  <div className={styles.radiobuttons}>
                    {profilePicturesOptions.map((item) => (
                      <Radiobutton
                        key={item}
                        item={item}
                        name={"profile-picture"}
                        onClickButton={(value) => {setProfilePicture(value), setCurrentField("account")}}
                      />
                    ))}
                    </div>
                </div>
                : ""}
            {currentField === "account" ?  <button className={styles.secButton} onClick={(e) => handleClickButton(e, "picture")} >Kies je profielfoto</button> : ""}
          </legend>
          : "" }
         
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
            
    
             
  
          
            </legend>
            : ""}
       
        
          {currentField === "interests" ? 
            <legend className={styles.checkBoxLegend}>
  
                
            {userInterests.length < 3 ? 
              <p className={styles.checkBoxInfo} >Selecteer nog minstens <span className={styles.checkBoxInfoNummer}> {3 - (userInterests.length)} </span> interesses</p>
              :
              <input
                className={styles.primButton}
                type="submit"
                value="Naar het spelbord ->"
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
  )
}

export default Hackersetup;
