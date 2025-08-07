import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../services/firebase';

// Interface para dados mínimos do vídeo
interface VideoData {
  title: string;
  videoUrl: string;
  date?: string;
  tournament?: string;
  description?: string;
  thumbnailUrl?: string;
  duration?: string;
  views?: number;
}

// Função para criar um documento de vídeo com valores padrão
export const createVideoDocument = async (videoData: VideoData) => {
  try {
    // Valores padrão
    const defaultData = {
      title: videoData.title,
      videoUrl: videoData.videoUrl,
      date: videoData.date || new Date().toLocaleDateString('pt-BR'),
      tournament: videoData.tournament || 'Torneio Padrão',
      description: videoData.description || 'Descrição não informada',
      thumbnailUrl: videoData.thumbnailUrl || '',
      duration: videoData.duration || '0:00',
      views: videoData.views || 0,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    // Adicionar documento à coleção 'videos'
    const docRef = await addDoc(collection(db, 'videos'), defaultData);
    
    console.log('Documento criado com ID:', docRef.id);
    return { success: true, id: docRef.id, data: defaultData };
  } catch (error) {
    console.error('Erro ao criar documento:', error);
    return { success: false, error };
  }
};

// Função para criar múltiplos vídeos de teste
export const createTestVideos = async () => {
  const testVideos = [
    {
      title: 'Vídeo Teste 1',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/sport-ftv/o/videos%2Fteste1.mp4?alt=media',
      tournament: 'Campeonato de Teste',
      description: 'Primeiro vídeo de teste'
    },
    {
      title: 'Vídeo Teste 2',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/sport-ftv/o/videos%2Fteste2.mp4?alt=media',
      tournament: 'Liga de Teste',
      description: 'Segundo vídeo de teste',
      duration: '01:30'
    },
    {
      title: 'Vídeo Teste 3',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/sport-ftv/o/videos%2Fteste3.mp4?alt=media',
      tournament: 'Copa de Teste',
      views: 10
    }
  ];

  try {
    const results = [];
    for (const video of testVideos) {
      const result = await createVideoDocument(video);
      results.push(result);
    }
    
    console.log('Vídeos de teste criados:', results);
    return results;
  } catch (error) {
    console.error('Erro ao criar vídeos de teste:', error);
    return { success: false, error };
  }
};

// Função rápida para criar um vídeo simples
export const quickCreateVideo = async (title: string, videoUrl: string, tournament?: string) => {
  return await createVideoDocument({
    title,
    videoUrl,
    tournament
  });
};