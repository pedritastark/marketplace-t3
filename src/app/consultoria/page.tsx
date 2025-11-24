'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CloudIcon from '@mui/icons-material/Cloud';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

// --- SECCIÓN 1: HERO ---
const ConsultingHero = () => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      py: { xs: 16, md: 6 },
      pt: { xs: 'calc(60px + 12vh)', md: 'calc(64px + 12vh)' },
      minHeight: { xs: 'auto', md: 'auto' },
      color: 'white',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/../hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.4)',
        zIndex: -1,
      },
    }}
  >
    <Container maxWidth="lg" sx={{ pl: { sm: '0px !important' }, pr: { sm: '50px !important' } }}>
      <Box sx={{ textAlign: 'left', mx: { xs: 3, md: 0 } }}>
        {/* Título Principal */}
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '4rem' },
            lineHeight: 1.1,
            mb: 2
          }}
        >
          Consultoría T3
        </Typography>
        
        {/* Subtítulo */}
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 'bold',
            mb: 3,
            lineHeight: 1.15
          }}  
        >
          Uso Optimizado de Materiales 
        </Typography>
        
        {/* Descripción */}
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: { xs: '1rem', md: '1.125rem' },
            mb: 6,
            lineHeight: 1.4,
            maxWidth: '800px'
          }}
        >
          Consultoría T3 ofrece soluciones completas y personalizadas que optimizan los flujos de materiales de las empresas, haciendo su producción más eficiente, rentable y amigable con el medio ambiente.
        </Typography>

        {/* Estadísticas */}
        <Box sx={{ mb: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 0, md: 6 } }}>
          {/* Total savings */}
          <Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: 0.5,
                lineHeight: 1.3
              }}
            >
              Ahorros totales de
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: { xs: 1, md: 2 }, mb: 0.5, justifyContent: 'flex-start', flexWrap: 'nowrap' }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '5rem' },
                  lineHeight: 0.9,
                  whiteSpace: 'nowrap'
                }}
              >
                487 661
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.25rem', md: '2.5rem' },
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }}
              >
                tons of CO2
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: { xs: 3, md: 0 },
                lineHeight: 1.3
              }}
            >
              ahorradas en los últimos 12 meses
            </Typography>
          </Box>

          {/* Completed projects */}
          <Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: 0.5,
                lineHeight: 1.3
              }}
            >
              Completados
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: { xs: 1, md: 2 }, mb: 0.5, justifyContent: 'flex-start', flexWrap: 'nowrap' }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '5rem' },
                  lineHeight: 0.9,
                  whiteSpace: 'nowrap'
                }}
              >
                350
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.25rem', md: '2.5rem' },
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }}
              >
                +
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: { xs: 3, md: 0 },
                lineHeight: 1.3
              }}
            >
              proyectos exitosos
            </Typography>
          </Box>

          {/* Countries */}
          <Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: 0.5,
                lineHeight: 1.3
              }}
            >
              Presentes en
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: { xs: 1, md: 2 }, mb: 0.5, justifyContent: 'flex-start', flexWrap: 'nowrap' }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '5rem' },
                  lineHeight: 0.9,
                  whiteSpace: 'nowrap'
                }}
              >
                8
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.25rem', md: '2.5rem' },
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }}
              >
                países
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.3
              }}
            >
              con más de 30 expertos
            </Typography>
          </Box>
        </Box>

        {/* Botones */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: { xs: 2.5, md: 3 }, alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'nowrap' }}>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#ff8c00', 
              color: 'white', 
              '&:hover': { backgroundColor: '#e67e00' }, 
              boxShadow: 'none',
              borderRadius: '8px',
              padding: { xs: '10px 30px', md: '12px 32px' },
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', md: '1rem' },
              textTransform: 'uppercase',
              lineHeight: 1.3,
              whiteSpace: 'pre-line',
              textAlign: 'center',
              minWidth: 'auto',
              flex: { xs: 'none', md: 'none' }
            }}
            >
              {'Hablar con\nExpertos'}
            </Button>
            <Button
            variant="text" 
            sx={{ 
              color: '#ff8c00', 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              fontSize: { xs: '0.875rem', md: '1rem' },
              padding: { xs: '8px 10px', md: '12px 32px' },
              lineHeight: 1.3,
              whiteSpace: 'pre-line',
              textAlign: 'left',
              minWidth: 'auto',
              flex: { xs: 'none', md: 'none' },

          
            }}
          >
            {'Descargar\nFicha Técnica'}
          </Button>
        </Box>
      </Box>
    </Container>
  </Box>
);

