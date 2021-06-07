import styles from "./Notes.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Notes = ({ gameData, player }) => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  console.log("gamedata", gameData);
  console.log("player", player);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (e.target.note.value !== "") {
      const temp = [...notes];
      temp.push(e.target.note.value);
      setNotes(temp);
      e.target.reset();
      
      let data = null;

      if (player === "hacker") {
        data = {
          note: e.target.note.value,
          hackerinfo: gameData.hackerinfo,
        };
      } else if (player === "user") {
        data = {
          note: e.target.note.value,
          userinfo: gameData.userinfo,
        };
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/${player}notes/`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("joepie");
        router.push(`/${player}/${gameData.gamecode}`);
      }
    }
  };

  return (
    <article>
      <h2 className={styles.article}>Notities</h2>
      <p>
        Houd zelf extra notities bij en blijf je {player} altijd een stapje voor
      </p>
      {notes.length > 0 ? (
        <ul>
         {notes.map((note, index) => <li key={index}>{note}</li>)} 
        </ul>
      ) : (
        <p>
          Je hebt nog geen notities. Je kan op elk moment je eigen notities
          maken
        </p>
      )}

      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          placeholder="Maak een notitie..."
          className={styles.textarea}
          name="note"
        ></textarea>
        <button
          type="submit"
          className={styles.button}        >
          +
        </button>
      </form>
    </article>
  );
};

export default Notes;
