import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AnnonceListPage from './pages/AnnonceListPage';
import AnnonceDetailPage from './pages/AnnonceDetailPage';
import ProfilePage from './pages/ProfilePage';
import DemandesCandidatures from './pages/DemandesCandidatures';


function AppRoutes() {
  const { loading } = useAuth();

  if (loading) {
    return <div>Chargement...</div>; // ou un spinner
  }

  return (
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
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;