'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';

export default function CopilotSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 3, md: 7 },
        color: 'white',
        overflow: 'hidden', // Asegura que el GIF no se desborde
      }}
    >
      {/* GIF de Fondo */}
      <Box
        component="img"
        src="/copilot-bg.gif" // Ruta de tu GIF. Asegúrate de colocarlo en la carpeta public
        alt="Fondo del copiloto de residuos"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cubre todo el espacio sin distorsionar
          zIndex: -1, // Envía el GIF al fondo
          filter: 'brightness(0.4)', // Oscurece un poco el GIF para que el texto resalte
        }}
      />

      <Box sx={{ pl: { xs: '16px', md: '125px' }, pr: { xs: '16px', md: 0 } }}>
        <Container maxWidth="lg" sx={{ pl: 0, pr: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          {/* Columna Izquierda: Texto y Botones */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 1 }, pl: 0, ml: 0 }}>
            <Typography variant="h6" sx={{ color: '#ff8c00', fontWeight: 'bold', margin: 0, padding: 0, marginLeft: 0, paddingLeft: 0 }}>
              Necesito un socio en gestión de residuos<span style={{ color: '#f44336' }}>.</span>
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mt: 1, color: 'white', margin: 0, padding: 0, marginLeft: 0, paddingLeft: 0 }}>
              Copiloto de Residuos T3<span style={{ color: '#f44336' }}>.</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Deja que nos ocupemos de tu gestión de residuos con el Copiloto T3. Nuestro servicio práctico garantiza ahorros significativos, alianzas transparentes y mejoras innovadoras para tu estrategia.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Desde la logística y el cumplimiento de las últimas regulaciones hasta la prevención de residuos y el alineamiento con tus metas de sostenibilidad (ESG), estamos aquí para ayudarte a cumplir los más altos estándares en cada paso del camino.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'flex-start' }}>
              <Button
                variant="contained" // Cambiado a 'contained' para el fondo blanco
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  '&:hover': { backgroundColor: '#f2f2f2' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                  order: { xs: 1, md: 2 },
                }}
              >
                Saber Más
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff8c00',
                  color: 'white',
                  '&:hover': { backgroundColor: '#e67e00' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                  order: { xs: 2, md: 1 },
                }}
              >
                Agendar una Llamada
              </Button>
            </Box>
          </Box>

          {/* Columna Derecha: se deja vacía para que la imagen de fondo sea el foco */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 2 } }}>
            {/* Espacio reservado, no necesita contenido */}
          </Box>
        </Box>
      </Container>
      </Box>
    </Box>
  );
}

