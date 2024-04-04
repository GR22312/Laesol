import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box } from '@mui/material';

// Definir el array de datos
const servicios = [
  {
    title: 'Servicios Fiscales',
    items: [
      'Diagnóstico Fiscal inicial',
      'Trámites de Devolución de Impuestos Federales',
      'Impuestos Locales',
      'Contabilidad Electrónica',
      'Preparación de Estados Financieros Mensuales (NIF)'
    ]
  },
  {
    title: 'Servicios Laborales',
    items: [
      'Asesoría laboral y de seguridad social',
      'Asesoría para la contratación de sus empleados',
      'Elaboración de nóminas'
    ]
  },
  {
    title: 'Otros Servicios',
    items: [
      'Asesoría especializada por sectores',
      'Manejo de Servicio Integral de Registro de Obras de Construcción',
      'Acta constituida y autorizada por Notario Público',
      'Inscripción del Registro Federal del Contribuyente (RFC)',
      'Trámites ante el Registro Público de la Propiedad y Registro Público de Comercio',
      'Apertura de la Cuenta Bancaria en el Banco de su elección',
      'Constitución de Sociedades Civiles y Mercantiles, Asociaciones',
      'Libros corporativos para todo tipo de sociedades',
      'Escisiones, Fusiones y Liquidaciones',
      'Elaboración de todo tipo de contratos',
      'Registro de Marcas y Patentes'
    ]
  }
];

export default function NestedList() {
  const [open, setOpen] = React.useState(Array(servicios.length).fill(true));

  const handleClick = (index) => {
    const newState = [...open];
    newState[index] = !newState[index];
    setOpen(newState);
  };

  return (
    <List
      fullWidth
      sx={{
        width: '100%',
        bgcolor: 'grey.200',
        borderRadius: '8px',
        padding: '16px',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{
            bgcolor: '#063d79',
            color: 'white',
            borderRadius: '8px 8px 0 0',
            padding: '16px',
          }}
          component="div"
          id="nested-list-subheader"
        >
          Servicios de la Empresa
        </ListSubheader>
      }
    >
      {servicios.map((servicio, index) => (
        <React.Fragment key={index}>
          <ListItemButton
            sx={{
              bgcolor: '#5a7ea4',
              color: 'white',
            }}
            onClick={() => handleClick(index)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Box
              sx={{
                px: 2,
                py: 1,
                borderRadius: '4px',
              }}
            >
              {servicio.title}
            </Box>
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {servicio.items.map((item, i) => (
                <ListItemButton key={i} sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
