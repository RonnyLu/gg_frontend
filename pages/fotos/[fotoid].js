// pages/fotos/[fotoid].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function FotoDetail() {
  const [fotoDetail, setFotoDetail] = useState(null);
  const router = useRouter();
  const { fotoid } = router.query;

  useEffect(() => {
    if (fotoid) {
      fetch(`http://localhost:8000/fotos/${fotoid}`)
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
    <div>
      <h1>Titel: {fotoDetail.titel}</h1>
      <img src={fotoDetail.bildurl} alt={`Foto ${fotoid}`} width={800} height={400}/>
      <p>Beschreibung: {fotoDetail.beschreibung}</p>
      <p>Hochgeladen am: {fotoDetail.hochgeladenam}</p>
      <p>Hochgeladen von: {fotoDetail.hochgeladenvon}</p>
    </div>
  );
}

