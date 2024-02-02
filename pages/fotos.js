// pages/fotos.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Fotos.module.css';

export default function Fotos() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchFotos = async () => {
      try {
        const response = await fetch('http://localhost:8000/fotos');
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
      <h1>Fotos</h1>
      <ul>
        {fotos.map((foto) => (
          <li key={foto.fotoid}>
            <Link href={`/fotos/${foto.fotoid}`}>
              
                <img src={foto.bildurl} alt={`Foto ${foto.fotoid}`} width={300} height={200} />
              
            </Link>
            <p>{foto.titel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


