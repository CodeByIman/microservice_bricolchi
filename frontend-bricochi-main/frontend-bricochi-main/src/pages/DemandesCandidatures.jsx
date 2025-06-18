import React, { useState } from 'react';
import { MapPin, Clock, User, DollarSign, Users, AlertCircle, Eye, Star, MessageCircle, CheckCircle, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Composant pour afficher une candidature
const CandidatureCard = ({ candidature, onChoisir, onVoirProfil }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {candidature.nom.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{candidature.nom}</h4>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{candidature.note}/5 ({candidature.avis} avis)</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-600">{candidature.prix}</div>
          <div className="text-xs text-gray-500">Prix proposé</div>
        </div>
      </div>
      
      <div className="mb-4">
        <h5 className="font-medium text-gray-700 mb-2">Motivation :</h5>
        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          {candidature.motivation}
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onVoirProfil(candidature)}
          className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
        >
          Voir le profil
        </button>
        <button 
          onClick={() => onChoisir(candidature)}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
        >
          Choisir ce prestataire
        </button>
      </div>
    </div>
  );
};

// Composant AnnonceCard adapté pour le client
const AnnonceCardClient = ({ 
  id, 
  title, 
  description, 
  location, 
  budget, 
  category, 
  urgence, 
  datePublication, 
  candidatures, 
  statut, 
  dateRealisation,
  listeCandidatures,
  onVoirCandidatures
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getUrgenceColor = (urgence) => {
    return urgence === 'Urgent' 
      ? 'bg-gradient-to-r from-red-400 to-red-500 text-white' 
      : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Plomberie': 'text-blue-600 bg-blue-50',
      'Électricité': 'text-yellow-600 bg-yellow-50',
      'Ménage': 'text-green-600 bg-green-50',
      'Jardinage': 'text-emerald-600 bg-emerald-50',
      'Climatisation': 'text-cyan-600 bg-cyan-50',
      'Peinture': 'text-purple-600 bg-purple-50'
    };
    return colors[category] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header avec urgence et catégorie */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getUrgenceColor(urgence)}`}>
            {urgence === 'Urgent' && <AlertCircle className="w-3 h-3 inline mr-1" />}
            {urgence.toUpperCase()}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
        
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {description}
        </p>
      </div>
      
      {/* Informations principales */}
      <div className="p-4">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">À réaliser : <span className="font-medium">{dateRealisation}</span></span>
          </div>
        </div>
        
        {/* Stats et budget */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">{candidatures}</span> candidature{candidatures > 1 ? 's' : ''}
              </span>
            </div>
            <div className="text-xs text-gray-500">
              Publiée il y a {datePublication}
            </div>
          </div>
        </div>
        
        {/* Budget et action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <div>
              <span className="text-lg font-bold text-gray-800">{budget}</span>
              <div className="text-xs text-gray-500">Budget proposé</div>
            </div>
          </div>
          
          <button 
            onClick={() => onVoirCandidatures(id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              isHovered 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' 
                : candidatures > 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={candidatures === 0}
          >
            <Eye className="w-4 h-4" />
            {candidatures > 0 ? 'Voir les candidatures' : 'Aucune candidature'}
          </button>
        </div>
        
        {/* Indicateur de statut */}
        <div className="mt-3 text-center">
          <span className={`text-xs px-2 py-1 rounded-full ${
            statut === 'Ouvert' 
              ? 'bg-green-100 text-green-700' 
              : statut === 'En cours'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-gray-100 text-gray-700'
          }`}>
            {statut === 'Ouvert' ? '✓ Ouvert aux candidatures' : 
             statut === 'En cours' ? '⏳ Service en cours' : 
             '✓ Service terminé'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Composant principal
const MesAnnoncesPage = () => {
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [showCandidatures, setShowCandidatures] = useState(false);

  // Données d'exemple
  const annonces = [
    {
      id: 1,
      title: "Réparation fuite d'eau dans la cuisine",
      description: "J'ai une fuite d'eau sous l'évier de ma cuisine qui s'aggrave. Il faut intervenir rapidement avant que cela n'endommage le sol.",
      location: "Casablanca, Maarif",
      budget: "400 MAD",
      category: "Plomberie",
      urgence: "Urgent",
      datePublication: "2 jours",
      candidatures: 5,
      statut: "Ouvert",
      dateRealisation: "Dans les 48h",
      listeCandidatures: [
        {
          id: 1,
          nom: "Ahmed Benali",
          prix: "350 MAD",
          note: 4.8,
          avis: 127,
          motivation: "Bonjour, je suis plombier avec 8 ans d'expérience. Je peux intervenir dès aujourd'hui pour réparer votre fuite. J'ai tout le matériel nécessaire et je garantis mon travail. Disponible immédiatement."
        },
        {
          id: 2,
          nom: "Youssef Tazi",
          prix: "380 MAD",
          note: 4.9,
          avis: 89,
          motivation: "Plombier professionnel, je propose une intervention rapide avec garantie de 6 mois. Je me déplace avec tout l'équipement nécessaire. Très réactif pour les urgences."
        }
      ]
    },
    {
      id: 2,
      title: "Installation climatisation salon",
      description: "Je souhaite installer une climatisation dans mon salon de 25m². J'ai déjà acheté l'appareil, il faut juste l'installer.",
      location: "Casablanca, Ain Diab",
      budget: "800 MAD",
      category: "Climatisation",
      urgence: "Normal",
      datePublication: "1 semaine",
      candidatures: 3,
      statut: "En cours",
      dateRealisation: "Ce week-end",
      listeCandidatures: [
        {
          id: 3,
          nom: "Karim Alami",
          prix: "750 MAD",
          note: 4.7,
          avis: 156,
          motivation: "Technicien certifié en climatisation. Je peux installer votre appareil ce week-end. Installation propre avec test de fonctionnement inclus."
        }
      ]
    },
    {
      id: 3,
      title: "Nettoyage complet appartement 80m²",
      description: "Nettoyage en profondeur de mon appartement avant emménagement. Toutes les pièces, y compris les vitres et l'intérieur des placards.",
      location: "Casablanca, Gauthier",
      budget: "600 MAD",
      category: "Ménage",
      urgence: "Normal",
      datePublication: "3 jours",
      candidatures: 8,
      statut: "Ouvert",
      dateRealisation: "Vendredi prochain",
      listeCandidatures: [
        {
          id: 4,
          nom: "Fatima Zahra",
          prix: "550 MAD",
          note: 4.9,
          avis: 203,
          motivation: "Je propose un service de ménage professionnel avec tous les produits fournis. Expérience de 5 ans, très minutieuse. Garantie satisfaction."
        },
        {
          id: 5,
          nom: "Khadija Bennani",
          prix: "580 MAD",
          note: 4.8,
          avis: 145,
          motivation: "Service de ménage complet avec produits écologiques. Je prends soin de chaque détail pour vous laisser un appartement impeccable."
        }
      ]
    }
  ];

  const handleVoirCandidatures = (annonceId) => {
    const annonce = annonces.find(a => a.id === annonceId);
    setSelectedAnnonce(annonce);
    setShowCandidatures(true);
  };

  const handleChoisirPrestataire = (candidature) => {
    alert(`Vous avez choisi ${candidature.nom} pour ${candidature.prix}`);
    setShowCandidatures(false);
  };

  const handleVoirProfil = (candidature) => {
    alert(`Voir le profil de ${candidature.nom}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <Navbar/>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Mes Annonces</h1>
          <p className="text-gray-600 mt-2">Gérez vos demandes de service et consultez les candidatures</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Annonces actives</p>
                <p className="text-2xl font-bold text-blue-600">2</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Candidatures reçues</p>
                <p className="text-2xl font-bold text-green-600">16</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Services en cours</p>
                <p className="text-2xl font-bold text-orange-600">1</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Services terminés</p>
                <p className="text-2xl font-bold text-purple-600">12</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Liste des annonces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annonces.map((annonce) => (
            <AnnonceCardClient
              key={annonce.id}
              {...annonce}
              onVoirCandidatures={handleVoirCandidatures}
            />
          ))}
        </div>
      </div>

      {/* Modal des candidatures */}
      {showCandidatures && selectedAnnonce && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header du modal */}
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Candidatures reçues</h2>
                  <p className="text-gray-600 mt-1">{selectedAnnonce.title}</p>
                </div>
                <button 
                  onClick={() => setShowCandidatures(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Contenu du modal */}
            <div className="p-6">
              {selectedAnnonce.listeCandidatures.length > 0 ? (
                <div className="space-y-4">
                  {selectedAnnonce.listeCandidatures.map((candidature) => (
                    <CandidatureCard
                      key={candidature.id}
                      candidature={candidature}
                      onChoisir={handleChoisirPrestataire}
                      onVoirProfil={handleVoirProfil}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Aucune candidature</h3>
                  <p className="text-gray-500">Aucun prestataire n'a encore postulé pour cette annonce.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default MesAnnoncesPage;