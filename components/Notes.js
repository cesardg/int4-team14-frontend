import styles from "./Notes.module.css";
import { useState } from "react";

const Notes = ({ data }) => {
  const [notes, setNotes] = useState([]);

  console.log(data)

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (e.target.note.value !== "") {
      const temp = [...notes];
      temp.push(e.target.note.value);
      setNotes(temp);
      e.target.reset();
    }
  };

  return (
    <article className={styles.article}>
      <h2>Notities</h2>
      <p>
        Houd zelf extra notities bij en blijf je hacker altijd een stapje voor
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
