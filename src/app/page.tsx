// src/app/page.tsx
'use client'; // This marks the component as a Client Component

import React from 'react';
import HomeHero from './components/Hero';
import ConsultingSection from './components/ConsultingSection';
import CopilotSection from './components/CopilotSection';
import MarketplaceSection from './components/MarketplaceSection';
import NewsSection from './components/NewsSection';

export default function HomePage() {

  return (
    <div style={{ position: 'relative' }}>
      {/* Línea guía vertical para alineación */}
      <div
        style={{
          position: 'fixed',
          left: '125px',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          pointerEvents: 'none',
          display: 'none', // Oculto por defecto, se puede mostrar con display: 'block' para desarrollo
        }}
        className="guide-line-desktop"
      />
      <div
        style={{
          position: 'fixed',
          left: '16px',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          pointerEvents: 'none',
          display: 'none', // Oculto por defecto, se puede mostrar con display: 'block' para desarrollo
        }}
        className="guide-line-mobile"
      />
      
      {/* Hero Section - Justo debajo del header */}
      <HomeHero />
      
      {/* Consulting Section - Debajo del Hero */}
      <ConsultingSection />
      
      {/* Copilot Section - Debajo del Consulting Section */}
      <CopilotSection />
      
      {/* Marketplace Section - Debajo del Copilot Section */}
      <MarketplaceSection />
      
      {/* News Section - Debajo del Marketplace Section */}
      <NewsSection />
    </div>
  );
}
