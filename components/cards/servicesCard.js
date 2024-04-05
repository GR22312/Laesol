import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ServiciosCard = ({ servicio }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={servicio.imagen}
          alt={servicio.name}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {servicio.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Categoría: {servicio.categoria}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const ServiciosGrid = ({ servicios }) => {
  return (
    <Grid container spacing={2}>
      {servicios.map((servicio) => (
        <ServiciosCard key={servicio.id} servicio={servicio} />
      ))}
    </Grid>
  );
};

export default ServiciosGrid;
