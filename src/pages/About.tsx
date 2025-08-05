import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Zap, Target, Award, Camera, Play, Trophy, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Misael Nunes',
      role: 'Co-fundador & CEO',
      description: 'Apaixonado por futevôlei e tecnologia, lidera a visão estratégica da Sport FTV.',
      expertise: ['Gestão Estratégica', 'Desenvolvimento de Negócios', 'Apaixonado por Futevôlei']
    },
    {
      name: 'Victor Benatti',
      role: 'Co-fundador & CTO',
      description: 'Especialista em tecnologia, responsável por toda a inovação técnica da empresa.',
      expertise: ['Desenvolvimento de Software', 'Sistemas de Transmissão', 'Inovação Tecnológica']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Paixão pelo Esporte',
      description: 'Nosso amor pelo futevôlei move cada decisão e inovação que fazemos'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Sempre buscando novas tecnologias para melhorar a experiência esportiva'
    },
    {
      icon: Target,
      title: 'Foco na Qualidade',
      description: 'Comprometidos em entregar sempre o melhor em transmissões e tecnologia'
    },
    {
      icon: Users,
      title: 'Comunidade Primeiro',
      description: 'Desenvolvemos soluções pensando na comunidade do futevôlei'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Fundação da Sport FTV',
      description: ''
    },
    {
      year: '2025',
      title: 'Primeira Transmissão',
      description: 'Realizamos nossa primeira transmissão ao vivo com tecnologia própria'
    },
    {
      year: '2025',
      title: 'Marco Importante',
      description: 'Alcançamos nossas primeiras 10 transmissões ao vivo.'
    },
    {
      year: '2025',
      title: 'Expansão Nacional',
      description: 'Planos de expandir para todo o território nacional'
    }
  ];

  const stats = [
    { number: '2', label: 'Sócios Fundadores' },
    { number: '12+', label: 'Torneios Transmitidos' },
    { number: '300+', label: 'Horas de Transmissão' },    
    { number: '100%', label: 'Dedicação ao Futevôlei' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-sport-blue to-sport-yellow text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a Sport FTV
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nascemos da paixão pelo futevôlei e do desejo de revolucionar como os momentos 
              históricos deste esporte são capturados e compartilhados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Democratizar o acesso às transmissões de qualidade profissional no futevôlei, 
                garantindo que cada momento especial seja preservado e compartilhado com a 
                comunidade esportiva.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Acreditamos que a tecnologia pode aproximar atletas, torcedores e organizadores, 
                criando uma experiência única e memorável para todos os envolvidos no esporte.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-sport-blue mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Camera size={48} className="mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Tecnologia</h3>
                    <p className="text-sm opacity-90">Inovação em cada transmissão</p>
                  </div>
                  <div className="text-center">
                    <Play size={48} className="mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Qualidade</h3>
                    <p className="text-sm opacity-90">Padrão profissional sempre</p>
                  </div>
                  <div className="text-center">
                    <Trophy size={48} className="mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Paixão</h3>
                    <p className="text-sm opacity-90">Amor pelo futevôlei</p>
                  </div>
                  <div className="text-center">
                    <Users size={48} className="mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Comunidade</h3>
                    <p className="text-sm opacity-90">Conectando pessoas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Fundadores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dois amigos unidos pela paixão pelo futevôlei e pela visão de transformar 
              o esporte através da tecnologia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-sport-blue to-sport-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-sport-blue font-semibold">{founder.role}</p>
                </div>
                
                <p className="text-gray-700 mb-6 text-center">{founder.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Especialidades:</h4>
                  {founder.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-sport-yellow rounded-full" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e inovação da Sport FTV
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sport-blue to-sport-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os marcos importantes da nossa trajetória
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sport-blue" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-sport-blue to-sport-yellow rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-sport-yellow text-sport-dark px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-sport-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos Conversar?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Estamos sempre abertos para novas parcerias, ideias e oportunidades 
              de levar o futevôlei para o próximo nível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sport-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-sport-dark" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-gray-300">sportftvcps@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sport-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-sport-dark" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300">(19) 98279-6873</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sport-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-sport-dark" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Localização</h3>
              <p className="text-gray-300">Campinas, SP</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;