import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <DashboardLayout>
      <Navbar />
      <div className="space-y-6">
        <Analytics />
        <Feed />
      </div>
    </DashboardLayout>
  );
}

export default App;
