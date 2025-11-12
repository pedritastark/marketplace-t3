import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the shape of the user object
interface User {
  id: string;
  email: string;
  userType: 'company' | 'provider' | 'admin';
  companyName?: string;
  fullName?: string;
}

// Define the shape of the store's state and actions
interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    email: string;
    password: string;
    user_type: string;
    company_name?: string;
    full_name: string;
    city: string;
    sector?: string;
    phone?: string;
  }) => Promise<void>;
  clearError: () => void;
}

// Mock data for users - Frontend funciona sin backend
interface MockUser {
  id: string;
  email: string;
  password: string;
  userType: 'company' | 'provider' | 'admin';
  companyName?: string;
  fullName: string;
}

const mockUsers: MockUser[] = [
  {
    id: '1',
    email: 'empresa@transforma3.com',
    password: 'password123',
    userType: 'company',
    companyName: 'Empresa Sustentable S.A.',
    fullName: 'Juan Pérez'
  },
  {
    id: '2',
    email: 'proveedor@transforma3.com',
    password: 'password123',
    userType: 'provider',
    companyName: 'Proveedora de Reciclaje',
    fullName: 'María García'
  },
  {
    id: '3',
    email: 'admin@transforma3.com',
    password: 'admin123',
    userType: 'admin',
    companyName: 'Transforma3',
    fullName: 'Admin Transforma3'
  }
];

// Create the store
export const useAuthStore = create<AuthState>()(
  // The persist middleware automatically saves the store's state to localStorage
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isLoading: false,
      error: null,
      
      setAuth: (token, user) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token);
        }
        set({ token, user, error: null });
      },
      
      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        set({ token: null, user: null, error: null });
      },
      
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 500));
        
        try {
          // Buscar usuario en datos mock
          const mockUser = mockUsers.find(u => u.email === email);
          
          if (!mockUser || mockUser.password !== password) {
            throw new Error('Credenciales inválidas');
          }
          
          // Crear token simulado
          const token = `mock-token-${Date.now()}`;
          
          // Crear objeto de usuario sin password
          const { password: _, ...user } = mockUser;
          
          get().setAuth(token, user);
        } catch (error: unknown) {
          set({ error: error instanceof Error ? error.message : 'Error al iniciar sesión' });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      register: async (userData) => {
        set({ isLoading: true, error: null });
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 800));
        
        try {
          // Verificar si el email ya existe
          const existingUser = mockUsers.find(u => u.email === userData.email);
          if (existingUser) {
            throw new Error('El email ya está registrado');
          }
          
          // Crear nuevo usuario mock
          const newUser = {
            id: String(mockUsers.length + 1),
            email: userData.email,
            password: userData.password,
            userType: userData.user_type as 'company' | 'provider' | 'admin',
            companyName: userData.company_name,
            fullName: userData.full_name
          };
          
          // Agregar usuario a la lista (solo en memoria para esta sesión)
          mockUsers.push(newUser);
          
          // Auto login después del registro
          await get().login(userData.email, userData.password);
        } catch (error: unknown) {
          set({ error: error instanceof Error ? error.message : 'Error al registrar usuario' });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage', // The key to use for storing the data in localStorage
    }
  )
);
