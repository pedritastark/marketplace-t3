'use client';

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

export default function HomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw', // Ocupa todo el ancho de la ventana
        height: { xs: '70vh', md: '100vh' }, // Más corto en móvil, completo en desktop
        overflow: 'hidden', // Asegura que el GIF no se desborde
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Cambiado de 'center' a 'flex-start' para mover el contenido más arriba
        alignItems: 'flex-start', // Cambiado de 'center' a 'flex-start' para alinear a la izquierda
        color: 'white', // Color del texto principal
        textAlign: 'left', // Cambiado de 'center' a 'left'
        paddingLeft: { xs: '16px', md: '125px' }, // Margen izquierdo en desktop
        paddingTop: { xs: 'calc(60px + 12vh)', md: 'calc(64px + 12vh)' }, // Margen superior en desktop
      }}
    >
      {/* GIF de Fondo */}
      <Box
        component="img"
        src="/recycling_bg.gif" // Ruta de tu GIF. Asegúrate de colocarlo en la carpeta public
        alt="Fondo de reciclaje animado"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cubre todo el espacio sin distorsionar
          zIndex: -1, // Envía el GIF al fondo
          filter: 'brightness(0.6)', // Oscurece un poco el GIF para que el texto resalte
        }}
      />

      {/* Contenedor para el contenido limitado a la mitad izquierda */}
      <Box sx={{ width: { xs: '100%', md: '50%' }, maxWidth: { xs: '100%', md: '50%' }, pr: { xs: 2, md: 0 }, pl: 0, ml: 0 }}>
        {/* Mensaje Principal */}
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            textAlign: 'left', 
            color: 'white',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            margin: 0,
            padding: 0,
            marginLeft: 0,
            paddingLeft: 0,
            mb: 2
          }}
        >
          Soluciones de reciclaje y gestión de residuos para tu circularidad<span style={{ color: '#f44336' }}>.</span>
        </Typography>

        {/* Contenedor de Botones y Texto */}
        <Box sx={{ 
          mt: 4, 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' }, 
          gap: 2 
        }}>
          {/* Botón "Agenda una consulta gratis" */}
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              backgroundColor: '#ff8c00', // Naranja
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', md: '1.1rem' },
              padding: { xs: '16px 32px', md: '12px 25px' },
              borderRadius: '8px',
              boxShadow: 'none', // Quitar sombra
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '400px', md: 'none' },
              '&:hover': {
                backgroundColor: '#e67e00', // Naranja más oscuro al pasar el ratón
                boxShadow: 'none', // Quitar sombra en hover
              },
            }}
          >
            Agenda una consulta
          </Button>

          {/* Texto "Regístrese" */}
          <Typography variant="body1" sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 'bold' }}>
            <Link href="/register" passHref style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Box>
 
      {/* Modal de Consulta */}
      <ConsultationModal 
        open={isModalOpen} 
        handleClose={handleCloseModal} 
      />
    </Box>
  );
}

