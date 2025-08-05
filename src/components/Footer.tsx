import React from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Trophy, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sport-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sport-blue to-sport-yellow rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Sport</span>
                <span className="text-2xl font-bold text-sport-yellow ml-1">FTV</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Inovando nas transmissões ao vivo de torneios de futevôlei com tecnologia de ponta. 
              Capturamos cada momento histórico do esporte que amamos.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-sport-blue rounded-full flex items-center justify-center cursor-pointer"
              >
                <Play size={20} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-sport-yellow rounded-full flex items-center justify-center cursor-pointer"
              >
                <Camera size={20} className="text-sport-dark" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-sport-blue rounded-full flex items-center justify-center cursor-pointer"
              >
                <Trophy size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-sport-yellow">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-sport-yellow transition-colors">Home</a></li>
              <li><a href="/melhores-momentos" className="text-gray-300 hover:text-sport-yellow transition-colors">Melhores Momentos</a></li>
              <li><a href="/cameras" className="text-gray-300 hover:text-sport-yellow transition-colors">Câmeras</a></li>
              <li><a href="/torneios" className="text-gray-300 hover:text-sport-yellow transition-colors">Torneios</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-sport-yellow transition-colors">Sobre Nós</a></li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-sport-yellow">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-sport-yellow" />
                <span className="text-gray-300">@sportftvcps@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sport-yellow" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-sport-yellow" />
                <span className="text-gray-300">Campinas, SP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Sport FTV. Todos os direitos reservados. Desenvolvido com ❤️ para o futevôlei.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;