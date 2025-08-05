import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';

interface VideoMoment {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: string;
  date: string;
}

interface SelectedVideo {
  videoUrl: string;
  title: string;
  description: string;
}

const BestMoments: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);
  const [videoMoments, setVideoMoments] = useState<VideoMoment[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para extrair data do nome do arquivo
  const extractDateFromFileName = (fileName: string): string => {
    // Padrão: Replay 2025-08-03 09-59-57 ou YYYY-MM-DD
    // No formato do arquivo: YYYY-MM-DD (2025-08-03 = 3 de agosto de 2025)
    const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
    const dateMatch = fileName.match(datePattern);
    
    if (dateMatch) {
      const [, year, month, day] = dateMatch;
      // Formatação brasileira: DD/MM/AAAA
      // 2025-08-03 vira 03/08/2025 (3 de agosto de 2025)
      return `${day}/${month}/${year}`;
    }
    
    // Fallback para data atual
    return new Date().toLocaleDateString('pt-BR');
  };

  // Função para extrair hora do nome do arquivo
  const extractTimeFromFileName = (fileName: string): string => {
    // Padrão: Replay 2025-08-03 09-59-57
    const timePattern = /\d{4}-\d{2}-\d{2}\s+(\d{2})-(\d{2})-(\d{2})/;
    const timeMatch = fileName.match(timePattern);
    
    if (timeMatch) {
      const [, hour, minute, second] = timeMatch;
      return `${hour}:${minute}:${second}`;
    }
    
    // Fallback para duração padrão
    return '00:30';
  };

  // Função para gerar thumbnail do primeiro frame do vídeo
  const generateVideoThumbnail = (videoUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      video.crossOrigin = 'anonymous';
      video.currentTime = 1; // Captura no segundo 1
      
      video.onloadeddata = () => {
        canvas.width = 320;
        canvas.height = 180;
        
        if (ctx) {
          // Desenha o frame do vídeo no canvas
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          // Converte para base64
          const thumbnailDataUrl = canvas.toDataURL('image/jpeg', 0.8);
          resolve(thumbnailDataUrl);
        } else {
          // Fallback para thumbnail padrão
          resolve('/src/assets/default-thumbnail.svg');
        }
      };
      
      video.onerror = () => {
        // Fallback para thumbnail padrão em caso de erro
        resolve('/src/assets/default-thumbnail.svg');
      };
      
      video.src = videoUrl;
      video.load();
    });
  };

  // Função para detectar automaticamente vídeos na pasta assets/videos
  useEffect(() => {
    const loadVideos = async () => {
      try {
        // Detecta automaticamente todos os vídeos na pasta assets/videos
        const videoModules = import.meta.glob('/src/assets/videos/**/*.{mp4,webm,mov,avi}', { 
          eager: true, 
          as: 'url' 
        });
        
        // Detecta automaticamente todas as thumbnails na pasta assets/videos/thumbnails
        const thumbnailModules = import.meta.glob('/src/assets/videos/thumbnails/**/*.{jpg,jpeg,png,webp,svg}', { 
          eager: true, 
          as: 'url' 
        });

        const videos: VideoMoment[] = [];
        let videoId = 1;

        // Processa cada vídeo encontrado
        for (const [videoPath, videoUrl] of Object.entries(videoModules)) {
          const fileName = videoPath.split('/').pop()?.split('.')[0] || '';
          
          // Procura por uma thumbnail correspondente
          const thumbnailEntry = Object.entries(thumbnailModules).find(([thumbPath]) => {
            const thumbFileName = thumbPath.split('/').pop()?.split('.')[0] || '';
            return thumbFileName === fileName;
          });

          let thumbnailUrl: string;
          
          if (thumbnailEntry) {
            // Usa thumbnail personalizada se existir
            thumbnailUrl = thumbnailEntry[1] as string;
          } else {
            // Gera thumbnail automática do primeiro frame
            try {
              thumbnailUrl = await generateVideoThumbnail(videoUrl as string);
            } catch (error) {
              console.warn(`Erro ao gerar thumbnail para ${fileName}:`, error);
              thumbnailUrl = '/src/assets/default-thumbnail.svg';
            }
          }

          // Cria o objeto do vídeo com dados automáticos
          videos.push({
            id: videoId++,
            title: fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: `Melhor momento capturado automaticamente`,
            thumbnail: thumbnailUrl,
            videoUrl: videoUrl as string,
            duration: extractTimeFromFileName(fileName),
            views: Math.floor(Math.random() * 1000).toString(),
            date: extractDateFromFileName(fileName)
          });
        }

        setVideoMoments(videos);
      } catch (error) {
        console.error('Erro ao carregar vídeos:', error);
        // Fallback para dados estáticos se houver erro
        setVideoMoments([]);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const tournaments = ['todos']; // Simplificado por enquanto

  const filteredVideos = videoMoments.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleVideoClick = (video: VideoMoment) => {
    setSelectedVideo({
      videoUrl: video.videoUrl,
      title: video.title,
      description: video.description
    });
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedVideo(null);
  };

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
              Cada clipe de 5 segundos é salvo automaticamente quando detectamos jogadas especiais.
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
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-sport-blue mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-sport-blue border-t-transparent rounded-full mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Carregando vídeos...</h3>
              <p className="text-gray-600">Detectando automaticamente os vídeos da pasta</p>
            </motion.div>
          ) : filteredVideos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎥</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Nenhum momento encontrado</h3>
              <p className="text-gray-600">
                {videoMoments.length === 0 
                  ? 'Adicione vídeos na pasta /src/assets/videos/ para que apareçam automaticamente aqui'
                  : 'Tente ajustar os filtros ou termo de busca'
                }
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                  duration={video.duration}
                  views={video.views}
                  date={video.date}
                  onClick={() => handleVideoClick(video)}
                />
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
                <p className="text-gray-600 text-sm">Ao pressionar um macro, salvamos automaticamente os últimos 5 segundos da transmissão</p>
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

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          isOpen={isPlayerOpen}
          onClose={handleClosePlayer}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </div>
  );
};

export default BestMoments;