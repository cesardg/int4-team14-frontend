import Head from 'next/head'
import styles from './../styles/User.module.css'

export default function User() {


  return (
    <div>
      <Head>
        <title>Us3r vs H4ck3r</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className="title">Us3r</h1>
        <article>
          <h2>Form</h2>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)} >

            <label className={styles.label} >
              Naam
              <input className={styles.input} type="text" name="surname" required />
            </label>

            <label className={styles.label} >
              Achternaam
              <input className={styles.input} type="text" name="name" required />
            </label>

            <label className={styles.label} >
              Username
              <input className={styles.input} type="text" name="username" required />
            </label>

            <label className={styles.label} >
              Passwoord
              <input className={styles.input} type="text" name="password" required />
            </label>

            <label className={styles.label} >
              Herhaal Paswoord
              <input className={styles.input} type="password" name="reppassword" required />
            </label>

  
        
            <input className={styles.button} type="submit" value="Start game as a user" />
          </form>
        </article>
      </main>

    </div>
  )
}
