import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHammer, FaBars, FaTimes, FaUser, FaChevronDown, FaSignOutAlt, FaHome, FaBriefcase } from 'react-icons/fa';

const Navbar = ({ isLoggedIn, userType, username, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#comment', label: 'Comment ça marche' },
    { href: '#testimonials', label: 'Témoignages' },
  ];

  const handleLogout = () => {
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onLogout();
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20' 
        : 'bg-white/90 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <FaHammer className="text-3xl text-[#1F7A8C] group-hover:text-[#70D6A8] transition duration-300 transform group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FBBF24] rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black text-[#1E1E1E] tracking-tight">BricolChi</span>
              <div className="text-xs text-[#1F7A8C] font-medium -mt-1">.ma</div>
            </div>
          </Link>

          {/* Liens Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative text-[#1E1E1E] hover:text-[#1F7A8C] font-medium transition duration-300 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1F7A8C] to-[#70D6A8] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            {isLoggedIn && (
              <Link
                to="/annonces"
                className="relative text-[#1E1E1E] hover:text-[#1F7A8C] font-medium transition duration-300 group py-2"
              >
                Parcourir les annonces
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1F7A8C] to-[#70D6A8] group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </div>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-[#FBBF24] to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Inscription</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-[#1F7A8C] text-[#1F7A8C] px-6 py-3 rounded-full font-semibold hover:bg-[#1F7A8C] hover:text-white transition duration-300 flex items-center space-x-2"
                >
                  <FaUser className="text-sm" />
                  <span>Se connecter</span>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to={userType === 'client' ? '/mes-annonces' : '/mes-candidatures'}
                  className="flex items-center space-x-2 bg-[#1F7A8C] text-white px-4 py-2 rounded-full font-medium hover:bg-[#165f6e] transition duration-300"
                >
                  {userType === 'client' ? (
                    <>
                      <FaHome />
                      <span>Vos annonces</span>
                    </>
                  ) : (
                    <>
                      <FaBriefcase />
                      <span>Vos candidatures</span>
                    </>
                  )}
                </Link>

                <div className="relative">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-2 text-[#1E1E1E] hover:text-[#1F7A8C] transition duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1F7A8C] flex items-center justify-center text-white">
                      {username?.charAt(0).toUpperCase()}
                    </div>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${isProfileDropdownOpen ? 'transform rotate-180' : ''}`} />
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        Mon profil
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaSignOutAlt />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-[#1E1E1E]" />
            ) : (
              <FaBars className="text-2xl text-[#1E1E1E]" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="border-t border-gray-200 pt-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[#1E1E1E] hover:text-[#1F7A8C] font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {isLoggedIn && (
              <>
                <Link
                  to="/annonces"
                  className="block text-[#1E1E1E] hover:text-[#1F7A8C] font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Parcourir les annonces
                </Link>
                <Link
                  to={userType === 'client' ? '/mes-annonces' : '/mes-candidatures'}
                  className="block text-[#1E1E1E] hover:text-[#1F7A8C] font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {userType === 'client' ? 'Vos annonces' : 'Vos candidatures'}
                </Link>
                <Link
                  to="/profile"
                  className="block text-[#1E1E1E] hover:text-[#1F7A8C] font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mon profil
                </Link>
              </>
            )}

            <div className="space-y-3 pt-4 border-t border-gray-200">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/register"
                    className="block bg-gradient-to-r from-[#FBBF24] to-yellow-500 text-white py-3 rounded-full font-semibold text-center shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                  <Link
                    to="/login"
                    className="block border-2 border-[#1F7A8C] text-[#1F7A8C] py-3 rounded-full font-semibold text-center hover:bg-[#1F7A8C] hover:text-white transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Se connecter
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 border-2 border-red-500 text-red-500 py-3 rounded-full font-semibold text-center hover:bg-red-500 hover:text-white transition duration-300"
                >
                  <FaSignOutAlt />
                  <span>Déconnexion</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;