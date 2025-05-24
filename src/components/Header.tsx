import React from 'react';
import { Bell, ChevronLeft, ChevronRight, Search, User, Plus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
  const { currentWeek, setCurrentWeek } = useAppContext();
  
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentWeek);
  const year = currentWeek.getFullYear();

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentWeek);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentWeek(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevWeek} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} className="text-gray-500" />
          </button>
          <h2 className="text-sm font-medium">
            {month} {year}
          </h2>
          <button 
            onClick={handleNextWeek}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20} className="text-gray-500" />
          </button>
        </div>

        <button className="relative">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-blue-600 rounded-full w-2 h-2"></span>
        </button>

        <button className="bg-teal-500 text-white p-2 rounded-lg">
          <User size={20} />
        </button>

        <button className="bg-blue-600 text-white p-2 rounded-lg">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;