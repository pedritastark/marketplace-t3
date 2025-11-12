# 🚀 Guía de Uso - Transforma3 Frontend (Standalone)

## 📋 Introducción

Este frontend funciona **100% independiente** sin necesidad de backend. Todos los datos son manejados localmente con datos mock realistas.

## 🎯 Inicio Rápido

### 1. Instalación

```bash
# Clonar el repositorio
git clone git@github.com:pedritastark/transforma3-frontend.git
cd transforma3-frontend

# Instalar dependencias
npm install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre tu navegador en: `http://localhost:3000`

### 3. Build de Producción

```bash
npm run build
npm start
```

## 👤 Usuarios de Prueba

El sistema incluye usuarios pre-registrados para pruebas:

| Tipo | Email | Contraseña |
|------|-------|------------|
| **Empresa** | empresa@transforma3.com | password123 |
| **Proveedor** | proveedor@transforma3.com | password123 |
| **Admin** | admin@transforma3.com | admin123 |

## 🔑 Funcionalidades Principales

### Autenticación
- ✅ Login con usuarios mock
- ✅ Registro de nuevos usuarios (guardados en memoria)
- ✅ Sesión persistente en localStorage
- ✅ Logout funcional

### Marketplace
- ✅ 8 publicaciones de ejemplo
- ✅ Filtrado por categoría, tipo y región
- ✅ Búsqueda de publicaciones
- ✅ Sistema de favoritos
- ✅ Crear nuevas publicaciones
- ✅ Ver detalles de publicaciones

### Categorías Disponibles
1. **Plásticos** - PET, HDPE, PVC
2. **Papel y Cartón** - Cartón corrugado, papel blanco, periódico
3. **Metales** - Aluminio, Cobre, Acero
4. **Electrónicos** - Computadoras, Celulares, Cables
5. **Vidrio** - Botellas, Frascos

## 📖 Flujo de Uso Típico

### Escenario 1: Usuario Nuevo

1. Ve a la página principal (`/`)
2. Haz clic en "Registrarse"
3. Completa el formulario de registro
4. Serás redirigido al login automáticamente
5. Accede al dashboard

### Escenario 2: Usuario Existente

1. Ve a la página principal
2. Haz clic en "Iniciar Sesión"
3. Usa uno de los usuarios de prueba
4. Explora el marketplace, consultoría, etc.

### Escenario 3: Explorar Marketplace

1. Inicia sesión (o ve directamente a `/marketplace`)
2. Filtra por categoría o tipo (oferta/demanda)
3. Busca productos específicos
4. Marca favoritos
5. Crea una nueva publicación

## 🎨 Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con hero y servicios |
| `/marketplace` | Marketplace de materiales reciclables |
| `/empresas` | Directorio de empresas sostenibles |
| `/consultoria` | Servicios de consultoría |
| `/copilot` | Herramienta de gestión y reportes |
| `/dashboard` | Panel de control de usuario |
| `/publicaciones` | Gestión de publicaciones del usuario |
| `/register` | Registro de nuevos usuarios |
| `/sobre-nosotros` | Información sobre la plataforma |

## 🔧 Desarrollo

### Estructura del Proyecto

```
src/
├── app/                    # Páginas y componentes
│   ├── components/        # Componentes compartidos
│   ├── marketplace/       # Marketplace
│   ├── dashboard/         # Dashboard
│   └── ...
├── hooks/                 # Custom hooks con datos mock
│   └── useMarketplace.ts # Hook del marketplace
└── store/                 # Estado global (Zustand)
    └── authStore.ts       # Store de autenticación
```

### Agregar Nuevos Datos Mock

#### Agregar Usuario:

Edita `/src/store/authStore.ts`:

```typescript
const mockUsers: MockUser[] = [
  // ... usuarios existentes
  {
    id: '4',
    email: 'nuevo@transforma3.com',
    password: 'password',
    userType: 'company',
    companyName: 'Mi Empresa',
    fullName: 'Nombre Completo'
  }
];
```

#### Agregar Publicación:

Edita `/src/hooks/useMarketplace.ts`:

```typescript
const mockPosts: MarketplacePost[] = [
  // ... publicaciones existentes
  {
    id: 9,
    title: 'Nueva Publicación',
    description: 'Descripción aquí',
    category_id: 1,
    post_type: 'oferta',
    price: 5000,
    // ... más campos
  }
];
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. No requiere variables de entorno
3. Deploy automático en cada push

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Otros Servicios (Railway, Render, etc.)

1. Build: `npm run build`
2. Start: `npm start`
3. Puerto: 3000 (por defecto)

## ⚠️ Limitaciones

- **Datos en memoria**: Los usuarios registrados y publicaciones creadas se pierden al recargar
- **Sin persistencia**: Solo la sesión se guarda en localStorage
- **No hay backend real**: Perfecto para demos pero no para producción real

## 🔮 Próximos Pasos (Opcional)

Si quieres conectar un backend en el futuro:

1. Reinstala axios: `npm install axios`
2. Recrea `/src/services/api.ts` con las llamadas reales
3. Actualiza `authStore.ts` y `useMarketplace.ts` para usar las APIs
4. Configura variables de entorno

## 💡 Tips

- Los delays de red (300-800ms) son intencionales para simular una API real
- Usa las DevTools de React para explorar el estado
- El localStorage almacena la sesión, límpialo para "cerrar sesión"

## 📞 Soporte

Para preguntas o problemas:
- Email: contacto@transforma3.com
- GitHub: [Issues](https://github.com/pedritastark/transforma3-frontend/issues)

---

¡Disfruta explorando Transforma3! 🌱♻️

