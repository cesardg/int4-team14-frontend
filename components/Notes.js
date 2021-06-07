import styles from "./../styles/User.module.css";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState();

  console.log(notes);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setNotes([...notes, ...note]);
    console.log("notes", notes);
  };

  return (
    <article>
      <h2 className={styles.article}>Notities</h2>
      <p>
        Houd zelf extra notities bij en blijf je hacker altijd een stapje voor
      </p>
      {notes.length > 0 ? (
        <ul>
         {notes.forEach(note => <li>{note}</li>)} 
        </ul>
      ) : (
        <p>
          Je hebt nog geen notities. Je kan op elk moment je eigen notities
          maken
        </p>
      )}

      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          value={note}
          placeholder="Maak een notitie..."
          onChange={(e) => setNote(e.target.value)}
          className={styles.textarea}
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
