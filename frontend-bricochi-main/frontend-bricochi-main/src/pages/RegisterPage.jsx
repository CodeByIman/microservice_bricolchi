import React, { useState } from 'react';
import { Shield, Users, Clock, Hammer, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "CLIENT",
    speciality: "",
    location: "",
    bio: "",
    hourlyRate: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });
  
const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLoginRedirect = () => {
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = { ...form };

    if (payload.role === "PRESTATAIRE") {
      payload.hourlyRate = parseFloat(payload.hourlyRate);
    }

    try {
      console.log("Registration data:", payload);
      setMessage({ text: "Inscription réussie ! Redirection vers la connexion...", isError: false });
      
      setTimeout(() => {
        setMessage({ text: "", isError: false });
        console.log("Redirecting to login...");
      }, 2000);
    } catch (err) {
      setMessage({ text: err.message || "Échec de l'inscription", isError: true });
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{
      background: 'linear-gradient(135deg, #F8FAFC 0%, rgba(112, 214, 168, 0.1) 100%)'
    }}>
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#70D6A8] rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FBBF24] rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#1F7A8C] rounded-full opacity-10 blur-3xl animate-pulse"></div>

      <div className="w-full max-w-6xl">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#1F7A8C] to-[#70D6A8] p-6 text-center">
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Hammer className="text-white text-xl" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Rejoignez-nous</h1>
            <p className="text-white/90 text-sm">Créez votre compte professionnel</p>
          </div>

          {/* Contenu principal en deux colonnes */}
          <div className="p-8 pt-12">
            {/* Message de feedback */}
            {message.text && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                message.isError 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {message.text}
              </div>
            )}

            <div onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Colonne gauche - Informations de base */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-[#1F7A8C] mb-4 border-b border-gray-200 pb-2">
                    Informations personnelles
                  </h3>

                  {/* Nom d'utilisateur */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Nom d'utilisateur
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                      placeholder="Entrez votre nom d'utilisateur"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  {/* Mot de passe */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                        placeholder="Créez un mot de passe sécurisé"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#1F7A8C] transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Type de compte */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Type de compte
                    </label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                    >
                      <option value="CLIENT">Client - Je cherche des services</option>
                      <option value="PRESTATAIRE">Prestataire - J'offre mes services</option>
                    </select>
                  </div>

                  {/* Indicateurs de confiance */}
                  <div className="grid grid-cols-3 gap-4 text-center mt-6 p-4 bg-gradient-to-r from-[#F8FAFC] to-[#70D6A8]/5 rounded-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#70D6A8]/10 rounded-full flex items-center justify-center mb-2">
                        <Shield className="text-[#70D6A8]" size={16} />
                      </div>
                      <span className="text-xs text-gray-600">Sécurisé</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#1F7A8C]/10 rounded-full flex items-center justify-center mb-2">
                        <Users className="text-[#1F7A8C]" size={16} />
                      </div>
                      <span className="text-xs text-gray-600">Communauté</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#FBBF24]/10 rounded-full flex items-center justify-center mb-2">
                        <Clock className="text-[#FBBF24]" size={16} />
                      </div>
                      <span className="text-xs text-gray-600">Rapide</span>
                    </div>
                  </div>
                </div>

                {/* Colonne droite - Informations professionnelles ou actions */}
                <div className="space-y-6">
                  {form.role === "PRESTATAIRE" ? (
                    <>
                      <h3 className="text-lg font-semibold text-[#1F7A8C] mb-4 border-b border-gray-200 pb-2">
                        Informations professionnelles
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                            Spécialité
                          </label>
                          <input
                            type="text"
                            name="speciality"
                            value={form.speciality}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                            placeholder="Ex: Plombier, Électricien, Jardinier..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                            Localisation
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                            placeholder="Ville ou région d'intervention"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                            Tarif horaire (MAD)
                          </label>
                          <input
                            type="number"
                            name="hourlyRate"
                            value={form.hourlyRate}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200"
                            placeholder="Ex: 150"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                            Biographie professionnelle
                          </label>
                          <textarea
                            name="bio"
                            value={form.bio}
                            onChange={handleChange}
                            rows="4"
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#70D6A8]/20 focus:border-[#70D6A8] transition-all duration-200 resize-none"
                            placeholder="Décrivez votre expérience, vos compétences et ce qui vous rend unique..."
                            required
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-[#1F7A8C] mb-4 border-b border-gray-200 pb-2">
                        Bienvenue chez nous !
                      </h3>
                      
                      <div className="bg-gradient-to-r from-[#F8FAFC] to-[#70D6A8]/5 rounded-xl p-6 border border-[#70D6A8]/20">
                        <h4 className="font-semibold text-[#1F7A8C] mb-3">En tant que client, vous pourrez :</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#70D6A8] rounded-full mr-3"></div>
                            Rechercher des prestataires qualifiés
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#70D6A8] rounded-full mr-3"></div>
                            Consulter les profils et avis
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#70D6A8] rounded-full mr-3"></div>
                            Demander des devis gratuits
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-[#70D6A8] rounded-full mr-3"></div>
                            Gérer vos projets facilement
                          </li>
                        </ul>
                      </div>

                      <div className="text-center bg-gradient-to-r from-[#F8FAFC] to-[#70D6A8]/5 rounded-xl p-4 mt-6">
                        <p className="text-[#1E1E1E] text-sm">
                          Vous avez déjà un compte ?{' '}
                          <button
                            type="button"
                            onClick={handleLoginRedirect}
                            className="text-[#1F7A8C] hover:text-[#70D6A8] font-semibold hover:underline transition-colors"
                          >
                            Se connecter
                          </button>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bouton d'inscription - Pleine largeur en bas */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-[#FBBF24] to-yellow-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="relative">Créer mon compte</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;