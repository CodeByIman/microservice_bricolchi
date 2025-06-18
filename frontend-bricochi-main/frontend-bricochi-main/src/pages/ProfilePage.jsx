import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Star, 
  Calendar, 
  DollarSign, 
  Award, 
  Eye, 
  CheckCircle, 
  Clock, 
  Edit3,
  Phone,
  Mail,
  Briefcase,
  TrendingUp,
  MessageSquare,
  HardHat, 
  Zap,
  Home,
  Wrench
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PrestatairProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile] = useState({
    username: 'Ahmed Bennani',
    email: 'ahmed.bennani@email.com',
    phone: '+212 6 12 34 56 78',
    role: 'prestataire',
    speciality: 'Plomberie, Électricité',
    location: 'Casablanca, Maarif',
    bio: 'Plombier professionnel avec plus de 8 ans d\'expérience. Spécialisé dans les réparations d\'urgence et installations nouvelles. Disponible 7j/7 pour vos besoins.',
    hourlyRate: 250,
    rating: 4.8,
    completedJobs: 127,
    responseTime: '< 2h',
    joinDate: '2023-01-15',
    profileViews: 1234,
    availabilityStatus: 'Disponible'
  });

  const [activities] = useState([
    {
      id: 1,
      type: 'candidature',
      title: 'Réparation Fuite d\'eau - Urgent',
      client: 'Mohammed A.',
      location: 'Casablanca, Maarif',
      budget: '200-400 DH',
      status: 'En attente',
      date: '2025-06-17',
      category: 'Plomberie'
    },
    {
      id: 2,
      type: 'mission_acceptee',
      title: 'Installation Prise Électrique',
      client: 'Aicha B.',
      location: 'Rabat, Agdal',
      budget: '300-500 DH',
      status: 'Terminé',
      date: '2025-06-15',
      category: 'Électricité',
      rating: 5
    },
    {
      id: 3,
      type: 'candidature',
      title: 'Réparation Climatisation',
      client: 'Rachid H.',
      location: 'Fès, Centre-ville',
      budget: '300-500 DH',
      status: 'Refusé',
      date: '2025-06-14',
      category: 'Climatisation'
    },
    {
      id: 4,
      type: 'mission_acceptee',
      title: 'Peinture Chambre 15m²',
      client: 'Salma K.',
      location: 'Tanger, Malabata',
      budget: '500-800 DH',
      status: 'En cours',
      date: '2025-06-12',
      category: 'Peinture'
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      'En attente': 'bg-yellow-100 text-yellow-800',
      'Terminé': 'bg-green-100 text-green-800',
      'Refusé': 'bg-red-100 text-red-800',
      'En cours': 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type) => {
    return type === 'mission_acceptee' ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <Clock className="w-4 h-4 text-blue-500" />
    );
  };

  const getCategoryIcon = (category) => {
  const icons = {
    'Plomberie': <Wrench className="w-5 h-5 text-blue-500" />,
    'Électricité': <Zap className="w-5 h-5 text-yellow-500" />,
    'Climatisation': <Home className="w-5 h-5 text-teal-500" />,
    'Peinture': <Wrench className="w-5 h-5 text-purple-500" /> // Using Wrench for Peinture as well
  };
  return icons[category] || <HardHat className="w-5 h-5 text-gray-500" />;
};
   

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar 
  isLoggedIn={true} // ou false si l'utilisateur n'est pas connecté
  userType="client" // ou "prestataire"
  username="JohnDoe" // le nom d'utilisateur
  onLogout={() => {
    // Votre logique de déconnexion ici
    console.log("Utilisateur déconnecté");
  }}
/>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-500 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <User className="w-12 h-12 md:w-16 md:h-16 text-teal-600" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div className="flex-1 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{profile.username}</h1>
            <p className="text-teal-100 text-lg mb-4 flex items-center gap-2">
              {getCategoryIcon('Plomberie')}
              {profile.speciality}
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current text-yellow-300" />
                <span>{profile.rating} ({profile.completedJobs} missions)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Répond en {profile.responseTime}</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              {profile.availabilityStatus}
            </div>
          </div>
          
          <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-all flex items-center gap-2 self-start">
            <Edit3 className="w-4 h-4" />
            Modifier le Profil
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-teal-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{profile.completedJobs}</div>
                <div className="text-sm text-gray-600">Missions</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{profile.rating}</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{profile.hourlyRate}</div>
                <div className="text-sm text-gray-600">DH/heure</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">{profile.profileViews}</div>
                <div className="text-sm text-gray-600">Vues du profil</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 text-sm font-medium transition-all ${
              activeTab === 'profile'
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            <User className="w-4 h-4 inline mr-2" />
            Informations
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-6 py-3 text-sm font-medium transition-all ${
              activeTab === 'activities'
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-600 hover:text-teal-600'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Activités
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-500" />
                Informations de Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal-500" />
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-medium">{profile.email}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-500" />
                    <div>
                      <div className="text-sm text-gray-600">Téléphone</div>
                      <div className="font-medium">{profile.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio and Specialties */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-500" />
                À Propos
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-6">{profile.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {profile.speciality.split(', ').map((spec, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {getCategoryIcon(spec)}
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Tarification</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {profile.hourlyRate} DH<span className="text-lg text-gray-600">/heure</span>
                </div>
                <p className="text-sm text-gray-600">Tarif de base, peut varier selon la complexité</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4">Membre depuis</h4>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {new Date(profile.joinDate).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </div>
                <p className="text-sm text-gray-600">Membre vérifié</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">Historique des Activités</h3>
              <div className="text-sm text-gray-600">
                {activities.length} activité{activities.length > 1 ? 's' : ''} au total
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-teal-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      {getTypeIcon(activity.type)}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{activity.title}</h4>
                        <p className="text-sm text-gray-600">Client: {activity.client}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {activity.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      {activity.budget}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {new Date(activity.date).toLocaleDateString('fr-FR')}
                    </div>
                    {activity.rating && (
                      <div className="flex items-center gap-2 text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                        {activity.rating}/5
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default PrestatairProfile;