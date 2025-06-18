import React, { useState, useEffect } from 'react';
import { FaHammer, FaCheckCircle, FaTools, FaHouseUser, FaLightbulb, FaStar, FaUsers, FaClock, FaShieldAlt, FaArrowRight, FaPlay, FaQuoteLeft, FaPaintBrush, FaWrench, FaLeaf, FaBaby, FaCar, FaCouch } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ModernLandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ users: 0, services: 0, satisfaction: 0 });

  // Animation des statistiques
  useEffect(() => {
    const animateStats = () => {
      const targetStats = { users: 12500, services: 5000, satisfaction: 98 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          setStats({
            users: Math.round((targetStats.users * i) / steps),
            services: Math.round((targetStats.services * i) / steps),
            satisfaction: Math.round((targetStats.satisfaction * i) / steps)
          });
        }, i * stepDuration);
      }
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Rotation des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Fatima El Mansouri",
      role: "Cliente, Casablanca",
      text: "Service impeccable ! J'ai trouvé un électricien qualifié en moins de 2 heures. Très professionnel et prix transparent.",
      rating: 5
    },
    {
      name: "Ahmed Benali",
      role: "Prestataire, Rabat",
      text: "Grâce à cette plateforme, j'ai pu développer mon activité de plomberie. Interface simple et clients sérieux.",
      rating: 5
    },
    {
      name: "Khadija Alami",
      role: "Cliente, Marrakech",
      text: "Parfait pour le ménage hebdomadaire ! Personnel de confiance et service de qualité à prix juste.",
      rating: 5
    }
  ];

  const services = [
    { icon: FaHammer, title: "Bricolage & Réparations", desc: "Plomberie, électricité, montage", color: "#1F7A8C" },
    { icon: FaPaintBrush, title: "Ménage & Nettoyage", desc: "Entretien, repassage, organisation", color: "#70D6A8" },
    { icon: FaLeaf, title: "Jardinage & Extérieur", desc: "Entretien, plantation, aménagement", color: "#FBBF24" },
    { icon: FaBaby, title: "Garde & Assistance", desc: "Enfants, personnes âgées, aide domestique", color: "#1F7A8C" },
    { icon: FaCar, title: "Entretien Véhicule", desc: "Lavage, mécanique, dépannage", color: "#70D6A8" },
    { icon: FaCouch, title: "Déménagement & Livraison", desc: "Transport, montage, installation", color: "#FBBF24" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-3">
      {/* Navigation moderne */}
     <Navbar/>

      {/* Hero Section Ultra-Moderne */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Effet de background animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#70D6A8]/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#70D6A8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FBBF24]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-[#70D6A8]/10 rounded-full px-4 py-2 text-[#1F7A8C] font-medium">
              <FaStar className="mr-2" />
              #1 des services à domicile au Maroc
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-[#1E1E1E] leading-tight">
              Votre maison,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F7A8C] to-[#70D6A8]"> nos experts</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Connectez-vous instantanément avec des professionnels vérifiés pour tous vos besoins à domicile. 
              Simple, rapide, et 100% marocain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#FBBF24] to-yellow-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Trouver un professionnel
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-[#1F7A8C] text-[#1F7A8C] px-8 py-4 rounded-full font-semibold hover:bg-[#1F7A8C] hover:text-white transition-all duration-300 flex items-center justify-center">
                <a
              href="/annonces"> 
                
              Parcourir les annonces
            </a>
              </button>
            </div>
            
            {/* Statistiques en temps réel */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1F7A8C]">{stats.users.toLocaleString()}+</div>
                <div className="text-gray-600">Utilisateurs actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#70D6A8]">{stats.services.toLocaleString()}+</div>
                <div className="text-gray-600">Services réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FBBF24]">{stats.satisfaction}%</div>
                <div className="text-gray-600">Satisfaction client</div>
              </div>
            </div>
          </div>
          
          {/* Visual Hero */}
          <div className="relative">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#1F7A8C] to-[#70D6A8] rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <FaHammer className="text-6xl text-[#FBBF24] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">Prêt à commencer ?</h3>
                  <p className="text-gray-600">Plus de 200 services disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Moderne */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E1E1E] mb-6">Services populaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels qualifiés et vérifiés pour chaque besoin de votre maison
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} 
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#70D6A8]/30">
                <service.icon className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300" 
                         style={{ color: service.color }} />
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <button className="text-[#1F7A8C] font-semibold hover:text-[#70D6A8] transition-colors flex items-center group">
                  Explorer les services
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche - Version moderne */}
      <section id="comment" className="py-20 bg-gradient-to-r from-[#1F7A8C] to-[#70D6A8] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Simple comme bonjour</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Trois étapes pour transformer votre maison avec nos experts certifiés
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { icon: FaLightbulb, title: "Décrivez votre besoin", desc: "Expliquez en quelques mots ce dont vous avez besoin. Notre IA vous propose les meilleurs professionnels." },
              { icon: FaUsers, title: "Choisissez votre expert", desc: "Comparez les profils, avis et tarifs. Contactez directement le professionnel qui vous convient." },
              { icon: FaCheckCircle, title: "Profitez du résultat", desc: "Service garanti, paiement sécurisé et support client 7j/7. Votre satisfaction est notre priorité." }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FBBF24] rounded-full mb-6">
                    <step.icon className="text-2xl text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FBBF24] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="opacity-90 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages avec carrousel */}
      <section id="testimonials" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E1E1E] mb-6">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Plus de 10,000 avis 5 étoiles</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
              <FaQuoteLeft className="text-6xl text-[#70D6A8]/20 absolute top-8 left-8" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#FBBF24] text-2xl" />
                  ))}
                </div>
                <p className="text-2xl text-[#1E1E1E] font-medium mb-8 text-center leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-[#1F7A8C]">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#1F7A8C] scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Ultra-Attractif */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#1F7A8C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-black mb-6">
            Prêt à transformer
            <span className="text-[#FBBF24]"> votre quotidien</span> ?
          </h2>
          <p className="text-2xl opacity-90 mb-12 leading-relaxed">
            Rejoignez des milliers de Marocains qui font confiance à nos experts
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-[#FBBF24] to-yellow-500 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center">
              Commencer maintenant
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:text-[#1F7A8C] transition-all duration-300">
              Devenir prestataire
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 opacity-80">
            <div className="flex items-center">
              <FaShieldAlt className="text-[#70D6A8] mr-2" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center">
              <FaClock className="text-[#70D6A8] mr-2" />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-[#70D6A8] mr-2" />
              <span>Garantie qualité</span>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ModernLandingPage;