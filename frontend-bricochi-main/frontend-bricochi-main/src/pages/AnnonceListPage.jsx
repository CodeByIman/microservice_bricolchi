import React, { useState } from 'react';
import { Filter, Search, MapPin, Clock, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnonceCard from '../components/AnnonceCard'; // Import the separate card component

const AnnonceListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const annonces = [
    { 
      id: 1, 
      title: 'Réparation Fuite d\'eau - Urgent', 
      description: 'J\'ai une fuite d\'eau dans ma salle de bain qui nécessite une réparation rapide. Le robinet principal fuit et il y a de l\'eau qui s\'accumule.',
      location: 'Casablanca, Maarif', 
      budget: '200-400 DH',
      client: 'Mohammed A.',
      category: 'Plomberie',
      urgence: 'Urgent',
      datePublication: '2 heures',
      candidatures: 3,
      statut: 'Ouvert',
      dateRealisation: 'Aujourd\'hui'
    },
    { 
      id: 2, 
      title: 'Installation Prise Électrique', 
      description: 'Je souhaite installer 3 nouvelles prises électriques dans mon salon. Le travail doit être fait par un électricien certifié.',
      location: 'Rabat, Agdal', 
      budget: '300-500 DH',
      client: 'Aicha B.',
      category: 'Électricité',
      urgence: 'Normal',
      datePublication: '5 heures',
      candidatures: 7,
      statut: 'Ouvert',
      dateRealisation: 'Cette semaine'
    },
    { 
      id: 3, 
      title: 'Ménage Complet Appartement 3 Pièces', 
      description: 'Recherche femme de ménage pour nettoyage complet d\'un appartement de 3 pièces. Cuisine, salle de bain, et chambres incluses.',
      location: 'Casablanca, Ain Diab', 
      budget: '200-300 DH',
      client: 'Laila M.',
      category: 'Ménage',
      urgence: 'Normal',
      datePublication: '1 jour',
      candidatures: 12,
      statut: 'Ouvert',
      dateRealisation: 'Ce weekend'
    },
    { 
      id: 4, 
      title: 'Taille des Arbres et Entretien Jardin', 
      description: 'Mon jardin a besoin d\'un entretien complet : taille des arbres, tonte de la pelouse, et plantation de nouvelles fleurs.',
      location: 'Marrakech, Gueliz', 
      budget: '400-600 DH',
      client: 'Karim T.',
      category: 'Jardinage',
      urgence: 'Normal',
      datePublication: '3 heures',
      candidatures: 5,
      statut: 'Ouvert',
      dateRealisation: 'Flexible'
    },
    { 
      id: 5, 
      title: 'Réparation Climatisation - Ne Refroidit Plus', 
      description: 'Ma climatisation ne refroidit plus correctement. Elle fait du bruit et ne produit que de l\'air tiède. Besoin d\'un diagnostic.',
      location: 'Fès, Centre-ville', 
      budget: '300-500 DH',
      client: 'Rachid H.',
      category: 'Climatisation',
      urgence: 'Urgent',
      datePublication: '4 heures',
      candidatures: 2,
      statut: 'Ouvert',
      dateRealisation: 'Demain'
    },
    { 
      id: 6, 
      title: 'Peinture Chambre 15m² - Couleur Moderne', 
      description: 'Je veux repeindre ma chambre avec des couleurs modernes. Préparation des murs et 2 couches de peinture nécessaires.',
      location: 'Tanger, Malabata', 
      budget: '500-800 DH',
      client: 'Salma K.',
      category: 'Peinture',
      urgence: 'Normal',
      datePublication: '6 heures',
      candidatures: 9,
      statut: 'Ouvert',
      dateRealisation: 'Prochaine semaine'
    }
  ];

  const categories = ['Tous', 'Plomberie', 'Électricité', 'Ménage', 'Jardinage', 'Climatisation', 'Peinture'];

  const filteredAnnonces = annonces.filter(annonce => {
    const matchesSearch = annonce.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         annonce.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         annonce.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || annonce.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <Navbar 
  isLoggedIn={true} // ou false si l'utilisateur n'est pas connecté
  userType="client" // ou "prestataire"
  username="JohnDoe" // le nom d'utilisateur
  onLogout={() => {
    // Votre logique de déconnexion ici
    console.log("Utilisateur déconnecté");
  }}
/>
      
      {/* Section Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demandes de Service
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Trouvez des opportunités de travail près de chez vous
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex bg-white rounded-full shadow-2xl overflow-hidden">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Rechercher une demande..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-gray-800 focus:outline-none"
                  />
                </div>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 font-semibold hover:from-green-500 hover:to-blue-600 transition-all">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Catégories:</span>
            </div>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grille des demandes */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredAnnonces.length} demande{filteredAnnonces.length > 1 ? 's' : ''} disponible{filteredAnnonces.length > 1 ? 's' : ''}
          </h2>
          <div className="text-sm text-gray-600">
            Triées par date de publication
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {filteredAnnonces.map((annonce) => (
            <AnnonceCard key={annonce.id} {...annonce} />
          ))}
        </div>

        {filteredAnnonces.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucune demande trouvée</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>

      {/* Section CTA */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Boostez vos opportunités !</h2>
          <p className="text-xl text-green-100 mb-8">
            Créez un profil complet pour recevoir plus de demandes qui correspondent à vos compétences
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Optimiser mon Profil
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AnnonceListPage;