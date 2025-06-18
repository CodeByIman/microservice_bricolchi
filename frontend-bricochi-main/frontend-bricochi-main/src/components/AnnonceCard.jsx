import React, { useState } from 'react';
import { MapPin, Clock, User, DollarSign, Users, AlertCircle } from 'lucide-react';

const AnnonceCard = ({ 
  id, 
  title, 
  description, 
  location, 
  budget, 
  client, 
  category, 
  urgence, 
  datePublication, 
  candidatures, 
  statut, 
  dateRealisation 
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
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Demandé par <span className="font-medium">{client}</span></span>
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
              il y a {datePublication}
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
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isHovered 
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg transform scale-105' 
                : statut === 'Ouvert'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={statut !== 'Ouvert'}
          >
            {statut === 'Ouvert' ? 'Postuler' : 'Fermé'}
          </button>
        </div>
        
        {/* Indicateur de statut */}
        <div className="mt-3 text-center">
          <span className={`text-xs px-2 py-1 rounded-full ${
            statut === 'Ouvert' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {statut === 'Ouvert' ? '✓ Ouvert aux candidatures' : '✗ Plus de candidatures'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnonceCard;