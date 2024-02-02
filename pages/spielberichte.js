import { useEffect, useState } from 'react';
import Link from 'next/link'; // Importieren Sie die Link-Komponente
import styles from '../styles/Spielberichte.module.css';

export default function Spielberichte() {
  const [spielberichte, setSpielberichte] = useState([]);

  useEffect(() => {
    const fetchSpielberichte = async () => {
      try {
        const response = await fetch('http://localhost:8000/berichte');
        if (response.ok) {
          const data = await response.json();
          setSpielberichte(data);
        } else {
          console.error('Fehler beim Laden der Spielberichte');
        }
      } catch (error) {
        console.error('Fehler:', error);
      }
    };

    fetchSpielberichte();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Spielberichte</h1>
      <ul>
        {spielberichte.map((bericht) => (
          bericht.berichtid && (
            <li key={bericht.berichtid} className={styles.spielbericht}>
              <Link href={`/berichte/${bericht.berichtid}`}>
                <h2><a>{bericht.titel}</a></h2>
              </Link>
              <p>Gegner: {bericht.gegner}</p>
              <p>Ergebnis: {bericht.ergebnis}</p>
              <p>Ort: {bericht.ort}</p>
              <p>Spieldatum: {bericht.spieldatum}</p>
            </li>
          )
        ))}
      </ul>
    </div>
  );
}
