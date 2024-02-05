// index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Stelle sicher, dass du eine entsprechende CSS-Datei hast
import { useRouter } from 'next/router'; // Füge next/router hinzu

export default function Home() {
  const router = useRouter(); // Initialisiere den Router

  const handleSpielberichteClick = () => {
    router.push('/berichte'); // Navigiere zur Spielberichte-Seite
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gaildorf Goals</title>
        <meta name="description" content="Willkommen bei Gaildorf Goals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Herzlich Willkommen zu Gaildorf Goals</h1>
        <p className={styles.description}>Muss ich noch überlegen</p>
        
        {/* Hier müsstest du dein Logo einfügen */}
        <img src="/images/TSVLogo1.svg" alt="TSV Gaildorf Logo" className={styles.logo} width={300} height={200} />

        {/* Navigationsbuttons */}
        <div className={styles.grid}>
          {/* Verwende die handleSpielberichteClick-Funktion, um zur Spielberichte-Seite zu navigieren */}
          <div className={styles.card} onClick={handleSpielberichteClick}>
            <h2>Spielberichte &rarr;</h2>
          </div>
       

        <Link href="/fotos">
            <div className={styles.card}>
              <h2>Fotos &rarr;</h2>
            </div>
          </Link>
        </div>
      </main>


      <footer className={styles.footer}>
        {/* Login-Button */}
        <Link href="/login">
          <div className={styles.loginButton}>Login</div>
        </Link>
      </footer>
    </div>
  );
}
