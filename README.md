# Transforma3 - Frontend (Standalone)

Frontend de la plataforma Transforma3, construido con Next.js 15, TypeScript y Material-UI. 

**✨ Este frontend funciona completamente de manera independiente, sin necesidad de backend.** Utiliza datos mock para simular toda la funcionalidad de la plataforma.

## 🚀 Tecnologías

- **Next.js 15.5** - Framework de React con Turbopack
- **TypeScript** - Tipado estático
- **Material-UI (MUI) v7** - Componentes de UI
- **Zustand** - Gestión de estado
- **React 19** - Biblioteca de UI

## 📋 Prerrequisitos

- Node.js 18 o superior
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone git@github.com:pedritastark/transforma3-frontend.git
cd transforma3-frontend
```

2. Instalar dependencias:
```bash
npm install
```

**Nota:** No se requiere configuración de variables de entorno ni backend. El frontend funciona de manera completamente independiente con datos mock.

## 🚀 Ejecutar el Proyecto

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`

### Build de Producción
```bash
npm run build
npm start
```

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción con Turbopack
- `npm start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint

## 📁 Estructura del Proyecto

```
src/
├── app/                      # App Router de Next.js
│   ├── components/          # Componentes compartidos
│   ├── consultoria/         # Página de consultoría
│   ├── copilot/            # Página de Copilot
│   ├── dashboard/          # Dashboard de usuario
│   ├── demandas/           # Página de demandas
│   ├── empresas/           # Directorio de empresas
│   ├── login/              # Página de login
│   ├── marketplace/        # Marketplace de materiales
│   ├── publicaciones/      # Gestión de publicaciones
│   ├── register/           # Página de registro
│   ├── sobre-nosotros/     # Página Sobre Nosotros
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── hooks/                   # Custom React Hooks (con datos mock)
└── store/                  # Estado global (Zustand con datos mock)
```

## 🎨 Características Principales

### Páginas
- **Home** - Página principal con hero y secciones de servicios
- **Marketplace** - Compra y venta de materiales reciclables
- **Empresas** - Directorio de empresas sostenibles
- **Consultoría** - Servicios de asesoría en economía circular
- **Copilot** - Herramienta de gestión y reportes
- **Dashboard** - Panel de control de usuario
- **Login/Register** - Autenticación de usuarios

### Componentes Principales
- `Header` - Navegación principal con autenticación
- `Footer` - Pie de página
- `Hero` - Sección hero de la página principal
- `MarketplaceProducts` - Lista de productos del marketplace
- `ConsultingSection` - Sección de consultoría
- `CopilotSection` - Sección de Copilot
- `NewsSection` - Sección de noticias

## 📊 Datos Mock

El frontend incluye datos mock para todas las funcionalidades:

### Autenticación
Usuarios de prueba disponibles:
- **Empresa**: `empresa@transforma3.com` / `password123`
- **Proveedor**: `proveedor@transforma3.com` / `password123`
- **Admin**: `admin@transforma3.com` / `admin123`

También puedes registrar nuevos usuarios (se guardan en memoria durante la sesión).

### Marketplace
- 8 publicaciones de ejemplo con diferentes categorías
- 5 categorías de materiales reciclables
- Sistema de favoritos funcional
- Filtros por categoría, tipo y región

### Funcionalidades
- Login y registro sin backend
- Gestión de sesión con localStorage
- Marketplace completamente funcional
- Creación de publicaciones
- Sistema de favoritos
- Perfil de usuario

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar el repositorio en Vercel
2. El build se ejecutará automáticamente
3. No requiere configuración adicional

### Otros Servicios (Netlify, Railway, etc.)
1. Build command: `npm run build`
2. Output directory: `.next`
3. Start command: `npm start`

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

- **Email**: contacto@transforma3.com
- **Website**: https://transforma3.com
