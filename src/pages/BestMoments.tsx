import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Filter, Search } from 'lucide-react';

interface VideoMoment {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  tournament: string;
  thumbnail: string;
  description: string;
}

const BestMoments: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - em produção viria da API
  const videoMoments: VideoMoment[] = [
    {
      id: '1',
      title: 'Saque Espetacular - Final Masculina',
      date: '2025-01-15',
      time: '14:32:15',
      duration: '7s',
      tournament: 'Campeonato Paulista 2025',
      thumbnail: 'https://via.placeholder.com/400x225/1e3a8a/ffffff?text=Saque+Espetacular',
      description: 'Momento incrível capturado automaticamente durante a final masculina'
    },
    {
      id: '2',
      title: 'Defesa Impossível - Semifinal',
      date: '2025-01-14',
      time: '16:45:22',
      duration: '7s',
      tournament: 'Campeonato Paulista 2025',
      thumbnail: 'https://via.placeholder.com/400x225/f59e0b/ffffff?text=Defesa+Impossivel',
      description: 'Defesa que mudou o rumo da partida'
    },
    {
      id: '3',
      title: 'Cortada Decisiva',
      date: '2025-01-13',
      time: '18:20:10',
      duration: '7s',
      tournament: 'Copa Rio 2025',
      thumbnail: 'https://via.placeholder.com/400x225/1e3a8a/ffffff?text=Cortada+Decisiva',
      description: 'O ponto que definiu o campeão'
    },
    {
      id: '4',
      title: 'Jogada Coletiva Perfeita',
      date: '2025-01-12',
      time: '15:15:30',
      duration: '7s',
      tournament: 'Copa Rio 2025',
      thumbnail: 'https://via.placeholder.com/400x225/f59e0b/ffffff?text=Jogada+Coletiva',
      description: 'Sincronia perfeita entre os atletas'
    },
    {
      id: '5',
      title: 'Virada Histórica',
      date: '2025-01-11',
      time: '17:08:45',
      duration: '7s',
      tournament: 'Torneio Nacional',
      thumbnail: 'https://via.placeholder.com/400x225/1e3a8a/ffffff?text=Virada+Historica',
      description: 'Momento que ficará na história do futevôlei'
    },
    {
      id: '6',
      title: 'Bloqueio Espetacular',
      date: '2025-01-10',
      time: '19:30:12',
      duration: '7s',
      tournament: 'Torneio Nacional',
      thumbnail: 'https://via.placeholder.com/400x225/f59e0b/ffffff?text=Bloqueio+Show',
      description: 'Bloqueio que arrancou aplausos da arquibancada'
    }
  ];

  const tournaments = ['todos', ...Array.from(new Set(videoMoments.map(v => v.tournament)))];

  const filteredVideos = videoMoments.filter(video => {
    const matchesFilter = selectedFilter === 'todos' || video.tournament === selectedFilter;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
              Melhores Momentos
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Reviva os momentos mais emocionantes capturados automaticamente durante nossas transmissões. 
              Cada clipe de 7 segundos é salvo automaticamente quando detectamos jogadas especiais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar momentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
              />
            </div>

            {/* Tournament Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
              >
                {tournaments.map(tournament => (
                  <option key={tournament} value={tournament}>
                    {tournament === 'todos' ? 'Todos os Torneios' : tournament}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredVideos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎥</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Nenhum momento encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou termo de busca</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-sport-yellow text-sport-dark px-2 py-1 rounded text-sm font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(video.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{video.time}</span>
                      </div>
                      <div className="text-sport-blue font-medium">
                        {video.tournament}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Technical Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Como Funciona Nossa Tecnologia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-sport-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Detecção Automática</h3>
                <p className="text-gray-600 text-sm">Nosso sistema OBS monitora constantemente a transmissão em busca de momentos especiais</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sport-yellow rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-sport-dark font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Captura Instantânea</h3>
                <p className="text-gray-600 text-sm">Ao pressionar um macro, salvamos automaticamente os últimos 7 segundos da transmissão</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sport-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Organização Automática</h3>
                <p className="text-gray-600 text-sm">Os clipes são organizados por data e hora, prontos para serem compartilhados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BestMoments;