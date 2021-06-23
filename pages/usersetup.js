import styles from "./../styles/Setup.module.css";
import Image from "next/image";
import { useState, useCallback } from "react";
import Checkbox from "../components/Checkbox";
import Radiobutton from "../components/Radiobutton";
import WindowLayout from "../components/WindowLayout";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Router from "next/router";
import { useChannel } from "../components/ChatReactEffect";

const Usersetup = () => {
  const router = useRouter();
  const gamecode = router.query.gamecode;
  const profilePicturesOptions = ["pf1", "pf2", "pf3", "pf4"];
  const userInterestsOptions = [
    "knutselen",
    "sporten",
    "buiten spelen",
    "Roblox",
    "Minecraft",
    "Brawl Stars",
    "Youtube",
    "slijm maken",
    "TikTok",
  ];
  const [userInterests, setUserInterests] = useState([]);
  const [profilePicture, setProfilePicture] = useState("pf1");
  const [profilePass, setProfilePass] = useState(["", "", "", "", "", ""]);
  const [passField, setPassField] = useState();
  const [profileInput, setProfileInput] = useState({
    username: "",
    password: "",
  });
  const [profileError, setProfileError] = useState({
    username: "",
    password: "",
  });
  const [currentField, setCurrentField] = useState("account");

  const handleClickCheckbox = (value) => {
    if (userInterests.includes(value)) {
      const copyArr = userInterests.filter((e) => e !== value);
      setUserInterests(copyArr);
    } else {
      const copyArr = [...userInterests, value];
      setUserInterests(copyArr);
    }
  };

  // channel
  const [channel] = useChannel(gamecode, (message) => {
    console.log("verstuur vanaf user setup", message);
  });

  const fetchGameId = async (code) => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/games/?gamecode=${code}`
    );
    const res = await req.json();
    return res[0].id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      password: profileInput.password,
      username: profileInput.username,
      interests: userInterests.join("-"),
      picture: profilePicture,
    };

    e.target.reset();
    onSubmit(data);
  };

  const onSubmit = async (data) => {
    const id = await fetchGameId(gamecode);
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
      console.log("joepie, stuur ook door naar ably");
      channel.publish({ name: gamecode, data: `updatedata-user-hacker` });
      router.push(`/user/${gamecode}`);
    }
  };

  const handleClickButton = (e, action) => {
    e.preventDefault();
    if (action === "submit") {
      validateForm(e);
    } else {
      setCurrentField(action);
    }
  };

  const handelChangePas = (value, index) => {
    const copyArr = [...profilePass];
    copyArr[index] = value.target.value;
    setProfilePass(copyArr);
    const tmp = { ...profileInput };
    tmp["password"] = copyArr.join("");
    setProfileInput(tmp);
    const newIndex = Number(index) + 1;
    if (value.target.value) {
      setPassField(newIndex);
    }
  };

  const validateForm = () => {
    const tmp = { ...profileError };
    const entries = Object.entries(profileInput);
    entries.forEach((element) => {
      if (element[1] === "") {
        tmp[element[0]] = `${element[0]} niet ingevuld`;
        setProfileError(tmp);
      } else {
        tmp[element[0]] = "";
        setProfileError(tmp);
      }
    });

    if (
      profileInput.reppassword != "" &&
      profileInput.password != "" &&
      profileInput.username != ""
    ) {
      const length = profileInput.password.split("").length;
      const numbersOrCapitals = checkForNumbersAndCapitals(
        profileInput.password.split("")
      );

      if (length != 6) {
        tmp["password"] = `paswoord moet bestaan uit 6 karakters`;
      } else {
        if (numbersOrCapitals) {
          tmp[
            "password"
          ] = `paswoord mag nog geen nummers of hoofdletters bevaten`;
        } else {
          setCurrentField("interests");
        }
      }
    }
  };

  const checkForNumbersAndCapitals = (password) => {
    let error = false;
    password.forEach((element) => {
      if (element == element.toUpperCase()) {
        error = true;
      }
      if (!isNaN(element)) {
        error = true;
      }
    });
    console.log(error);
    return error;
  };

  const setInput = (channel, e) => {
    const tmp = { ...profileInput };
    tmp[channel] = e.target.value;
    setProfileInput(tmp);
  };

  const handleClickBack = () => {
    if (currentField === "account") {
      Router.push("/");
    } else if (currentField === "interests") {
      setCurrentField("account");
    } else if (currentField === "picture") {
      setCurrentField("account");
    }
  };

  const callbackRef = useCallback(
    (field) => (inputElement) => {
      if (field == passField && inputElement) {
        inputElement.focus();
      }
    },
    [passField]
  );

  return (
    <Layout style="user">
      <section className={styles.section}>
        <div className={styles.backButton}>
          <a onClick={handleClickBack}>
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
          <WindowLayout
            title="account aanmaken"
            bg="var(--brown)"
            border="var(--green)"
          >
            <div className={styles.container}>
              {currentField === "account" ? (
                <p className={styles.intro}>
                  Maak je user-profiel en kies je eerste wachtwoord
                </p>
              ) : (
                ""
              )}
              {currentField === "picture" ? (
                <p className={styles.intro}>Kies een profielfoto</p>
              ) : (
                ""
              )}
              {currentField === "interests" ? (
                <p className={styles.intro}>
                  Vul je profiel aan met jouw interesses
                </p>
              ) : (
                ""
              )}
              {currentField === "account" ? (
                <p className={styles.info}>
                  Beveilig je account met een sterk wachtwoord van letters. De
                  hacker zal dit wachtwoord proberen te kraken maar gelukkig kan
                  jij je wachtwoord later versterken met extra letters,
                  hoofdletters en cijfers.
                </p>
              ) : (
                ""
              )}
              {currentField === "interests" ? (
                <p className={styles.info}>
                  Om je gebruikers-profiel verder aan te vullen hebben we nog
                  jouw 3 favoriete interesses nodig.
                </p>
              ) : (
                ""
              )}
              <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formContainer}>
                  {currentField === "account" || currentField === "picture" ? (
                    <legend className={styles.legend}>
                      {currentField === "picture" ? (
                        ""
                      ) : (
                        <div
                          onClick={(e) => handleClickButton(e, "picture")}
                          className={styles.img}
                        >
                          <Image
                            src={`/assets/img/userpics/${profilePicture}.svg`}
                            alt="Picture of the user"
                            width={331}
                            height={212}
                          />
                        </div>
                      )}
                      {currentField === "picture" ? (
                        <div>
                          <div className={styles.radiobuttons}>
                            {profilePicturesOptions.map((item) => (
                              <Radiobutton
                                key={item}
                                item={item}
                                defaultCheck={profilePicture}
                                folder={"userpics"}
                                name={"profile-picture"}
                                onClickButton={(value) => {
                                  setProfilePicture(value),
                                    setCurrentField("account");
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {currentField === "account" ? (
                        <button
                          className={styles.secButton}
                          onClick={(e) => handleClickButton(e, "picture")}
                        >
                          Kies je profielfoto
                        </button>
                      ) : (
                        ""
                      )}
                    </legend>
                  ) : (
                    ""
                  )}

                  {currentField === "account" ? (
                    <legend className={styles.legend}>
                      <label className={styles.label}>
                        Gebruikersnaam
                        <span className={styles.error}>
                          {profileError.username}
                        </span>
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
                        Wachtwoord
                        <span className={styles.error}>
                          {profileError.password}
                        </span>
                        <span className={styles.passwordInfo}>
                          Je wachtwoord moet
                          <span className={styles.bold}>
                            exact 6 kleine letters
                          </span>
                          bevatten. Later kan je ook hoofdletters en cijfers toevoegen.
                        </span>
                        <div className={styles.passwordWrapper}>
                          <input
                            className={styles.smallInput}
                            type="text"
                            maxLength="1"
                            name="password"
                            ref={callbackRef(0)}
                            value={profilePass[0]}
                            onChange={(value) => handelChangePas(value, "0")}
                            required
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                          <span className={styles.smallInputStripe}>-</span>
                          <input
                            className={styles.smallInput}
                            type="text"
                            name="password"
                            maxLength="1"
                            ref={callbackRef(1)}
                            value={profilePass[1]}
                            onChange={(value) => handelChangePas(value, "1")}
                            required
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                          <span className={styles.smallInputStripe}>-</span>
                          <input
                            className={styles.smallInput}
                            type="text"
                            name="password"
                            maxLength="1"
                            ref={callbackRef(2)}
                            value={profilePass[2]}
                            onChange={(value) => handelChangePas(value, "2")}
                            required
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                          <span className={styles.smallInputStripe}>-</span>
                          <input
                            className={styles.smallInput}
                            type="text"
                            name="password"
                            maxLength="1"
                            ref={callbackRef(3)}
                            value={profilePass[3]}
                            onChange={(value) => handelChangePas(value, "3")}
                            required
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                          <span className={styles.smallInputStripe}>-</span>
                          <input
                            className={styles.smallInput}
                            type="text"
                            name="password"
                            maxLength="1"
                            ref={callbackRef(4)}
                            value={profilePass[4]}
                            onChange={(value) => handelChangePas(value, "4")}
                            required
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                          <span className={styles.smallInputStripe}>-</span>
                          <input
                            className={styles.smallInput}
                            type="text"
                            name="password"
                            maxLength="1"
                            ref={callbackRef(5)}
                            value={profilePass[5]}
                            onChange={(value) => handelChangePas(value, "5")}
                            required
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                        </div>
                      </label>
                    </legend>
                  ) : (
                    ""
                  )}

                  {currentField === "interests" ? (
                    <legend className={styles.checkBoxLegend}>
                      <div className={styles.checkboxes}>
                        {userInterestsOptions.map((item) => (
                          <Checkbox
                            key={item}
                            item={item}
                            name={"user-interests"}
                            onClickButton={(value) =>
                              handleClickCheckbox(value)
                            }
                          />
                        ))}
                      </div>

                      {userInterests.length < 3 ? (
                        <p className={styles.checkBoxInfo}>
                          Selecteer nog minstens{" "}
                          <span className={styles.checkBoxInfoNummer}>
                            {" "}
                            {3 - userInterests.length}{" "}
                          </span>{" "}
                          interesses
                        </p>
                      ) : (
                        <div className={styles.primButtonContainer}>
                        <input
                          className={styles.primButton}
                          type="submit"
                          value="Naar het spelbord ->"
                        />
                        </div>
                      )}
                    </legend>
                  ) : (
                    ""
                  )}
                </div>
                {currentField === "account" ? (
                  <button
                    className={styles.primButton}
                    onClick={(e) => handleClickButton(e, "submit")}
                  >
                    selecteer je interesses{" "}
                    <Image
                      src={`/assets/img/arrow.svg`}
                      alt="arrow"
                      width={30}
                      height={12}
                    />{" "}
                  </button>
                ) : (
                  ""
                )}
              </form>
            </div>
          </WindowLayout>
        </div>
        <div className={styles.spacer}></div>
      </section>
    </Layout>
  );
};

export default Usersetup;
