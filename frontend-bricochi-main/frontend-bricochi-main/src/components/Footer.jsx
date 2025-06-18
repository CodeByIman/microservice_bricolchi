import React from 'react';
import { FaHammer, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 pt-16 pb-8 text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 group cursor-pointer mb-4">
              <div className="relative">
                <FaHammer className="text-3xl text-[#1F7A8C] group-hover:text-[#70D6A8] transition duration-300 transform group-hover:rotate-12" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FBBF24] rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-black text-[#1E1E1E] tracking-tight">BricolChi</span>
                <div className="text-xs text-[#1F7A8C] font-medium -mt-1">.ma</div>
              </div>
            </div>
            <p className="text-gray-600 max-w-md mb-6">
              La première plateforme marocaine de services à domicile. Connectant professionnels et particuliers depuis 2024.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#1F7A8C] rounded-full flex items-center justify-center hover:bg-[#70D6A8] transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1F7A8C] rounded-full flex items-center justify-center hover:bg-[#70D6A8] transition">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1F7A8C] rounded-full flex items-center justify-center hover:bg-[#70D6A8] transition">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FBBF24]">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Bricolage</li>
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Ménage</li>
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Jardinage</li>
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Garde d'enfants</li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FBBF24]">Entreprise</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">À propos</li>
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Carrières</li>
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Presse</li>
              <li className="hover:text-[#1F7A8C] transition cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* Mention légale */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          &copy; 2024 BricolChi.ma — Tous droits réservés — Made with ❤️ in Morocco
        </div>
      </div>
    </footer>
  );
};

export default Footer;
