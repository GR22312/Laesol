
import { SessionProvider } from 'next-auth/react'; //SessionProvider, getSession
 
import Drawer from '../components/drawer';

export default function App({ Component, pageProps }) {

  // Mostrar el MiniDrawer en todas las demás páginas
 // const isAdmin = pageProps.session?.rol === 'administrador';


  return (
    <SessionProvider refetchInterval={0}>
      <Drawer>
        <Component {...pageProps} />
      </Drawer>
    </SessionProvider>
  );
}
export const getServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });
  console.log("Holaaa");
  console.log(session);
  return {
    props: {session},
  };
}