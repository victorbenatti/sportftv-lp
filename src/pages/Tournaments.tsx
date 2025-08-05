import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, MapPin, Bell, CheckCircle, Clock, Star } from 'lucide-react';

const Tournaments: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const upcomingFeatures = [
    {
      icon: Trophy,
      title: 'Chaveamentos em Tempo Real',
      description: 'Acompanhe o progresso dos torneios com atualizações instantâneas'
    },
    {
      icon: Users,
      title: 'Perfis de Atletas',
      description: 'Estatísticas completas e histórico de cada jogador'
    },
    {
      icon: Calendar,
      title: 'Calendário de Eventos',
      description: 'Todos os torneios e competições em um só lugar'
    },
    {
      icon: MapPin,
      title: 'Localização das Arenas',
      description: 'Encontre facilmente onde acontecem os torneios'
    }
  ];

  const benefits = [
    'Inscrições online simplificadas',
    'Acompanhamento em tempo real',
    'Histórico completo de resultados',
    'Notificações de jogos importantes',
    'Integração com transmissões ao vivo',
    'Estatísticas detalhadas dos atletas'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-sport-blue to-sport-yellow text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 border-2 border-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Trophy size={80} className="mx-auto" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Torneios e Chaveamentos
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Em breve, você poderá acompanhar todos os torneios de futevôlei em tempo real, 
              com chaveamentos interativos e estatísticas completas.
            </p>
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Clock className="mr-2" size={20} />
              <span className="font-semibold">Lançamento previsto para Q2 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que Está Por Vir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos desenvolvendo a plataforma mais completa para torneios de futevôlei do Brasil
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sport-blue to-sport-yellow rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4 text-sm text-sport-blue font-medium">Em desenvolvimento</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Funcionalidades Planejadas
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-sport-blue flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Mock Tournament Bracket Preview */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Preview do Chaveamento</h3>
                  <p className="text-gray-600">Como será a visualização dos torneios</p>
                </div>
                
                <div className="space-y-4">
                  {/* Mock bracket items */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-sport-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="font-medium">Equipe Alpha</span>
                    </div>
                    <div className="text-sport-blue font-bold">2-1</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-sport-yellow rounded-full flex items-center justify-center">
                        <span className="text-sport-dark text-sm font-bold">2</span>
                      </div>
                      <span className="font-medium">Equipe Beta</span>
                    </div>
                    <div className="text-gray-500 font-bold">1-2</div>
                  </div>
                  
                  <div className="text-center py-4">
                    <div className="inline-flex items-center space-x-2 text-sport-blue">
                      <Star size={16} />
                      <span className="font-medium">Semifinal - Ao Vivo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-sport-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Bell size={64} className="mx-auto mb-6 text-sport-yellow" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seja o Primeiro a Saber
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Cadastre-se para receber atualizações sobre o lançamento da plataforma de torneios 
              e seja um dos primeiros a testar as novas funcionalidades.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-sport-yellow focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-secondary whitespace-nowrap"
                >
                  Quero Saber Primeiro!
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500 text-white p-4 rounded-lg inline-flex items-center space-x-2"
              >
                <CheckCircle size={24} />
                <span className="font-semibold">Obrigado! Você receberá nossas atualizações em breve.</span>
              </motion.div>
            )}
            
            <p className="text-sm opacity-70 mt-4">
              Prometemos não enviar spam. Apenas atualizações importantes sobre a plataforma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cronograma de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe o progresso do desenvolvimento da nossa plataforma
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { quarter: 'Q1 2025', title: 'Desenvolvimento Core', status: 'current', description: 'Desenvolvimento das funcionalidades principais da plataforma' },
                { quarter: 'Q2 2025', title: 'Beta Testing', status: 'upcoming', description: 'Testes com arenas parceiras e feedback dos usuários' },
                { quarter: 'Q3 2025', title: 'Lançamento Oficial', status: 'upcoming', description: 'Disponibilização completa para todos os torneios' },
                { quarter: 'Q4 2025', title: 'Expansão', status: 'upcoming', description: 'Novas funcionalidades e integração com mais arenas' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                    phase.status === 'current' ? 'bg-sport-yellow' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{phase.quarter}</h3>
                      <span className="text-sport-blue font-medium">{phase.title}</span>
                      {phase.status === 'current' && (
                        <span className="bg-sport-yellow text-sport-dark px-2 py-1 rounded-full text-xs font-bold">
                          Em Andamento
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;