// pages/DashboardPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Bienvenue sur votre tableau de bord</h2>
        <p className="text-gray-600">Ici vous trouverez vos statistiques, annonces, et plus encore.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
