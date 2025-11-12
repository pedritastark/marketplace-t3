import { useState, useEffect } from 'react';

export interface MarketplacePost {
  id: number;
  title: string;
  description: string;
  category_id?: number;
  subcategory_id?: number;
  post_type: 'oferta' | 'demanda';
  price?: number;
  quantity?: number;
  unit?: string;
  location: string;
  region: string;
  images?: string[];
  is_premium: boolean;
  is_active: boolean;
  expires_at?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
  company_name?: string;
  full_name?: string;
  city?: string;
  sector?: string;
  category_name?: string;
  subcategory_name?: string;
  is_favorited: boolean;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  parent_id?: number;
  is_active: boolean;
  created_at: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
  created_at: string;
}

// Mock data para categorías
const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Plásticos',
    description: 'Materiales plásticos reciclables',
    icon: '♻️',
    is_active: true,
    created_at: new Date().toISOString(),
    subcategories: [
      { id: 1, name: 'PET', description: 'Polietileno tereftalato', is_active: true, created_at: new Date().toISOString() },
      { id: 2, name: 'HDPE', description: 'Polietileno de alta densidad', is_active: true, created_at: new Date().toISOString() },
      { id: 3, name: 'PVC', description: 'Policloruro de vinilo', is_active: true, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 2,
    name: 'Papel y Cartón',
    description: 'Materiales de papel reciclable',
    icon: '📄',
    is_active: true,
    created_at: new Date().toISOString(),
    subcategories: [
      { id: 4, name: 'Cartón corrugado', is_active: true, created_at: new Date().toISOString() },
      { id: 5, name: 'Papel blanco', is_active: true, created_at: new Date().toISOString() },
      { id: 6, name: 'Papel periódico', is_active: true, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 3,
    name: 'Metales',
    description: 'Chatarra y metales reciclables',
    icon: '🔩',
    is_active: true,
    created_at: new Date().toISOString(),
    subcategories: [
      { id: 7, name: 'Aluminio', is_active: true, created_at: new Date().toISOString() },
      { id: 8, name: 'Cobre', is_active: true, created_at: new Date().toISOString() },
      { id: 9, name: 'Acero', is_active: true, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 4,
    name: 'Electrónicos',
    description: 'Residuos electrónicos',
    icon: '💻',
    is_active: true,
    created_at: new Date().toISOString(),
    subcategories: [
      { id: 10, name: 'Computadoras', is_active: true, created_at: new Date().toISOString() },
      { id: 11, name: 'Celulares', is_active: true, created_at: new Date().toISOString() },
      { id: 12, name: 'Cables', is_active: true, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 5,
    name: 'Vidrio',
    description: 'Vidrio reciclable',
    icon: '🍾',
    is_active: true,
    created_at: new Date().toISOString(),
    subcategories: [
      { id: 13, name: 'Botellas', is_active: true, created_at: new Date().toISOString() },
      { id: 14, name: 'Frascos', is_active: true, created_at: new Date().toISOString() }
    ]
  }
];

// Mock data para publicaciones del marketplace
const mockPosts: MarketplacePost[] = [
  {
    id: 1,
    title: 'Botellas PET limpias - 5 toneladas',
    description: 'Botellas PET transparentes, limpias y compactadas. Listas para reciclaje.',
    category_id: 1,
    subcategory_id: 1,
    post_type: 'oferta',
    price: 8500,
    quantity: 5000,
    unit: 'kg',
    location: 'Ciudad de México',
    region: 'CDMX',
    images: ['/marketplace.jpeg'],
    is_premium: true,
    is_active: true,
    view_count: 245,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Recicladora del Centro',
    city: 'Ciudad de México',
    sector: 'Reciclaje',
    category_name: 'Plásticos',
    subcategory_name: 'PET',
    is_favorited: false
  },
  {
    id: 2,
    title: 'Necesito cartón corrugado',
    description: 'Buscamos proveedor regular de cartón corrugado limpio. Pago inmediato.',
    category_id: 2,
    subcategory_id: 4,
    post_type: 'demanda',
    price: 2500,
    quantity: 10000,
    unit: 'kg',
    location: 'Monterrey',
    region: 'Nuevo León',
    images: [],
    is_premium: false,
    is_active: true,
    view_count: 89,
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Empacadora Industrial SA',
    city: 'Monterrey',
    sector: 'Manufactura',
    category_name: 'Papel y Cartón',
    subcategory_name: 'Cartón corrugado',
    is_favorited: false
  },
  {
    id: 3,
    title: 'Chatarra de aluminio clasificada',
    description: 'Aluminio de primera calidad, clasificado y libre de contaminantes. Certificado disponible.',
    category_id: 3,
    subcategory_id: 7,
    post_type: 'oferta',
    price: 22000,
    quantity: 3000,
    unit: 'kg',
    location: 'Guadalajara',
    region: 'Jalisco',
    images: [],
    is_premium: true,
    is_active: true,
    view_count: 156,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Metales del Occidente',
    city: 'Guadalajara',
    sector: 'Metales',
    category_name: 'Metales',
    subcategory_name: 'Aluminio',
    is_favorited: false
  },
  {
    id: 4,
    title: 'Compro equipo electrónico obsoleto',
    description: 'Compramos computadoras, laptops y equipos electrónicos obsoletos o dañados. Recolección sin costo.',
    category_id: 4,
    subcategory_id: 10,
    post_type: 'demanda',
    price: 15000,
    quantity: 500,
    unit: 'unidades',
    location: 'Puebla',
    region: 'Puebla',
    images: [],
    is_premium: false,
    is_active: true,
    view_count: 203,
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'E-Waste Solutions',
    city: 'Puebla',
    sector: 'Electrónicos',
    category_name: 'Electrónicos',
    subcategory_name: 'Computadoras',
    is_favorited: false
  },
  {
    id: 5,
    title: 'Vidrio triturado - Colores mezclados',
    description: 'Vidrio de botellas triturado, colores mezclados. Ideal para construcción o reciclaje.',
    category_id: 5,
    subcategory_id: 13,
    post_type: 'oferta',
    price: 1200,
    quantity: 8000,
    unit: 'kg',
    location: 'Querétaro',
    region: 'Querétaro',
    images: [],
    is_premium: false,
    is_active: true,
    view_count: 67,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Vidrio Verde',
    city: 'Querétaro',
    sector: 'Reciclaje',
    category_name: 'Vidrio',
    subcategory_name: 'Botellas',
    is_favorited: false
  },
  {
    id: 6,
    title: 'HDPE de alta calidad - Post industrial',
    description: 'Plástico HDPE de desecho industrial, limpio y clasificado. Ideal para reprocesamiento.',
    category_id: 1,
    subcategory_id: 2,
    post_type: 'oferta',
    price: 12000,
    quantity: 4000,
    unit: 'kg',
    location: 'Tijuana',
    region: 'Baja California',
    images: [],
    is_premium: true,
    is_active: true,
    view_count: 312,
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Plásticos del Norte',
    city: 'Tijuana',
    sector: 'Manufactura',
    category_name: 'Plásticos',
    subcategory_name: 'HDPE',
    is_favorited: false
  },
  {
    id: 7,
    title: 'Busco papel blanco de oficina',
    description: 'Requerimos papel blanco de oficina usado. Pagamos buen precio y ofrecemos recolección.',
    category_id: 2,
    subcategory_id: 5,
    post_type: 'demanda',
    price: 3500,
    quantity: 6000,
    unit: 'kg',
    location: 'Mérida',
    region: 'Yucatán',
    images: [],
    is_premium: false,
    is_active: true,
    view_count: 124,
    created_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Papel Peninsular',
    city: 'Mérida',
    sector: 'Papel',
    category_name: 'Papel y Cartón',
    subcategory_name: 'Papel blanco',
    is_favorited: false
  },
  {
    id: 8,
    title: 'Cobre recuperado de cables',
    description: 'Cobre puro recuperado de cables eléctricos. Alta conductividad, certificado de calidad.',
    category_id: 3,
    subcategory_id: 8,
    post_type: 'oferta',
    price: 95000,
    quantity: 1000,
    unit: 'kg',
    location: 'León',
    region: 'Guanajuato',
    images: [],
    is_premium: true,
    is_active: true,
    view_count: 445,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    company_name: 'Recuperadora de Metales GTO',
    city: 'León',
    sector: 'Metales',
    category_name: 'Metales',
    subcategory_name: 'Cobre',
    is_favorited: false
  }
];

export const useMarketplace = () => {
  const [posts, setPosts] = useState<MarketplacePost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async (params: {
    page?: number;
    limit?: number;
    category?: string;
    post_type?: string;
    region?: string;
    search?: string;
  } = {}) => {
    setLoading(true);
    setError(null);
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 300));
    
    try {
      // Filtrar posts basados en los parámetros
      let filteredPosts = [...mockPosts];
      
      if (params.category) {
        filteredPosts = filteredPosts.filter(post => 
          post.category_name?.toLowerCase() === params.category?.toLowerCase()
        );
      }
      
      if (params.post_type) {
        filteredPosts = filteredPosts.filter(post => 
          post.post_type === params.post_type
        );
      }
      
      if (params.region) {
        filteredPosts = filteredPosts.filter(post => 
          post.region.toLowerCase().includes(params.region?.toLowerCase() || '')
        );
      }
      
      if (params.search) {
        const searchLower = params.search.toLowerCase();
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchLower) ||
          post.description.toLowerCase().includes(searchLower)
        );
      }
      
      setPosts(filteredPosts);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al cargar publicaciones');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 200));
    
    try {
      setCategories(mockCategories);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al cargar categorías');
    }
  };

  const toggleFavorite = async (postId: number, isFavorited: boolean) => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
      // Actualizar estado local
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { ...post, is_favorited: !isFavorited }
            : post
        )
      );
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al actualizar favorito');
    }
  };

  const createPost = async (postData: {
    title: string;
    description: string;
    category_id?: number;
    subcategory_id?: number;
    post_type: string;
    price?: number;
    quantity?: number;
    unit?: string;
    location: string;
    region: string;
    images?: string[];
  }) => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      // Buscar información de categoría y subcategoría
      const category = mockCategories.find(cat => cat.id === postData.category_id);
      const subcategory = category?.subcategories.find(sub => sub.id === postData.subcategory_id);
      
      // Crear nueva publicación
      const newPost: MarketplacePost = {
        id: Math.max(...mockPosts.map(p => p.id)) + 1,
        title: postData.title,
        description: postData.description,
        category_id: postData.category_id,
        subcategory_id: postData.subcategory_id,
        post_type: postData.post_type as 'oferta' | 'demanda',
        price: postData.price,
        quantity: postData.quantity,
        unit: postData.unit,
        location: postData.location,
        region: postData.region,
        images: postData.images || [],
        is_premium: false,
        is_active: true,
        view_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        company_name: 'Mi Empresa',
        category_name: category?.name,
        subcategory_name: subcategory?.name,
        is_favorited: false
      };
      
      // Agregar a mockPosts (solo en memoria para esta sesión)
      mockPosts.unshift(newPost);
      
      // Actualizar estado local
      setPosts(prevPosts => [newPost, ...prevPosts]);
      
      return newPost;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al crear publicación');
      throw err;
    }
  };

  useEffect(() => {
    // Solo hacer fetch si no hay datos y no hay error
    if (categories.length === 0 && !error) {
      fetchCategories();
    }
    if (posts.length === 0 && !error) {
      fetchPosts();
    }
  }, []);

  return {
    posts,
    categories,
    loading,
    error,
    fetchPosts,
    fetchCategories,
    toggleFavorite,
    createPost,
  };
};
