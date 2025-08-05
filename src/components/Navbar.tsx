import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Camera, Trophy, Users, Home } from 'lucide-react';
import sportFtvLogo from '../assets/sport-ftv-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Melhores Momentos', path: '/melhores-momentos', icon: Play },
    { name: 'Câmeras', path: '/cameras', icon: Camera },
    { name: 'Torneios', path: '/torneios', icon: Trophy },
    { name: 'Sobre Nós', path: '/sobre', icon: Users },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center lg:justify-center lg:relative h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center lg:absolute lg:left-0">
            <img 
              src={sportFtvLogo} 
              alt="Sport FTV Logo" 
              className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-sport-blue/10 ${
                    isActive ? 'text-sport-blue font-semibold' : 'text-gray-700 hover:text-sport-blue'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-sport-blue bg-sport-blue/10 font-semibold'
                        : 'text-gray-700 hover:text-sport-blue hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;