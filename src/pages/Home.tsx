import React from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Trophy, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import futevoleiball from '../assets/animatedBall.png';

const Home: React.FC = () => {
  const features = [
    {
      icon: Play,
      title: 'Transmissões ao Vivo',
      description: 'Cobertura completa de torneios de futevôlei com qualidade profissional'
    },
    {
      icon: Camera,
      title: 'Câmeras Inteligentes',
      description: 'Sistema automatizado que captura os melhores momentos das partidas'
    },
    {
      icon: Trophy,
      title: 'Torneios Completos',
      description: 'Acompanhe chaveamentos e resultados em tempo real'
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Inovação constante para melhorar a experiência do espectador'
    }
  ];

  const stats = [
    { number: '12+', label: 'Torneios Transmitidos' },
    { number: '300+', label: 'Horas de Transmissão' },
    { number: '30K+', label: 'Espectadores Alcançados' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-bg opacity-90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.1, 1],
                /*rotate: [0, 360],*/
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img 
                src={futevoleiball} 
                alt="Bola de Futevôlei" 
                className="w-full h-full object-contain opacity-30"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              O Futuro das
              <span className="block text-sport-yellow">Transmissões</span>
              <span className="block">de Futevôlei</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Tecnologia de ponta para capturar cada momento histórico do esporte que amamos. 
              Transmissões ao vivo, câmeras inteligentes e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/melhores-momentos" className="btn-secondary inline-flex items-center">
                <Play className="mr-2" size={20} />
                Ver Melhores Momentos
              </Link>
              <Link to="/sobre" className="btn-primary inline-flex items-center">
                Conheça Nossa História
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-gradient">Sport FTV</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos paixão pelo futevôlei com tecnologia de ponta para oferecer 
              a melhor experiência em transmissões esportivas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sport-blue to-sport-yellow rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-sport-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Números Falam por Si
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados que demonstram nosso compromisso com a excelência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-sport-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-sport-blue to-sport-yellow rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Revolucionar suas Transmissões?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como podemos elevar 
              seus eventos de futevôlei ao próximo nível.
            </p>
            <Link 
              to="/sobre" 
              className="inline-flex items-center bg-white text-sport-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;