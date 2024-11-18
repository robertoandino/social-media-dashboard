import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Analytics from './components/Analytics';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <DashboardLayout>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <ProfileCard/>
        <div className="lg:col-span-2 space-y-6">
          <Analytics />
          <Feed />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
