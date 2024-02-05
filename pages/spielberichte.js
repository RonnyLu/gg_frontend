import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Importiere die Navbar-Komponente
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

  useEffect(() => {
    // Füge das Skript zur Seite hinzu und warte, bis es geladen ist
    const widgetScript = document.createElement('script');
    widgetScript.type = 'text/javascript';
    widgetScript.src = 'https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js';
    widgetScript.async = true;
    widgetScript.onload = () => {
      new fussballdeWidgetAPI().showWidget('widget1', '02OGV05O04000000VUM1DNRAVUSCF6TO');
    };

    document.body.appendChild(widgetScript);

    return () => {
      document.body.removeChild(widgetScript);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.spielberichteContainer}>
        <h1 className={styles.titel}>Spielberichte</h1>
        <ul className={styles['spielbericht ul']}>
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
      {/* Füge die Navbar hier im Footer ein */}
      <footer>
        <Navbar />
      </footer>
      <div id="widget1"></div>
    </div>
  );
}
