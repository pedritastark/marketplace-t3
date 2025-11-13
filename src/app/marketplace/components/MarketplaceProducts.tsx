'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  IconButton,
  Chip,
} from '@mui/material';
import { Favorite, FavoriteBorder, Star } from '@mui/icons-material';
import { useMarketplace } from '../../../hooks/useMarketplace';
import { useAuthStore } from '../../../store/authStore';

// Mock data con 6 productos e imágenes de alta calidad
const mockProducts = [
  {
    id: 1,
    title: 'Selling, plastics',
    location: 'Szombathely, Hungary',
    price: 400.00,
    unit: 't',
    quantity: '10 tonnes',
    rating: 3,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=600&fit=crop&q=80',
    isFavorited: false
  },
  {
    id: 2,
    title: 'Red SSI Schaefer EF 6421 containers',
    location: 'Werra-Suhl-Tal, Germany',
    price: 4.00,
    unit: 'pcs',
    quantity: '2,000 pieces',
    rating: 4,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80',
    isFavorited: false
  },
  {
    id: 3,
    title: 'PE regranulate – black',
    location: 'null, Czech Republic',
    price: null,
    unit: null,
    quantity: '1 tonne',
    rating: 3,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop&q=80',
    isFavorited: false
  },
  {
    id: 4,
    title: 'HDPE regranulate – natural',
    location: 'null, Czech Republic',
    price: null,
    unit: null,
    quantity: '24 tonnes',
    rating: 4,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=800&h=600&fit=crop&q=80',
    isFavorited: false
  },
  {
    id: 5,
    title: 'PP mixed color granulate',
    location: 'Barcelona, Spain',
    price: 350.00,
    unit: 't',
    quantity: '15 tonnes',
    rating: 4,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=800&h=600&fit=crop&q=80',
    isFavorited: false
  },
  {
    id: 6,
    title: 'PET bottle flakes - clear',
    location: 'Milano, Italy',
    price: 520.00,
    unit: 't',
    quantity: '8 tonnes',
    rating: 3,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1607588568941-26c8e0c78c44?w=800&h=600&fit=crop&q=80',
    isFavorited: false
  }
];

const MarketplaceProducts = () => {
  const { posts, loading, error, toggleFavorite } = useMarketplace();
  const { user } = useAuthStore();
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  // Use real data if available, otherwise use mock data
  const displayProducts = posts && posts.length > 0 ? posts : mockProducts;

  const handleToggleFavorite = (productId: number) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  if (loading) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography>Cargando publicaciones...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl" disableGutters sx={{ px: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
          {displayProducts.map((product: any) => (
            <Card 
              key={product.id} 
              sx={{ 
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                }
              }}
            >
              {/* Image Container */}
              <Box sx={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={product.image || product.images?.[0] || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&q=80"}
                  alt={product.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Rating Badge */}
                <Box sx={{
                  position: 'absolute',
                  top: 8,
                  left: -8,
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  pl: 1.5,
                  pr: 1,
                  py: 0.3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.2
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} sx={{ fontSize: '12px', color: '#ff8c00' }} />
                  ))}
                </Box>

                {/* New Badge */}
                {(product.isNew || product.is_new !== false) && (
                  <Chip
                    label="Nuevo"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 30,
                      left: -8,
                      backgroundColor: '#2E7D32',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      height: '20px',
                      pl: 1.5,
                      pr: 1,
                      '& .MuiChip-label': {
                        px: 0
                      }
                    }}
                  />
                )}

                {/* Favorite Icon */}
                <IconButton
                  onClick={() => handleToggleFavorite(product.id)}
                  sx={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    padding: 0,
                    minWidth: 'auto',
                    '&:hover': {
                      backgroundColor: 'transparent'
                    },
                    '&:hover .heart-fill': {
                      color: 'rgb(203, 247, 221)'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Background heart (filled on hover) */}
                    <Favorite 
                      className="heart-fill"
                      sx={{ 
                        position: 'absolute',
                        color: favorites[product.id] ? '#ff0000' : 'white',
                        fontSize: '28px',
                        transition: 'color 0.2s ease'
                      }} 
                    />
                    {/* Outline heart */}
                    <FavoriteBorder 
                      sx={{ 
                        color: '#999',
                        fontSize: '28px',
                        filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.1))'
                      }} 
                    />
                  </Box>
                </IconButton>
              </Box>

              {/* Content */}
              <Box sx={{ pl: 1.5, pr: 0.6, py: 0.6, pt: 2 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 0.5,
                    fontSize: '0.875rem',
                    color: '#000',
                    lineHeight: 1.3
                  }}
                >
                  {product.title}
                </Typography>

                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 3, fontSize: '0.7875rem', color: '#666' }}
                >
                  {product.location || 'Location not specified'}
                </Typography>

                {/* Price and Quantity */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: '#000',
                      fontSize: '0.9rem'
                    }}
                  >
                    {product.price ? `${product.price.toFixed(2)} EUR${product.unit ? ` / ${product.unit}` : ''}` : 'price per agreement'}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: '0.81rem', color: '#666' }}
                  >
                    {product.quantity}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {displayProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No hay publicaciones disponibles
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Intenta ajustar los filtros o vuelve más tarde
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default MarketplaceProducts;
