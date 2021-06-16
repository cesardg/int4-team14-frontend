import styles from "./Notes.module.css";
import GameWindowLayout from "./GameWindowLayout";
import Image from "next/image";

const Notes = ({ notes, player, handleFormSubmission }) => {


  return (
    <GameWindowLayout title="Notities" bg="var(--brown)" border="var(--green)">
      <div className={styles.container}>
        <p className={styles.title}>Notities</p>
        <p className={styles.text}>
          Houd hier je notities bij en blijf je { player === "user" ? "hacker" : "gebruiker" } altijd een stapje voor
        </p>
        {notes.length > 0 ? (
          <ul className={styles.notesList}>
            {notes.map((note, index) => (
              <li key={index} className={styles.notesListItem}>
                {note.note}
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
