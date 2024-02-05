import React from 'react';
import styles from '../styles/navbar.module.css';


function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><a href="/">Startseite</a></li>
        <li className={styles.li}><a href="/berichte">Spielberichte</a></li>
        <li className={styles.li}><a href="/fotos">Fotogalerie</a></li>
      </ul>
    </nav>
  );
}



export default Navbar;
