'use client';

import React, { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  IconButton,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Star,
  LocationOn,
  AccessTime,
  Phone,
  Email,
  Chat,
} from '@mui/icons-material';
import Image from 'next/image';

// Mock data - En producción esto vendría de una API
const getPostData = (id: string, type: 'oferta' | 'demanda') => {
  const posts = {
    '1': {
      id: 1,
      title: 'Vendiendo, plásticos',
      description: 'Material limpio adecuado para procesamiento adicional o reciclaje. Más información y precio bajo solicitud.',
      post_type: 'oferta' as const,
      frequency: 'Venta única',
      price: 'Precio negociable',
      quantity: '13 toneladas',
      category: 'Plásticos',
      subcategory: 'PE',
      materialType: 'Procesado / Reciclado',
      materialOrigin: 'Post-industrial',
      productForm: '',
      packaging: 'Big-bag',
      contaminationLevel: '',
      location: 'Bogotá, Colombia',
      lat: 4.7110,
      lng: -74.0721,
      company: {
        name: 'Mostrar nombre de empresa',
        rating: 4,
        isPremium: true,
        avatar: '/marketplace.jpeg',
      },
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&q=80',
    },
    '2': {
      id: 2,
      title: 'Comprando, plásticos, EPS',
      description: 'Compramos poliestireno EPS de la industria, incluso como residuo. EPS, la condición es sin contaminación mayor de suciedad, retardantes y similares. También puede contactarnos vía whats app +57 300 123 4567',
      post_type: 'demanda' as const,
      frequency: 'Compra semanal',
      price: 'Precio negociable',
      quantity: '123,456 toneladas',
      category: 'Plásticos',
      subcategory: 'EPS',
      materialType: 'Subproducto / Excedente',
      materialOrigin: '',
      productForm: '',
      packaging: '',
      contaminationLevel: '',
      location: 'Medellín, Colombia',
      lat: 6.2476,
      lng: -75.5658,
      company: {
        name: 'Mostrar nombre de empresa',
        rating: 4,
        isPremium: true,
        avatar: '/marketplace.jpeg',
      },
      image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=600&fit=crop&q=80',
    },
  };
  return posts[id as keyof typeof posts] || posts['1'];
};

