import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar'; // Importiere die Navbar-Komponente
import styles from '../../styles/FotoDetail.module.css';

export default function FotoDetail() {
  const [fotoDetail, setFotoDetail] = useState(null);
  const router = useRouter();
  const { fotoid } = router.query;

  useEffect(() => {
    if (fotoid) {
      fetch(`http://13.53.79.151/fotos/${fotoid}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Foto nicht gefunden');
          }
          return response.json();
        })
        .then((data) => {
          // Extrahieren Sie die Datenfelder, die Sie benötigen
          const [fotoid, titel, beschreibung, bildurl, hochgeladenam, hochgeladenvon] = data;

          setFotoDetail({
            fotoid,
            titel,
            beschreibung,
            bildurl,
            hochgeladenam,
            hochgeladenvon,
          });
        })
        .catch((error) => console.error('Fehler:', error));
    }
  }, [fotoid]);

  if (!fotoDetail) {
    return <div>Lädt...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Titel: {fotoDetail.titel}</h1>
      <div className={styles.container2}>
        <img src={fotoDetail.bildurl} alt={`Foto ${fotoid}`} />
      </div>
      <p className={styles.description}>Beschreibung: {fotoDetail.beschreibung}</p>
      <p className={styles.dateinfo}>Hochgeladen am: {fotoDetail.hochgeladenam}</p>
      <p className={styles.dateinfo}>Hochgeladen von: {fotoDetail.hochgeladenvon}</p>
      {/* Füge die Navbar hier im Footer ein */}
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
