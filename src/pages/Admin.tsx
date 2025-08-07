import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Upload, Save, X } from 'lucide-react';
import { createVideoDocument } from '../utils/firestore-helpers';
import AdminProtection from '../components/AdminProtection';

interface VideoFormData {
  title: string;
  videoUrl: string;
  date: string;
  tournament: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
}

const AdminContent: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState<VideoFormData>({
    title: '',
    videoUrl: '',
    date: new Date().toLocaleDateString('pt-BR'),
    tournament: '',
    description: '',
    thumbnailUrl: '',
    duration: '',
    views: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'views' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const result = await createVideoDocument({
        title: formData.title,
        videoUrl: formData.videoUrl,
        date: formData.date,
        tournament: formData.tournament,
        description: formData.description || undefined,
        thumbnailUrl: formData.thumbnailUrl || undefined,
        duration: formData.duration || undefined,
        views: formData.views
      });

      if (result.success) {
        setMessage('✅ Vídeo adicionado com sucesso!');
        setFormData({
          title: '',
          videoUrl: '',
          date: new Date().toLocaleDateString('pt-BR'),
          tournament: '',
          description: '',
          thumbnailUrl: '',
          duration: '',
          views: 0
        });
        setIsFormOpen(false);
      } else {
        setMessage('❌ Erro ao adicionar vídeo. Tente novamente.');
      }
    } catch (error) {
      setMessage('❌ Erro ao adicionar vídeo. Verifique os dados.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      videoUrl: '',
      date: new Date().toLocaleDateString('pt-BR'),
      tournament: '',
      description: '',
      thumbnailUrl: '',
      duration: '',
      views: 0
    });
    setIsFormOpen(false);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔧 Painel Administrativo
          </h1>
          <p className="text-gray-600">
            Adicione novos vídeos em tempo real - sem necessidade de deploy!
          </p>
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg text-center font-medium ${
              message.includes('✅') 
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}
          >
            {message}
          </motion.div>
        )}

        {/* Add Video Button */}
        {!isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-sport-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              <Plus size={24} />
              Adicionar Novo Vídeo
            </button>
          </motion.div>
        )}

        {/* Form */}
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Upload className="text-sport-blue" size={28} />
                Novo Vídeo
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos obrigatórios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título * <span className="text-red-500">obrigatório</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                    placeholder="Ex: Gol espetacular do jogo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Torneio * <span className="text-red-500">obrigatório</span>
                  </label>
                  <input
                    type="text"
                    name="tournament"
                    value={formData.tournament}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                    placeholder="Ex: Campeonato Estadual 2025"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL do Vídeo * <span className="text-red-500">obrigatório</span>
                </label>
                <input
                  type="url"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                  placeholder="https://firebasestorage.googleapis.com/..."
                />
              </div>

              {/* Campos opcionais */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Campos Opcionais</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data
                    </label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                      placeholder="DD/MM/AAAA"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duração
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                      placeholder="Ex: 02:30"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL da Thumbnail
                  </label>
                  <input
                    type="url"
                    name="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                    placeholder="https://firebasestorage.googleapis.com/..."
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                    placeholder="Descrição do vídeo..."
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-sport-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Salvando...
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      Salvar Vídeo
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Como usar:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• <strong>Tempo real:</strong> Vídeos aparecem instantaneamente na página "Melhores Momentos"</li>
            <li>• <strong>Sem deploy:</strong> Não precisa fazer deploy para adicionar novos vídeos</li>
            <li>• <strong>Campos obrigatórios:</strong> Apenas título, torneio e URL do vídeo</li>
            <li>• <strong>Campos opcionais:</strong> Sistema preenche automaticamente com valores padrão</li>
            <li>• <strong>Acesso:</strong> Adicione /admin na URL para acessar este painel</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const Admin: React.FC = () => {
  return (
    <AdminProtection>
      <AdminContent />
    </AdminProtection>
  );
};

export default Admin;