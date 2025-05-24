import React from 'react';
import { Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { navigationItems } from '../data/mockData';

const Sidebar: React.FC = () => {
  const LucideIcon = ({ name }: { name: string }) => {
    const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as React.FC<React.ComponentProps<typeof Icon>>;
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <aside className="w-48 bg-white shadow-md flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold">
          <span className="text-teal-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>

      <nav className="flex-1 px-2 py-4">
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 mb-2 px-3">General</p>
          <ul>
            {navigationItems
              .filter((item) => item.section === 'general')
              .map((item) => (
                <li key={item.name} className="mb-1">
                  <a
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                      item.name === 'Dashboard' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <LucideIcon name={item.icon} />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-400 mb-2 px-3">Tools</p>
          <ul>
            {navigationItems
              .filter((item) => item.section === 'tools')
              .map((item) => (
                <li key={item.name} className="mb-1">
                  <a
                    href={item.path}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"
                  >
                    <LucideIcon name={item.icon} />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;