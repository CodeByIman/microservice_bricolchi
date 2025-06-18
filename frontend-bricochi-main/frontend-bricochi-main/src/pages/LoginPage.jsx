import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Shield, Users, Clock, Hammer, CheckCircle, Wrench, Home } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 caractères';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      console.log('Login:', formData);
      setIsLoading(false);
    }, 2000);
  };

  const handleBackToHome = () => {
    // Navigate to home page
    window.location.href = '/';
  };

  const handleRegisterRedirect = () => {
    // Navigate to register page
    window.location.href = '/register';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex">
      {/* Section gauche - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-700 to-emerald-400 relative overflow-hidden">
        {/* Éléments décoratifs d'arrière-plan */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Contenu principal centré verticalement */}
        <div className="flex flex-col justify-center items-center w-full h-full p-12 text-white z-10 relative">
          {/* En-tête avec logo */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <Hammer className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">BricolChi</h1>
            <p className="text-white/90 text-lg font-medium">Votre plateforme de services à domicile</p>
          </div>

          {/* */}

          {/* Points forts alignés horizontalement */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white/90 font-medium">Sécurisé</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white/90 font-medium">12k+ Utilisateurs</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white/90 font-medium">Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section droite - Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Bouton retour */}
          <button
            onClick={handleBackToHome}
            className="flex items-center text-teal-700 hover:text-emerald-500 transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </button>

          {/* Carte de connexion */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            {/* Header centré */}
            <div className="px-8 py-10 text-center border-b border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-700 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bon retour !</h2>
              <p className="text-gray-600">Connectez-vous à votre compte</p>
            </div>

            {/* Formulaire avec espacement uniforme */}
            <div className="px-8 py-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Adresse email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-400 bg-red-50 focus:border-red-400' 
                          : 'border-gray-200 focus:border-emerald-400'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mot de passe */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 pr-12 bg-gray-50 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.password 
                          ? 'border-red-400 bg-red-50 focus:border-red-400' 
                          : 'border-gray-200 focus:border-emerald-400'
                      }`}
                      placeholder="Votre mot de passe"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-700 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                {/* Options alignées */}
                <div className="flex items-center justify-between text-sm pt-2">
                  <label className="flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mr-3 w-4 h-4 accent-teal-700 rounded transition-colors duration-300" 
                    />
                    <span className="text-gray-700 group-hover:text-teal-700 transition-colors duration-300">
                      Se souvenir de moi
                    </span>
                  </label>
                  <button 
                    type="button" 
                    className="text-teal-700 hover:text-emerald-500 transition-colors duration-300 font-medium"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>

                {/* Bouton de connexion */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Connexion en cours...
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">Se connecter</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </button>
              </div>

              {/* Lien d'inscription centré */}
              <div className="text-center mt-8 p-6 bg-gradient-to-r from-slate-50 to-emerald-50 rounded-xl border border-gray-100">
                <p className="text-gray-900 text-sm">
                  Pas encore de compte ?{' '}
                  <button
                    type="button"
                    onClick={handleRegisterRedirect}
                    className="text-teal-700 font-semibold hover:text-emerald-500 transition-colors duration-300 hover:underline"
                  >
                    Créer un compte
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Version mobile - Indicateurs de confiance alignés */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Sécurisé</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-teal-700" />
              </div>
              <span className="text-xs text-gray-600 font-medium">12k+ Utilisateurs</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;