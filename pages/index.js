// index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  // Navigation-Handler
  const handleSpielberichteClick = () => {
    router.push('/berichte');
  };
  // Navigation-Handler für Fotos
  const handleFotosClick = () => {
    router.push('/fotos');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gaildorf Goals</title>
        <meta name="description" content="Willkommen bei Gaildorf Goals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Herzlich Willkommen zu Gaildorf Goals</h1>
          <p className={styles.description}>Die Heimat des regionalen Fußballs</p>
          <img src="/images/TSVLogo1.svg" alt="TSV Gaildorf Logo" className={styles.logo} />
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.interactive}`} onClick={handleSpielberichteClick}>
            <h2>Spielberichte &rarr;</h2>
            <p>Erfahren Sie mehr über unsere letzten Spiele.</p>
          </div>

          <div className={`${styles.card} ${styles.interactive}`} onClick={handleFotosClick}>
            <h2>Fotogalerie &rarr;</h2>
            <p>Betrachten Sie unsere Galerie mit den Höhepunkten der Saison.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/login">
          <p className={styles.loginButton}>Login</p>
        </Link>
      </footer>
    </div>
  );
}
