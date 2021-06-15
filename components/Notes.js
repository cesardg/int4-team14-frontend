import styles from "./Notes.module.css";
import GameWindowLayout from "./GameWindowLayout";
import { useState } from "react";
import Image from "next/image";

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
    <GameWindowLayout title="Notities" bg="var(--brown)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Notities</p>
        <p className={styles.text}>
          Houd hier je notities bij en blijf je {player} altijd een stapje voor
        </p>
        {notes.length > 0 ? (
          <ul className={styles.notesList}>
            {notes.map((note, index) => (
              <li key={index} className={styles.notesListItem}>
                {note}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            Je hebt nog geen notities. Je kan op elk moment je eigen notities
            maken
          </p>
        )}
      </div>

      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          placeholder="Maak een notitie..."
          className={styles.textarea}
          name="note"
        ></textarea>
        <button type="submit" className={styles.button}>
          <Image
            src={`/assets/img/backbutton.svg`}
            alt="Picture of the user"
            width={30}
            height={30}
          />
        </button>
      </form>
    </GameWindowLayout>
  );
};

export default Notes;
