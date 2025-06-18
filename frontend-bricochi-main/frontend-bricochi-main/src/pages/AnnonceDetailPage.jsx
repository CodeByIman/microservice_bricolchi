import React from 'react';
import { useParams } from 'react-router-dom';

const AnnonceDetailPage = () => {
  const { id } = useParams();
  // Fetch annonce avec id ici
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Détail de l'annonce #{id}</h2>
      <p className="text-gray-600">Description de l'annonce, prix, prestataires intéressés...</p>
    </div>
  );
};

export default AnnonceDetailPage;
