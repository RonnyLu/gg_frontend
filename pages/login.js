import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`,
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;

        // Speichere das Token sicher (z.B., localStorage)
        localStorage.setItem('access_token', accessToken);

        // Navigiere zur gewünschten Seite (z.B., Dashboard)
        router.push('/'); // Passe den Pfad an

      } else {
        console.error('Fehler beim Einloggen');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Benutzername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
