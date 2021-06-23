// styling
import styles from "./../styles/Setup.module.css";
// components
import Radiobutton from "../components/Radiobutton";
import Layout from "../components/Layout";
import WindowLayout from "../components/WindowLayout";
import { useChannel } from "../components/ChatReactEffect";
// imports
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const Hackersetup = () => {
  const router = useRouter();
  const gamecode = router.query.gamecode;
  const profilePicturesOptions = ["pf1", "pf2", "pf3", "pf4"];
  const [profilePicture, setProfilePicture] = useState("pf1");
  const [currentField, setCurrentField] = useState("account");
  const [profileError, setProfileError] = useState({ username: "" });
  const [profileInput, setProfileInput] = useState({ username: "" });

  // channel
  const [channel] = useChannel(gamecode, (message) => {
    console.log("verstuur vanaf hacker setup", message);
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
      username: profileInput.username,
      picture: profilePicture,
    };
    e.target.reset();
    onSubmit(data);
  };

  const onSubmit = async (data) => {
    const id = await fetchGameId(gamecode);
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
      console.log("joepie, stuur ook door naar ably");
      channel.publish({ name: gamecode, data: `updatedata-hacker-user` });
      router.push(`/hacker/${gamecode}`);
    }
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

  const setInput = (channel, e) => {
    const tmp = { ...profileInput };
    tmp[channel] = e.target.value;
    setProfileInput(tmp);
  };

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
            <p className={styles.hackerBack}>Terug</p>
          </a>
        </div>
        <h1 className={styles.title}>Gebruiker pagina</h1>
        <div className={styles.layoutWrapper}>
          <WindowLayout
            title="account aanmaken"
            bg="var(--black)"
            border="var(--green)"
          >
            <div className={styles.container}>
              {currentField === "account" ? (
                <p className={styles.hackerIntro}>
                  Maak je hacker-profiel en kies een goede schuilnaam
                </p>
              ) : (
                ""
              )}
              {currentField === "picture" ? (
                <p className={styles.hackerIntro}>Kies een profielfoto</p>
              ) : (
                ""
              )}
              <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formContainer}>
                  <legend className={styles.legend}>
                    {currentField === "picture" ? (
                      ""
                    ) : (
                      <div
                        onClick={() => setCurrentField("picture")}
                        className={styles.img}
                      >
                        <Image
                          src={`/assets/img/hackerpics/${profilePicture}.svg`}
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
                              folder={"hackerpics"}
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
                        onClick={(e) => setCurrentField("picture")}
                      >
                        Kies je profielfoto
                      </button>
                    ) : (
                      ""
                    )}
                  </legend>

                  {currentField === "account" ? (
                    <legend className={styles.legend}>
                      <label className={styles.hackerLabel}>
                        Gebruikersnaam
                        <span className={styles.error}>
                          {profileError.username}
                        </span>
                        <span className={styles.usernameInfo}>
                          Elke succesvolle hacker heeft een schuilnaam nodig, zo kan
                          de computerpolitie jou niet snel ontdekken en
                          ontmaskeren
                        </span>
                        <input
                          className={styles.hackerInput}
                          type="text"
                          name="username"
                          value={profileInput.username}
                          onChange={(value) => setInput("username", value)}
                          required
                        />
                      </label>
                    </legend>
                  ) : (
                    ""
                  )}
                </div>
                {currentField === "account" ? (
                  <input
                    className={styles.hackerPrimButton}
                    type="submit"
                    value="Naar het spelbord ->"
                  />
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

export default Hackersetup;