// --- SECCIÓN 2: EXPERIENCIA POR INDUSTRIA ---
const IndustryExperience = () => {
  const industries = [
    { id: 'manufacturing', name: 'Manufactura' },
    { id: 'metal-production', name: 'Producción de Metal' },
    { id: 'glass-production', name: 'Producción de Vidrio' },
    { id: 'food-beverage', name: 'Alimentos y Bebidas' },
    { id: 'retail-warehouses', name: 'Retail y Almacenes' },
    { id: 'building-demolition', name: 'Construcción y Demolición' },
    { id: 'horeca-tourism', name: 'HoReCa y Turismo' },
  ];

  const industryData: Record<string, {
    description: string;
    savings: { euros: string; co2: string };
    examples: Array<{ image: string; alt: string; caption: string }>;
  }> = {
    'manufacturing': {
      description: 'El mayor volumen de proyectos se ha realizado con la industria manufacturera, debido a los altos volúmenes de flujos de materiales secundarios generados en este sector. T3 ha encontrado soluciones para plásticos, metales, madera y químicos, resultando en ahorros financieros y una reducción significativa de la huella de CO2.',
      savings: { euros: '1,300,000', co2: '600' },
      examples: [
        { image: '/consultoria.png', alt: 'Cables y residuos', caption: 'Ahorros descubiertos en cables y residuos peligrosos.' },
        { image: '/consultoria.png', alt: 'Filtros de papel', caption: 'Filtros de papel y cigarrillos en nuevos productos.' },
      ],
    },
    'metal-production': {
      description: 'En nuestros proyectos previos para clientes con enfoque o vinculación directa con la producción de fundición, T3 ha buscado soluciones para muchos tipos de materiales residuales, incluyendo arenas de fundición, varios tipos de abrasivos y Big Bags de Polipropileno.',
      savings: { euros: '850,000', co2: '420' },
      examples: [
        { image: '/consultoria.png', alt: 'Componentes metálicos', caption: '37,000€ por año ahorrados para NIDEC embraco al encontrar valor en empaques.' },
        { image: '/consultoria.png', alt: 'Virutas metálicas', caption: 'Desafíos de residuos del sector manufacturero - lodos metálicos y líquidos acuosos.' },
      ],
    },
    'glass-production': {
      description: 'T3 ha trabajado con fabricantes de vidrio ayudándoles a encontrar nuevas oportunidades de valorización para sus residuos de producción, incluyendo vidrio roto, mezclas de vidrio y materiales de desecho del proceso de fabricación.',
      savings: { euros: '620,000', co2: '380' },
      examples: [
        { image: '/consultoria.png', alt: 'Vidrio reciclado', caption: 'Reutilización de vidrio roto en nuevos productos.' },
      ],
    },
    'food-beverage': {
      description: 'Desde valorizar granos de café usados y convertirlos en tazas de café, hasta trabajar con una de las cervecerías más grandes de Colombia y encontrar soluciones para etiquetas desechadas, el equipo de T3 puede hacerlo todo.',
      savings: { euros: '140,000', co2: '60' },
      examples: [
        { image: '/consultoria.png', alt: 'Botellas plásticas', caption: 'Valorización de botellas plásticas de bebidas.' },
      ],
    },
    'retail-warehouses': {
      description: 'T3 ha colaborado con empresas de retail y almacenes para optimizar sus flujos de materiales secundarios, encontrando soluciones para empaques, cartones, plásticos y otros materiales generados en operaciones de almacén.',
      savings: { euros: '950,000', co2: '480' },
      examples: [
        { image: '/consultoria.png', alt: 'Empaques de retail', caption: 'Recuperación de valor en empaques y materiales de retail.' },
      ],
    },
    'building-demolition': {
      description: 'En proyectos de construcción y demolición, T3 ha encontrado oportunidades de valorización para materiales como concreto, acero, madera y otros materiales de construcción, reduciendo significativamente los costos de eliminación de residuos.',
      savings: { euros: '1,100,000', co2: '550' },
      examples: [
        { image: '/consultoria.png', alt: 'Materiales de construcción', caption: 'Valorización de materiales de construcción y demolición.' },
      ],
    },
    'horeca-tourism': {
      description: 'T3 ha trabajado con hoteles, restaurantes y establecimientos turísticos para encontrar soluciones sostenibles para sus residuos orgánicos, plásticos de un solo uso y otros materiales, ayudándoles a reducir costos y su impacto ambiental.',
      savings: { euros: '280,000', co2: '140' },
      examples: [
        { image: '/consultoria.png', alt: 'Residuos de hoteles', caption: 'Gestión sostenible de residuos en establecimientos turísticos.' },
      ],
    },
  };

  const [selectedIndustry, setSelectedIndustry] = useState(industries[0].id);
  const selectedData = industryData[selectedIndustry];

  return (
    <Box sx={{ py: { xs: 16, md: 8 }, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 2, mx: { xs: 3, md: 0 } }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
            Experiencia a través de industrias
          </Typography>
          <Box sx={{ maxWidth: { md: '33%' } }}>
            <Typography variant="body1" color="text.secondary">
              El equipo de T3 ha trabajado en más de 50 proyectos con compañías de varios sectores, incluyendo manufactura (producción de metales, alimentos, vidrio, etc.), retail y almacenes, y construcción y demolición.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: 1, flexWrap: 'wrap', minWidth: { md: 200 }, mx: { xs: 3, md: 0 } }}>
            {industries.map(industry => {
              const isSelected = selectedIndustry === industry.id;
              return (
                <Chip
                  key={industry.id}
                  label={industry.name}
                  onClick={() => setSelectedIndustry(industry.id)}
                  variant="outlined"
                  sx={{
                    p: '22px 14px',
                    fontSize: '0.9rem',
                    justifyContent: 'flex-start',
                    backgroundColor: isSelected ? 'rgba(76, 175, 80, 0.1)' : 'white',
                    borderRadius: '16px',
                    width: { md: '100%' },
                    ...(isSelected
                      ? {
                          borderColor: '#4CAF50',
                          color: '#4CAF50',
                          fontWeight: 'bold',
                        }
                      : {
                          borderColor: 'black',
                          color: 'black',
                        }),
                    '&:hover': {
                      backgroundColor: isSelected ? 'rgba(76, 175, 80, 0.15)' : 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                />
              );
            })}
          </Box>
          <Box sx={{ flexGrow: 1, mx: { xs: 3, md: 0 } }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              {industries.find(i => i.id === selectedIndustry)?.name}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
              {selectedData.description}
            </Typography>
            
            {/* Sección de Ahorros Anuales */}
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Ahorros anuales para una gran empresa:
            </Typography>
            <Box sx={{ display: 'flex', gap: 4, mb: 4, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                }}>
                  <AttachMoneyIcon sx={{ color: '#4CAF50', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                  {selectedData.savings.euros} EUR
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                }}>
                  <CloudIcon sx={{ color: '#4CAF50', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                  {selectedData.savings.co2} toneladas CO₂
                </Typography>
              </Box>
            </Box>

            {/* Ejemplos en la práctica */}
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Ejemplos en la práctica:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', overflowX: 'auto', pb: 1 }}>
              {selectedData.examples.map((example, index) => (
                <Card 
                  key={index}
                  sx={{ 
                    minWidth: 280,
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia 
                    component="img" 
                    height="180" 
                    image={example.image} 
                    alt={example.alt}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                      {example.caption}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
              {selectedData.examples.length > 2 && (
                <IconButton 
                  sx={{ 
                    backgroundColor: '#f5f5f5',
                    '&:hover': { backgroundColor: '#eeeeee' },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- SECCIÓN 3: TESTIMONIOS ---
const TestimonialsSection = () => (
  <Box
    sx={{
      position: 'relative',
      py: { xs: 20, md: 10 },
      color: 'white',
      textAlign: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/Gemini_Generated_Image_9o9sij9o9sij9o9s.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.5)',
        zIndex: -1,
      },
    }}
  >
    <Container maxWidth="md">
      <Box sx={{ mx: { xs: 3, md: 0 } }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
          Lo que dicen nuestros clientes
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 3 }}>
          &quot;La cooperación con T3 nos ha abierto nuevas vías para hacer nuestra gestión de residuos más eficiente. Nos ha traído nuevas alternativas para la reutilización de materiales, resultando en ahorros económicos significativos. Gracias a sus recomendaciones, hemos reducido significativamente la cantidad de residuos de cartón.&quot;
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Avatar src="/team/cliente-ejemplo.jpg" alt="Tomás Vala" sx={{ width: 56, height: 56 }} />
          <Box textAlign="left">
            <Typography sx={{ fontWeight: 'bold' }}>Tomás Vala</Typography>
            <Typography>CEO en SIKO</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function ConsultoriaPage() {
  return (
    <main>
      <ConsultingHero />
      <IndustryExperience />
      <TestimonialsSection />
    </main>
  );
}

