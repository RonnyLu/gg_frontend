import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BerichtDetail() {
  const [berichtDetail, setBerichtDetail] = useState(null);
  const router = useRouter();
  const { berichtid } = router.query;

  useEffect(() => {
    if (berichtid) {
      console.log('Bericht ID:', berichtid); // Überprüfen Sie die ausgegebene Bericht-ID
      fetch(`http://localhost:8000/berichte/${berichtid}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Bericht nicht gefunden');
          }
          return response.json();
        })
        .then(data => {
          console.log('Bericht Detail Daten:', data); // Überprüfen Sie die erhaltenen Daten

          // Extrahieren Sie die Datenfelder, die Sie benötigen
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
    <div>
      <h1>{berichtDetail.berichtid}</h1>
      <p>Titel: {berichtDetail.titel}</p>
      <p>Gegner: {berichtDetail.gegner}</p>
      <p>Ergebnis: {berichtDetail.ergebnis}</p>
      <p>Ort: {berichtDetail.ort}</p>
      <p>Inhalt: {berichtDetail.inhalt}</p>
      <p>Spieldatum: {berichtDetail.spieldatum}</p>
      <p>Erstellt am: {berichtDetail.erstelltam}</p>
      <p>Erstellt von: {berichtDetail.erstelltvon}</p>
    </div>
  );
}
