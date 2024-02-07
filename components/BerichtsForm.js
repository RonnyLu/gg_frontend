import { useState } from 'react';

export default function ErstelleBericht() {
  const [bericht, setBericht] = useState({
    titel: '',
    gegner: '',
    ergebnis: '',
    ort: '',
    inhalt: '',
    spieldatum: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBericht((prevBericht) => ({
      ...prevBericht,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    
    console.log('Berichtdaten:', bericht);

    
  };

  return (
    <div>
      <h1>Erstelle einen Bericht</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titel">Titel:</label>
          <input
            type="text"
            id="titel"
            name="titel"
            value={bericht.titel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gegner">Gegner:</label>
          <input
            type="text"
            id="gegner"
            name="gegner"
            value={bericht.gegner}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ergebnis">Ergebnis:</label>
          <input
            type="text"
            id="ergebnis"
            name="ergebnis"
            value={bericht.ergebnis}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ort">Ort:</label>
          <input
            type="text"
            id="ort"
            name="ort"
            value={bericht.ort}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="inhalt">Inhalt:</label>
          <textarea
            id="inhalt"
            name="inhalt"
            value={bericht.inhalt}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="spieldatum">Spieldatum:</label>
          <input
            type="date"
            id="spieldatum"
            name="spieldatum"
            value={bericht.spieldatum}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Bericht erstellen</button>
      </form>
    </div>
  );
}
