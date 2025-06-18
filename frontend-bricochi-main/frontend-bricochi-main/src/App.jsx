// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AnnonceListPage from './pages/AnnonceListPage';
import AnnonceDetailPage from './pages/AnnonceDetailPage';
import ProfilePage from './pages/ProfilePage';
import DemandesCandidatures from './pages/DemandesCandidatures';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/annonces" element={<AnnonceListPage />} />
        <Route path="/annonces/:id" element={<AnnonceDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/demande" element={<DemandesCandidatures />} />
      </Routes>
    </Router>
  );
};

export default App;
