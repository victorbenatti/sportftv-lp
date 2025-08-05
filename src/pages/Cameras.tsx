import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Zap, Server, Smartphone, ArrowRight, CheckCircle, Play } from 'lucide-react';

const Cameras: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'Câmeras de Alta Qualidade',
      description: 'Equipamentos profissionais instalados estrategicamente nas arenas de areia'
    },
    {
      icon: Zap,
      title: 'Ativação Instantânea',
      description: 'Sistema de botão na quadra para captura imediata dos últimos 30 segundos'
    },
    {
      icon: Server,
      title: 'Processamento Automático',
      description: 'Vídeos são processados e enviados automaticamente para nossos servidores'
    },
    {
      icon: Smartphone,
      title: 'Acesso Imediato',
      description: 'Disponibilização instantânea no site e app da Sport FTV'
    }
  ];

  const benefits = [
    'Captura automática de jogadas importantes',
    'Qualidade profissional de vídeo',
    'Instalação não invasiva nas arenas',
    'Sistema à prova de intempéries',
    'Backup automático na nuvem',
    'Acesso multiplataforma aos vídeos'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-sport-blue to-sport-yellow text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Câmeras Inteligentes
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Revolucionamos a forma como os lances são capturados nas arenas de futevôlei. 
              Com um simples toque, os atletas podem salvar os melhores momentos de suas partidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Visual Flow */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Sistema
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e automatizado que garante que nenhum momento especial seja perdido
            </p>
          </motion.div>

          {/* Visual Flow Diagram */}
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between relative">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-20 h-20 bg-sport-blue rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Play className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Lance Acontece</h3>
                  <p className="text-gray-600 text-sm">Atleta realiza uma jogada especial na quadra de areia</p>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 flex justify-center"
                >
                  <ArrowRight className="text-sport-yellow" size={32} />
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-20 h-20 bg-sport-yellow rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Zap className="text-sport-dark" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Botão Pressionado</h3>
                  <p className="text-gray-600 text-sm">Atleta pressiona o botão na quadra para capturar o momento</p>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex-1 flex justify-center"
                >
                  <ArrowRight className="text-sport-yellow" size={32} />
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-20 h-20 bg-sport-blue rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Camera className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Gravação Automática</h3>
                  <p className="text-gray-600 text-sm">Sistema grava automaticamente os últimos 30 segundos</p>
                </motion.div>

                {/* Arrow 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex-1 flex justify-center"
                >
                  <ArrowRight className="text-sport-yellow" size={32} />
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-20 h-20 bg-sport-yellow rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Smartphone className="text-sport-dark" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Disponível Online</h3>
                  <p className="text-gray-600 text-sm">Vídeo fica disponível instantaneamente no site e app</p>
                </motion.div>
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-8">
              {[
                { icon: Play, title: 'Lance Acontece', desc: 'Atleta realiza uma jogada especial na quadra de areia', color: 'sport-blue' },
                { icon: Zap, title: 'Botão Pressionado', desc: 'Atleta pressiona o botão na quadra para capturar o momento', color: 'sport-yellow' },
                { icon: Camera, title: 'Gravação Automática', desc: 'Sistema grava automaticamente os últimos 30 segundos', color: 'sport-blue' },
                { icon: Smartphone, title: 'Disponível Online', desc: 'Vídeo fica disponível instantaneamente no site e app', color: 'sport-yellow' }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon className={step.color === 'sport-yellow' ? 'text-sport-dark' : 'text-white'} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia de Ponta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso sistema de câmeras foi desenvolvido especificamente para as necessidades do futevôlei
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

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vantagens do Nosso Sistema
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
              <div className="bg-gradient-to-br from-sport-blue to-sport-yellow rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Camera size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Sistema Profissional</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Equipamentos de última geração instalados estrategicamente para capturar 
                    todos os ângulos importantes da quadra.
                  </p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">30s</div>
                    <div className="text-sm opacity-90">de gravação automática</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sport-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer Instalar em Sua Arena?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos revolucionar 
              a experiência dos atletas em sua arena de futevôlei.
            </p>
            <button className="btn-secondary">
              Solicitar Orçamento
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cameras;