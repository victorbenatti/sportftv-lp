import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Calendar, Download } from 'lucide-react';

// Interface para tipagem dos dados do vídeo
interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  date: string;
  onClick: () => void; // Função para abrir o player
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  thumbnail,
  videoUrl,
  duration,
  date,
  onClick
}) => {
  // Função para download do vídeo
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita abrir o player
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `${title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Thumbnail com overlay de play */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Botão de play centralizado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
          >
            <Play className="text-sport-blue ml-1" size={24} fill="currentColor" />
          </motion.div>
        </div>
        
        {/* Duração no canto inferior direito */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
          <Clock size={12} className="inline mr-1" />
          {duration}
        </div>
      </div>
      
      {/* Conteúdo do card */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-sport-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        {/* Metadados */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Calendar size={12} className="mr-1"/> {date}</span>
            <span className="flex items-center"><Clock size={12} className="mr-1"/> {duration}</span>
          </div>
          
          {/* Botão de download */}
           <motion.button
             onClick={handleDownload}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             className="w-8 h-8 bg-gray-100 hover:bg-sport-blue hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
             title="Baixar vídeo"
           >
             <Download size={16} />
           </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;