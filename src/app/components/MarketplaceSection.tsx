'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketplaceSection() {
  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 }, pl: { xs: '16px', md: '125px' }, pr: { xs: 2, md: 6 }, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg" sx={{ pl: 0, pr: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          {/* Columna Izquierda: Texto y Botones */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 1 }, pl: 0, ml: 0 }}>
            <Typography variant="h6" sx={{ color: '#ff8c00', fontWeight: 'bold', margin: 0, padding: 0, marginLeft: 0, paddingLeft: 0 }}>
              Quiero comprar y vender recursos por mi cuenta<span style={{ color: '#4CAF50' }}>.</span>
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mt: 1, color: '#4d2a00', margin: 0, padding: 0, marginLeft: 0, paddingLeft: 0 }}>
            El marketplace de sostenibilidad para una nueva generación de empresas<span style={{ color: '#4CAF50' }}>.</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Descubre nuevas oportunidades de reciclaje y abastecimiento de materiales en el mercado de reciclaje más grande de la región. La plataforma gratuita de T3 te conecta con comerciantes y recicladores de confianza.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Únete a nuestra plataforma de forma gratuita y explora potentes herramientas que apoyan tus objetivos de sostenibilidad.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'flex-start' }}>
              <Button
                variant="contained"
                component={Link}
                href="/marketplace"
                sx={{
                  backgroundColor: '#ff8c00',
                  color: 'white',
                  '&:hover': { backgroundColor: '#e67e00' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                }}
              >
                Explorar Marketplace
              </Button>
              <Button
                variant="outlined"
                component={Link}
                href="/empresas"
                sx={{
                  borderColor: '#000000',
                  color: '#000000',
                  '&:hover': { borderColor: '#000000', backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                }}
              >
                Encontrar un Socio
              </Button>
            </Box>
          </Box>

          {/* Columna Derecha: Imagen */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 2 }, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
              <Image
                src="/Marketplace-preview.png"
                alt="Vista previa del marketplace de T3"
                width={600}
                height={450}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: 'none',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

