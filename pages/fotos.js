import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Importiere die Navbar-Komponente
import styles from '../styles/Fotos.module.css';

export default function Fotos() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const response = await fetch('https://13.53.79.151/fotos');
        if (response.ok) {
          const data = await response.json();
          setFotos(data);
        } else {
          console.error('Fehler beim Laden der Fotos');
        }
      } catch (error) {
        console.error('Fehler:', error);
      }
    };

    fetchFotos();
  }, []);

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.fotosTitle}>Fotogalerie</h1>
      </div>
      <ul className={styles.galerie}>
        {fotos.map((foto) => (
          <li key={foto.fotoid} className={styles.foto}>
            <Link href={`/fotos/${foto.fotoid}`}>
              <img src={foto.bildurl} alt={`Foto ${foto.fotoid}`} width={300} height={200} />
            </Link>
            <p className={styles.titel}>{foto.titel}</p>
          </li>
        ))}
      </ul>
      {/* Füge die Navbar hier im Footer ein */}
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
