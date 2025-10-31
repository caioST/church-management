import { useState, type ComponentType } from 'react'; // 1. Importar ComponentType
import { Dashboard } from './components/Dashboard';
import { Membros } from './components/Members';
import { Events } from './components/Events';
import { Donations } from './components/Donations';
import { Volunteers } from './components/Volunteers';
import { Communications } from './components/Communications';
import { Settings } from './components/Settings';
import {
  Home,
  Users,
  Calendar,
  DollarSign,
  HandHeart,
  MessageSquare,
  Settings as SettingsIcon,
  Church,
  type LucideIcon, // 2. Importar o tipo do ícone
} from 'lucide-react';

// 3. Definir um tipo para os itens do menu para garantir a correção
type MenuItem = {
  id: string;
  label: string;
  icon: LucideIcon; // O ícone é um componente
  component: ComponentType; // O componente é um tipo, não um elemento
};

// 4. Usar os *nomes* dos componentes (as "receitas"), não os elementos <...>
const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home,
    component: Dashboard, 
  },
  {
    id: 'members',
    label: 'Membros',
    icon: Users,
    component: Membros, 
  },
  {
    id: 'events',
    label: 'Eventos',
    icon: Calendar,
    component: Events,
  },
  {
    id: 'donations',
    label: 'Financeiro',
    icon: DollarSign,
    component: Donations,
  },
  {
    id: 'volunteers',
    label: 'Voluntários',
    icon: HandHeart,
    component: Volunteers, 
  },
  {
    id: 'communications',
    label: 'Comunicação',
    icon: MessageSquare,
    component: Communications, 
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: SettingsIcon,
    component: Settings, 
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  
  const ActiveComponent =
    menuItems.find((item) => item.id === activeSection)?.component || Dashboard;

  return (
    <div className="flex h-screen w-full">
      <aside className="w-64 border-r border-border bg-sidebar">
        <div className="p-4">
          <div className="flex items-center gap-2">
            <Church className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-lg font-semibold">ChurchAdmin</h1>
              <p className="text-sm text-muted-foreground">
                Sistema de Gestão Igreja
              </p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                      : 'hover:bg-sidebar-accent text-sidebar-foreground'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 text-sm text-muted-foreground">
          <p>Assembleia de Deus Lapa</p>
          <p>Admin Portal v1.0</p>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {}
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