export default function PostDetailPage() {
  const params = useParams();
  const pathname = usePathname();
  const postId = params.id as string;
  const [isFavorited, setIsFavorited] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Determinar si es oferta o demanda basado en la ruta
  const isDemand = pathname?.includes('/demandas') || false;
  const postType = isDemand ? 'demanda' : 'oferta';
  const post = getPostData(postId, postType);

  const primaryColor = isDemand ? '#1976d2' : '#2E7D32';

  return (
    <Box sx={{ pt: '64px', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Columna Izquierda: Detalles del Producto */}
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            {/* Header */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: primaryColor, fontWeight: 'bold', mb: 1, textTransform: 'uppercase' }}
              >
                {post.frequency}
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: 'bold', color: '#000', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
              >
                {post.title}
              </Typography>
            </Box>

            {/* Imagen del Producto */}
            {post.image && (
              <Box sx={{ mb: 3, position: 'relative', width: '100%', height: { xs: '250px', md: '400px' }, borderRadius: 2, overflow: 'hidden' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <IconButton
                  onClick={() => setIsFavorited(!isFavorited)}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' },
                  }}
                >
                  {isFavorited ? <Favorite sx={{ color: '#f44336' }} /> : <FavoriteBorder />}
                </IconButton>
              </Box>
            )}

            {/* Botón Guardar */}
            <Button
              variant="outlined"
              startIcon={isFavorited ? <Favorite sx={{ color: '#f44336' }} /> : <FavoriteBorder />}
              onClick={() => setIsFavorited(!isFavorited)}
              sx={{
                mb: 3,
                borderColor: '#e0e0e0',
                color: '#000',
                textTransform: 'none',
                '&:hover': { borderColor: '#bdbdbd', backgroundColor: 'rgba(0, 0, 0, 0.04)' },
              }}
            >
              Guardar
            </Button>

            {/* Descripción */}
            <Typography variant="body1" sx={{ mb: 4, color: '#666', lineHeight: 1.6 }}>
              {post.description}
            </Typography>

            {/* Especificaciones */}
            <Box sx={{ 
              mb: 4,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 0,
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              overflow: 'hidden',
            }}>
              <DetailRow label="PRECIO" value={post.price} color={primaryColor} index={0} />
              <DetailRow label="CANTIDAD TOTAL" value={post.quantity} color={primaryColor} index={1} />
              {post.frequency && <DetailRow label="FRECUENCIA" value={post.frequency} color={primaryColor} index={2} />}
              <DetailRow label="CATEGORÍA" value={post.category} color={primaryColor} index={post.frequency ? 3 : 2} />
              <DetailRow label="SUBCATEGORÍA" value={post.subcategory} color={primaryColor} index={post.frequency ? 4 : 3} />
              <DetailRow label="TIPO DE MATERIAL" value={post.materialType} color={primaryColor} index={post.frequency ? 5 : 4} />
              <DetailRow label="ORIGEN DEL MATERIAL" value={post.materialOrigin || '-'} color={primaryColor} index={post.frequency ? 6 : 5} />
              <DetailRow label="FORMA DE PRODUCTO POSIBLE" value={post.productForm || '-'} color={primaryColor} index={post.frequency ? 7 : 6} />
              <DetailRow label="EMPAQUE POSIBLE" value={post.packaging || '-'} color={primaryColor} index={post.frequency ? 8 : 7} />
              <DetailRow label="NIVEL DE CONTAMINACIÓN" value={post.contaminationLevel || '-'} color={primaryColor} index={post.frequency ? 9 : 8} />
            </Box>

            {/* Ubicación */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: primaryColor, fontWeight: 'bold', mb: 1, textTransform: 'uppercase' }}>
                UBICACIÓN
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                {post.location}
              </Typography>
              
              {/* Mapa */}
              <Box sx={{ width: '100%', height: '300px', borderRadius: 2, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${(post.lng - 0.1)}%2C${(post.lat - 0.1)}%2C${(post.lng + 0.1)}%2C${(post.lat + 0.1)}&layer=mapnik&marker=${post.lat}%2C${post.lng}`}
                  allowFullScreen
                />
              </Box>
            </Box>
          </Box>

          {/* Columna Derecha: Información de la Empresa */}
          <Box sx={{ flex: { xs: 1, md: 1 }, minWidth: { xs: '100%', md: '300px' } }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                position: { md: 'sticky' },
                top: { md: '80px' },
              }}
            >
              {/* Avatar y Nombre */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar
                  src={post.company.avatar}
                  sx={{ width: 56, height: 56, backgroundColor: primaryColor }}
                >
                  {post.company.name.charAt(0)}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {post.company.isPremium && (
                      <Star sx={{ color: '#ff8c00', fontSize: '1.2rem' }} />
                    )}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: primaryColor }}>
                      {post.company.name}
                    </Typography>
                  </Box>
                  {/* Rating */}
                  <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        sx={{
                          color: i < post.company.rating ? '#ff8c00' : '#e0e0e0',
                          fontSize: '1rem',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Botones de Acción */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<Chat />}
                  fullWidth
                  sx={{
                    backgroundColor: primaryColor,
                    color: 'white',
                    textTransform: 'none',
                    py: 1.5,
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: isDemand ? '#1565c0' : '#1B5E20',
                    },
                  }}
                >
                  ABRIR CHAT
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setShowContact(!showContact)}
                  sx={{
                    borderColor: '#e0e0e0',
                    color: '#666',
                    textTransform: 'none',
                    py: 1.5,
                    '&:hover': {
                      borderColor: '#bdbdbd',
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  MOSTRAR TELÉFONO Y EMAIL
                </Button>
              </Box>

              {/* Información de Contacto (si está visible) */}
              {showContact && (
                <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #e0e0e0' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Phone sx={{ fontSize: '1rem', color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      +57 300 123 4567
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: '1rem', color: '#666' }} />
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      contacto@empresa.com
                    </Typography>
                  </Box>
                </Box>
              )}
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Componente auxiliar para las filas de detalles
function DetailRow({ label, value, color, index }: { label: string; value: string; color: string; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <Box sx={{ 
      py: 1.5, 
      px: 2,
      borderBottom: '1px solid #e0e0e0',
      borderRight: { md: isEven ? '1px solid #e0e0e0' : 'none' },
    }}>
      <Typography variant="body2" sx={{ color, fontWeight: 'bold', mb: 0.5, textTransform: 'uppercase', fontSize: '0.75rem' }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ color: '#666', fontSize: '0.9rem' }}>
        {value}
      </Typography>
    </Box>
  );
}

