import styles from "./Notes.module.css";
import { useState } from "react";

const Notes = ({ gameData, player }) => {
  const tempArr = [];

  if (player === "user") {
    gameData.usernotes.map((noteObj) => {
      tempArr.push(noteObj.note);
    });
  } else if (player === "hacker") {
    gameData.hackernotes.map((noteObj) => {
      tempArr.push(noteObj.note);
    });
  }

  const [notes, setNotes] = useState(tempArr);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (e.target.note.value !== "") {
      const copyArr = [...notes, e.target.note.value];
      setNotes(copyArr);
      const data = {
        note: e.target.note.value,
        game: gameData.id,
      };

      console.log("id", gameData.id);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/${player}notes`,
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
      }

      e.target.reset();
    }
  };

  return (
    <article className={styles.article}>
      <h2>Notities</h2>
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
        <button type="submit" className={styles.button}>
          +
        </button>
      </form>
    </article>
  );
};

export default Notes;
