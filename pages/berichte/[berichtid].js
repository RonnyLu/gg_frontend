import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar'; // Importiere die Navbar-Komponente
import styles from '../../styles/BerichtDetail.module.css';

export default function BerichtDetail() {
  const [berichtDetail, setBerichtDetail] = useState(null);
  const router = useRouter();
  const { berichtid } = router.query;

  useEffect(() => {
    if (berichtid) {
      fetch(`https://13.53.79.151/berichte/${berichtid}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Bericht nicht gefunden');
          }
          return response.json();
        })
        .then(data => {
          
          const [berichtid, titel, gegner, ergebnis, ort, inhalt, spieldatum, erstelltam, erstelltvon] = data;

          setBerichtDetail({
            berichtid,
            titel,
            gegner,
            ergebnis,
            ort,
            inhalt,
            spieldatum,
            erstelltam,
            erstelltvon,
          });
        })
        .catch(error => console.error('Fehler:', error));
    }
  }, [berichtid]);

  if (!berichtDetail) {
    return <div>Lädt...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Titel: {berichtDetail.titel}</h1>
        <p>Gegner: {berichtDetail.gegner}</p>
        <p>Ergebnis: {berichtDetail.ergebnis}</p>
        <p>Ort: {berichtDetail.ort}</p>
        <p>Inhalt: {berichtDetail.inhalt}</p>
        <p>Spieldatum: {berichtDetail.spieldatum}</p>
        <p>Erstellt am: {berichtDetail.erstelltam}</p>
        <p>Erstellt von: {berichtDetail.erstelltvon}</p>
      </div>
      
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
