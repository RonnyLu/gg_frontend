import { useRouter } from 'next/router';
import BerichtsForm from '../components/BerichtsForm'; 

export async function getServerSideProps(context) {
  const { req } = context;
  
  // Überprüfe, ob der Benutzer eingeloggt ist, indem du das Token aus den Cookies oder dem Local Storage holst
  const accessToken = req.headers.cookie?.replace(/(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  
  if (!accessToken) {
    // Wenn kein Token vorhanden ist, leite den Benutzer zur Login-Seite weiter
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Wenn ein Token vorhanden ist, lass den Benutzer auf die Seite zugreifen
  return {
    props: {},
  };
}

export default function ErstelleBericht() {
  const router = useRouter();

  const handleCreateBericht = async (formData) => {
    
  };

  return (
    <div>
      <h1>Erstelle einen Bericht</h1>
      
      <BerichtsForm onSubmit={handleCreateBericht} />
    </div>
  );
}
