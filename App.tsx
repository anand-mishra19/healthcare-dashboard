import React from 'react';
import Sidebar from './src/components/Sidebar';
import Dashboard from './src/pages/Dashboard';
import { AppProvider } from '../my-app/src/context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          <Dashboard />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;