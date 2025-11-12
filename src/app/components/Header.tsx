'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '../../store/authStore';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import Language from '@mui/icons-material/Language';
import Login from '@mui/icons-material/Login';
import LoginModal from '../login/_components/LoginModal';
import AccessModal from './AccessModal';


// Logo actualizado a "T3"
const Logo = () => (
  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#f44336', lineHeight: 1.2 }}>
    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      T3
    </Link>
  </Typography>
);

const navItems = [
  { label: 'CONSULTORIA', href: '/consultoria' },
  { label: 'COPILOTO', href: '/copilot' },
  { label: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
];

const navItemsBottom = [
  { label: 'MARKETPLACE', href: '/marketplace' },
  { label: 'EMPRESAS', href: '/empresas' },
];

function HeaderContent() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado para controlar la visibilidad del modal
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isAccessModalOpen, setAccessModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleDashboard = () => {
    router.push('/dashboard');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
  };


  return (
    <>
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'white', 
        color: 'black', 
        zIndex: 1300,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease-in-out',
        borderBottom: '1px solid #e0e0e0'
      }} elevation={0}>
        <Toolbar sx={{ 
          minHeight: { xs: '60px !important', md: '40px !important' }, 
          py: { xs: 1, md: 0.25 } 
        }}>
          {/* Menú hamburguesa - Mobile (a la izquierda) */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              p: 0.5
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Logo />

          {/* Menú de navegación - Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4, alignItems: 'center' }}>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                <Button
                  component={Link}
                  href={item.href}
                  sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '0.813rem' }}
                >
                  {item.label}
                </Button>
                {item.label === 'SOBRE NOSOTROS' && (
                  <Divider orientation="vertical" flexItem sx={{ mx: 0.5, borderColor: 'rgba(0, 0, 0, 0.5)', height: '24px', alignSelf: 'center' }} />
                )}
              </React.Fragment>
            ))}
            {navItemsBottom.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{ color: 'black', textTransform: 'none', fontWeight: 'bold', fontSize: '0.813rem' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Spacer para móvil */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />

          {/* Botones de usuario - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {user ? (
              <>
                <IconButton
                  size="large"
                  onClick={handleDashboard}
                  color="inherit"
                  sx={{ 
                    color: 'white',
                    backgroundColor: '#1976d2',
                    border: '1px solid #1976d2',
                    borderRadius: '50%',
                    width: 28,
                    height: 28,
                    boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                      borderColor: '#1565c0',
                      boxShadow: '0 4px 8px rgba(25, 118, 210, 0.4)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  onClick={() => setLoginModalOpen(true)}
                  sx={{ color: '#ff6f00', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant="text" 
                  component={Link}
                  href="/register"
                  sx={{ ml: 1, color: '#ff6f00', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  Registrarse
                </Button>
                <IconButton
                  size="large"
                  onClick={() => setAccessModalOpen(true)}
                  color="inherit"
                  sx={{ 
                    color: '#666666',
                    backgroundColor: '#f5f5f5',
                    border: '1px dashed #cccccc',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    '&:hover': {
                      backgroundColor: '#eeeeee',
                    }
                  }}
                >
                  <PersonIcon />
                </IconButton>
              </>
            )}
          </Box>

          {/* Botones de usuario - Mobile (visible en el header) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            {user ? (
              <IconButton
                size="small"
                onClick={handleDashboard}
                color="inherit"
                sx={{ 
                  color: 'white',
                  backgroundColor: '#555555',
                  border: '1px solid #555555',
                  borderRadius: '50%',
                  width: 26,
                  height: 26,
                  '&:hover': {
                    backgroundColor: '#444444',
                  }
                }}
              >
                <AccountCircle sx={{ fontSize: '1rem' }} />
              </IconButton>
            ) : (
              <>
                <Button
                  variant="text"
                  onClick={() => setLoginModalOpen(true)}
                  sx={{ 
                    color: '#ff6f00', 
                    fontWeight: 'bold', 
                    fontSize: '0.75rem',
                    minWidth: 'auto',
                    px: 1,
                    textTransform: 'uppercase'
                  }}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant="text" 
                  component={Link}
                  href="/register"
                  sx={{ 
                    color: '#ff6f00', 
                    fontWeight: 'bold', 
                    fontSize: '0.75rem',
                    minWidth: 'auto',
                    px: 1,
                    textTransform: 'uppercase'
                  }}
                >
                  Registrarse
                </Button>
                <IconButton
                  size="small"
                  onClick={() => setAccessModalOpen(true)}
                  color="inherit"
                  sx={{ 
                    color: '#444444',
                    backgroundColor: 'transparent',
                    border: '1px dashed #888888',
                    borderRadius: '50%',
                    width: 26,
                    height: 26,
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                    }
                  }}
                >
                  <PersonIcon sx={{ fontSize: '1rem' }} />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para menú móvil - Efecto persiana desde arriba */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            pt: '60px', // Espacio para el header
            overflow: 'auto'
          }
        }}
        transitionDuration={400}
      >
        <Box sx={{ width: '100%', height: '100%', px: 3, pt: 3 }}>
          {/* Links de navegación - Todas las páginas sin separación */}
          <List sx={{ p: 0 }}>
            {[...navItems, ...navItemsBottom].map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 0 }}>
                <ListItemButton 
                  onClick={() => handleMobileNavClick(item.href)}
                  sx={{
                    px: 2,
                    py: 2,
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{
                      fontWeight: 'bold',
                      fontSize: '0.813rem',
                      color: '#333',
                      letterSpacing: '0.5px'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Renderizamos los modales */}
      <LoginModal 
        open={isLoginModalOpen} 
        handleClose={() => setLoginModalOpen(false)} 
      />
      <AccessModal 
        open={isAccessModalOpen} 
        handleClose={() => setAccessModalOpen(false)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />
    </>
  );
}

// Wrapper que evita la hidratación del servidor
export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'white', 
        color: 'black', 
        zIndex: 1300,
        transform: 'translateY(0)',
        transition: 'transform 0.5s ease-in-out'
      }} elevation={0}>
        <Toolbar sx={{ minHeight: '40px !important', py: 0.25 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            T3
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  return <HeaderContent />;
}

