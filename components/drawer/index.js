import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import { IconButton, ListItemAvatar } from '@mui/material';
import { Assignment, ContactPage, Devices, Group, Info, Menu, Nature, NaturePeopleRounded, NaturePeopleSharp, SearchOutlined, VerifiedUser } from '@mui/icons-material';
import { useRouter } from "next/router";
import PeopleIcon from "@mui/icons-material/People";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ConstructionIcon from "@mui/icons-material/Construction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Login } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import HistoryIcon from '@mui/icons-material/History';
import { useSession } from 'next-auth/react';
import { Home, ShoppingCart, History, AppRegistration } from '@mui/icons-material';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};











export default function TemporaryDrawer({ props, children }) {

  const { data: session } = useSession();

  React.useEffect(() => {
    if (session) {     
      // Aquí debes obtener los pedidos del usuario con el ID userId
      //const userOrdersData = obtenerPedidosPorUsuario(userId); // Esta función debería obtener los pedidos del usuario
      //setUserOrders(userOrdersData);
    }
  }, [session]);
  
  const userNameFull = session?.user.name; //+ " " + session?.user.lastName ;
  
  const userImage = session?.user.image;
  const rolUser = session?.user.rol;
  console.log(session);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  /*
  
  admin=1
  jefe de tienda=2
  cliente=3
  guest=todo puede ver
  
  */
  const menuOptions = [
    { text: 'Inicio', icon: <Home />, path: '/', roles: ['guest'] },
    { text: 'Servicios Prototipo1', icon: <NaturePeopleRounded />, path: '/services', roles: ['guest'] },
    //{ text: 'Servicios Prototipo2', icon: <NaturePeopleRounded />, path: '/services2', roles: ['guest'] },
    //{ text: 'Usuarios', icon: <VerifiedUser />, path: '/users', roles: ['guest'] },
    { text: 'Acerca de nosotros', icon: <SearchOutlined />, path: '/about_us', roles: [ 'guest'] },
    { text: 'Contactanos', icon: <ContactPage />, path: '/contact_us', roles: ['guest'] },
    //{ text: 'Carrito de compra', icon: <ShoppingCart />, path: '/shopping_cart', roles: ['guest'] },
    //{ text: 'Historial de Compras', icon: <History />, path: '/purchase-history', roles: ['guest'] },
    //{ text: 'Iniciar sesión', icon: <Login />, path: '/login', roles: ['guest'] },
    //{ text: 'Registrarse', icon: <AppRegistration />, path: '/register', roles: ['guest'] },
  ];

  const filteredMenuOptions = menuOptions.filter(option => session ? option.roles.includes(rolUser) : option.roles.includes('guest'));

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      
      
    {session && (
      <>
      <List sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt="Remy Sharp"
          src={userImage}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Typography sx={{ fontWeight: 'bold' }}>
          {userNameFull} 
        </Typography>
      </List>
      <Divider />
      </>
    )}
      <List>
          {filteredMenuOptions.map((option) => (
            <ListItem key={option.text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(option.path)}>
                <ListItemIcon>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

    </Box>
  );





  return (

    <div>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar sx={{ backgroundColor: '#034ac8' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                <Menu />

              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Times New Roman, serif', fontWeight: 'bold', color: '#fff' }}>
              LAESOL
            </Typography>

            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Container>


          <Box sx={{ my: 2 }}>
            {children}
          </Box>
        </Container>
      </React.Fragment>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="top">
        {DrawerList}
      </Drawer>
    </div>
  );
}