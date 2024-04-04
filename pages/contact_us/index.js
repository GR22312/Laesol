import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Email, Phone, Room } from '@mui/icons-material';
import { CardMedia } from '@mui/material';

const ContactUs = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Contáctanos
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Room fontSize="large" />
                        <Typography variant="subtitle1" sx={{ ml: 2 }}>
                            Dirección:
                        </Typography>
                    </Box>
                    <Typography>
                        Calle 5 Norte, #814 A <br />
                        Centro Atlixco <br />
                        Puebla CP: 74200
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone fontSize="large" />
                        <Typography variant="subtitle1" sx={{ ml: 2 }}>
                            Teléfono:
                        </Typography>
                    </Box>

                    <Typography>
                        +52 244 44 637 22
                    </Typography>

                    <Typography>
                        +52 244 189 5344
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email fontSize="large" />
                        <Typography variant="subtitle1" sx={{ ml: 2 }}>
                            Correo Electrónico:
                        </Typography>
                    </Box>
                    <Typography>
                        laesoldce2023@gmail.com
                    </Typography>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="https://www.google.com/maps/place/18%C2%B054'49.2%22N+98%C2%B026'05.7%22W/@18.9136631,-98.4374859,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.9136631!4d-98.434911?hl=es&entry=ttu" target="_blank" rel="noopener noreferrer">
                            <CardMedia
                                component="img"
                                image="../img/ubicacion/empresa.png"
                                alt="logo"
                            />
                        </a>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;
