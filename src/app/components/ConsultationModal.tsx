'use client';

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  MenuItem,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';

// Interfaz para las props del componente
interface ConsultationModalProps {
  open: boolean;
  handleClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: { xs: 0, md: '50%' },
  left: { xs: 0, md: '50%' },
  transform: { xs: 'none', md: 'translate(-50%, -50%)' },
  width: { xs: '100vw', md: 480 },
  height: { xs: '100vh', md: 'auto' },
  bgcolor: '#f5f5f5',
  borderRadius: { xs: 0, md: '16px' },
  boxShadow: 24,
  p: { xs: 2, md: 4 },
  overflow: { xs: 'hidden', md: 'auto' },
  display: 'flex',
  flexDirection: 'column',
};

export default function ConsultationModal({ open, handleClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phonePrefix: '+57',
    phoneNumber: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    // Aquí iría la lógica para enviar los datos a un backend o a un servicio de email
    // Por ahora, solo mostraremos un mensaje de éxito
    console.log('Datos de consulta enviados:', formData);
    setShowSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose();
    // Reset form
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phonePrefix: '+57',
      phoneNumber: '',
    });
  };

  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="consultation-modal-title"
      BackdropProps={{
        style: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <Box sx={modalStyle}>
        <Typography 
          id="consultation-modal-title" 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#5d4037',
            mb: { xs: 1.5, md: 3 },
            fontSize: { xs: '1.3rem', md: '2.125rem' }
          }}
        >
          Quiero una consulta gratuita
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#000',
            mb: { xs: 0.5, md: 1 },
            fontWeight: 400,
            fontSize: { xs: '0.85rem', md: '1.25rem' }
          }}
        >
          A un solo paso de ahorrar en la gestión de residuos.
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#000',
            mb: { xs: 2, md: 4 },
            fontWeight: 400,
            fontSize: { xs: '0.85rem', md: '1.25rem' }
          }}
        >
          Completa el formulario y nuestros expertos te llamarán.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.2, md: 2.5 }, flex: 1 }}>
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: { xs: 0.3, md: 0.5 }, fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                Nombre completo
              </Typography>
              <TextField 
                name="fullName" 
                fullWidth 
                required 
                onChange={handleChange}
                placeholder=""
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '& fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff8c00',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                  },
                }}
              />
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: { xs: 0.3, md: 0.5 }, fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                Nombre de la empresa
              </Typography>
              <TextField 
                name="companyName" 
                fullWidth 
                required 
                onChange={handleChange}
                placeholder=""
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '& fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff8c00',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                  },
                }}
              />
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: { xs: 0.3, md: 0.5 }, fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                Correo electrónico
              </Typography>
              <TextField 
                name="email" 
                type="email" 
                fullWidth 
                required 
                onChange={handleChange}
                placeholder=""
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '& fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff8c00',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                  },
                }}
              />
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: { xs: 0.3, md: 0.5 }, fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                Prefijo telefónico
              </Typography>
              <TextField 
                name="phonePrefix" 
                required 
                select 
                fullWidth
                value="+57"
                disabled
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '& fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                  },
                }}
              >
                <MenuItem value="+57">+57</MenuItem>
              </TextField>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: { xs: 0.3, md: 0.5 }, fontSize: { xs: '0.75rem', md: '0.9rem' } }}>
                Número de teléfono
              </Typography>
              <TextField 
                name="phoneNumber" 
                required 
                fullWidth
                onChange={handleChange}
                placeholder=""
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '& fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff8c00',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff8c00',
                      borderWidth: '2px',
                    },
                  },
                }}
              />
            </Box>
          </Box>
          
          {success && <Alert severity="success" sx={{ mt: { xs: 1.5, md: 2.5 }, width: '100%', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>{success}</Alert>}
          {error && <Alert severity="error" sx={{ mt: { xs: 1.5, md: 2.5 }, width: '100%', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>{error}</Alert>}

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: { xs: 1.5, md: 4 }, flexWrap: 'wrap', gap: 1 }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<LockIcon sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' } }} />}
              sx={{ 
                backgroundColor: '#ff8c00',
                color: 'white',
                '&:hover': { backgroundColor: '#e67e00' },
                borderRadius: '12px',
                padding: { xs: '8px 16px', md: '12px 32px' },
                boxShadow: 'none',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: { xs: '0.7rem', md: '1rem' },
              }}
            >
              Enviar
            </Button>
            
            <Button
              onClick={handleClose}
              variant="text"
              endIcon={<CloseIcon sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' } }} />}
              sx={{ 
                color: '#dc143c', 
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: { xs: '0.7rem', md: '1rem' },
                padding: { xs: '8px 12px', md: '6px 8px' },
                '&:hover': { 
                  backgroundColor: 'rgba(220, 20, 60, 0.1)' 
                }
              }}
            >
              Cerrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>

    {/* Modal de Éxito */}
    <Modal
      open={showSuccessModal}
      onClose={handleSuccessClose}
      aria-labelledby="success-modal-title"
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '85vw', sm: '400px', md: '500px' },
          bgcolor: '#f5f5f5',
          borderRadius: '24px',
          boxShadow: 24,
          p: { xs: 4, md: 6 },
          textAlign: 'left',
        }}
      >
        <Typography
          id="success-modal-title"
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            mb: 3,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Todo enviado.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#4caf50',
            fontWeight: 500,
            mb: 1,
            fontSize: { xs: '1.1rem', md: '1.4rem' }
          }}
        >
          Nuestro experto te contactará pronto.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#000',
            fontWeight: 400,
            mb: 4,
            fontSize: { xs: '1.1rem', md: '1.4rem' }
          }}
        >
          Gracias.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={handleSuccessClose}
            variant="text"
            endIcon={<CloseIcon />}
            sx={{
              color: '#dc143c',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: { xs: '0.9rem', md: '1.1rem' },
              '&:hover': {
                backgroundColor: 'rgba(220, 20, 60, 0.1)'
              }
            }}
          >
            Cerrar
          </Button>
        </Box>
      </Box>
    </Modal>
  </>
  );
}

