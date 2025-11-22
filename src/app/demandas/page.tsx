'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  Add as AddIcon,
  AccessTime as AccessTimeIcon,
  LocationOn as LocationOnIcon,
  Star as StarIcon,
} from '@mui/icons-material';

// --- SECCIÓN 1: NAVEGACIÓN CON BADGES ---
const DemandsNavigation = () => {
  const router = useRouter();

  const handleOffersClick = () => {
    router.push('/marketplace');
  };

  const handleCompaniesClick = () => {
    router.push('/empresas');
  };

  return (
    <Box sx={{ py: 3, backgroundColor: '#f7f7f7', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 6 }, 
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: { xs: 'flex-start', md: 'center' }
        }}>
          {/* Parte superior en móvil: Elementos que NO son la página actual */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'row', md: 'row' },
            gap: { xs: 4, md: 6 },
            order: { xs: 1, md: 0 },
            justifyContent: { xs: 'flex-start', md: 'center' }
          }}>
            {/* OFERTAS */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8
                }
              }}
              onClick={handleOffersClick}
            >
              <Typography variant="h6" sx={{ color: '#2E7D32', fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                OFERTAS
              </Typography>
              <Chip label="427" size="small" sx={{ backgroundColor: '#2E7D32', color: 'white', fontWeight: 'bold' }} />
            </Box>
            
            {/* EMPRESAS */}
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center', 
                gap: 1,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8
                }
              }}
              onClick={handleCompaniesClick}
            >
              <Typography variant="h6" sx={{ color: '#ff8c00', fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                EMPRESAS
              </Typography>
              <Chip label="14,975" size="small" sx={{ backgroundColor: '#ff8c00', color: 'white', fontWeight: 'bold' }} />
            </Box>
          </Box>
          
          {/* Parte inferior en móvil: Página actual - DEMANDAS (más grande) */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            order: { xs: 2, md: 0 }
          }}>
            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '1.3rem' } }}>
              DEMANDAS
            </Typography>
            <Chip label="28" size="small" sx={{ backgroundColor: '#1976d2', color: 'white', fontWeight: 'bold' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 2: BARRA DE ACCIONES Y FILTROS ---
const DemandsActionBar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const handleCreateNew = () => {
    // Aquí se puede implementar la funcionalidad para crear nueva demanda
    console.log('Crear nueva demanda');
  };

  return (
    <Box sx={{ py: 2, backgroundColor: '#f7f7f7', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography
            onClick={handleCreateNew}
            sx={{
              color: '#1976d2',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            + CREAR NUEVO
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="text"
              onClick={() => setOpenCategory(!openCategory)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 0
              }}
            >
              Categoría
              <Box sx={{ transform: openCategory ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                ▼
              </Box>
            </Button>

            <Button
              variant="text"
              onClick={() => setOpenLocation(!openLocation)}
              sx={{
                color: 'black',
                textTransform: 'none',
                fontWeight: 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 0
              }}
            >
              Ubicación
              <Box sx={{ transform: openLocation ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                ▼
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 3: LISTA DE DEMANDAS ---
const DemandsList = () => {
  const router = useRouter();
  const demands = [
    {
      id: 1,
      title: "Comprando, plásticos, EPS, Poliestireno",
      frequency: "Mensual",
      location: "Bogotá, Colombia",
      price: "Precio por acuerdo",
      quantity: "123,456",
      unit: "toneladas",
      isNew: true,
      isPremium: true
    },
    {
      id: 2,
      title: "Comprando, plásticos, EPS",
      frequency: "Semanal",
      location: "Medellín, Colombia",
      price: "Precio por acuerdo",
      quantity: "123,456",
      unit: "toneladas",
      isNew: false,
      isPremium: true
    },
    {
      id: 3,
      title: "Comprando, plásticos LLDPE Regrind/ LLDPE Regrind",
      frequency: "Mensual",
      location: "Cali, Colombia",
      price: "Precio por acuerdo",
      quantity: "24,000",
      unit: "toneladas",
      isNew: true,
      isPremium: false
    },
    {
      id: 4,
      title: "Busco residuos de PVC duro blanco/regrind",
      frequency: "Mensual",
      location: "Barranquilla, Colombia",
      price: "Precio por acuerdo",
      quantity: "20",
      unit: "toneladas",
      isNew: true,
      isPremium: false
    },
    {
      id: 5,
      title: "Comprando, plásticos",
      frequency: "Demanda única",
      location: "Cartagena, Colombia",
      price: "Precio por acuerdo",
      quantity: "10",
      unit: "toneladas",
      isNew: false,
      isPremium: false
    },
    {
      id: 6,
      title: "Comprando productos EPP (principalmente guantes de nitrilo)",
      frequency: "Trimestral",
      location: "Bucaramanga, Colombia",
      price: "Precio por acuerdo",
      quantity: "30",
      unit: "toneladas",
      isNew: false,
      isPremium: false
    }
  ];

  return (
    <Box sx={{ py: 2, backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {demands.map((demand) => (
            <Paper
              key={demand.id}
              onClick={() => router.push(`/demandas/${demand.id}`)}
              sx={{
                p: { xs: 1.5, md: 2 },
                backgroundColor: 'rgb(247, 253, 255)',
                borderRadius: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: { xs: 1.5, md: 3 },
                minHeight: { xs: 'auto', md: '80px' },
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgb(235, 245, 250)',
                  transition: 'background-color 0.2s'
                }
              }}
            >
              {/* Información de la demanda */}
              <Box sx={{ flex: 1, width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1976d2',
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      flex: 1,
                      minWidth: { xs: '100%', md: 'auto' }
                    }}
                  >
                    {demand.title}
                  </Typography>
                  
                  {/* Badges e iconos */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {demand.isNew && (
                      <Chip
                        label="NEW"
                        size="small"
                        sx={{
                          backgroundColor: '#1976d2',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: { xs: '0.65rem', md: '0.75rem' },
                          height: { xs: '20px', md: '24px' }
                        }}
                      />
                    )}
                    
                    {demand.isPremium && (
                      <StarIcon sx={{ color: '#ff8c00', fontSize: { xs: '1rem', md: '1.2rem' } }} />
                    )}
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'center', flexWrap: 'wrap', mb: { xs: 1, md: 0 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                      {demand.frequency}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <LocationOnIcon sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                      {demand.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Precio y cantidad */}
              <Box sx={{ 
                textAlign: { xs: 'left', md: 'right' }, 
                width: { xs: '100%', md: 'auto' },
                minWidth: { xs: 'auto', md: '200px' },
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                justifyContent: { xs: 'space-between', md: 'flex-end' },
                gap: { xs: 2, md: 0 }
              }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1976d2',
                    fontWeight: 'bold',
                    mb: { xs: 0, md: 1 },
                    fontSize: { xs: '0.8rem', md: '0.875rem' }
                  }}
                >
                  Precio: <span style={{ fontWeight: 'normal' }}>{demand.price}</span>
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1976d2',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.8rem', md: '0.875rem' }
                  }}
                >
                  {demand.quantity} {demand.unit}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function DemandsPage() {
  return (
    <main style={{ paddingTop: '64px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <DemandsNavigation />
      <DemandsActionBar />
      <DemandsList />
    </main>
  );
}
