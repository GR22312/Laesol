import React from 'react';
import { Typography, Grid, Avatar, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom align="center">Acerca de Laesol</Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom align="center">Misión</Typography>
          <Typography variant="body1" gutterBottom align="justify">
            En Laesol nos comprometemos a proporcionar soluciones integrales de consultoría empresarial, orientadas a optimizar el desempeño financiero y operativo de nuestros clientes, con un enfoque centrado en la excelencia, la ética y la innovación.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom align="center">Visión</Typography>
          <Typography variant="body1" gutterBottom align="justify">
            Nuestra visión en Laesol es convertirnos en el socio estratégico preferido de las empresas, reconocido por nuestra capacidad para generar valor agregado de manera sostenible, impulsando su crecimiento y contribuyendo al desarrollo económico y social.
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">Objetivos</Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom align="justify">
            1. Brindar servicios de consultoría personalizados que satisfagan las necesidades específicas de cada cliente.
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            2. Fomentar relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza, la transparencia y el compromiso.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom align="justify">
            3. Mantenernos a la vanguardia en conocimientos y prácticas empresariales, para ofrecer soluciones innovadoras y efectivas.
          </Typography>
          <Typography variant="body1" gutterBottom align="justify">
            4. Contribuir al desarrollo profesional y personal de nuestro equipo, promoviendo un ambiente de trabajo colaborativo y de aprendizaje continuo.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">Nuestro Equipo</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Avatar src="https://img.freepik.com/fotos-premium/contadora-que-trabaja-oficina_392895-15068.jpg" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Gloria Gonzalez</Typography>
          <Typography variant="body2" align="center">C.P.</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Avatar src="https://f.hubspotusercontent10.net/hubfs/537314/o-que-e-preciso-para-ser-um-contador-de-sucesso-2.jpg" alt="Miembro del Equipo" sx={{ width: 120, height: 120, margin: 'auto' }} />
          <Typography variant="subtitle1" align="center">Graciela Confesor</Typography>
          <Typography variant="body2" align="center">C.P.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
