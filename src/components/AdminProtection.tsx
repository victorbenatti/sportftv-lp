import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface AdminProtectionProps {
  children: React.ReactNode;
}

const AdminProtection: React.FC<AdminProtectionProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Senha simples para demonstração - em produção, use autenticação adequada
  const ADMIN_PASSWORD = 'admin123';

  useEffect(() => {
    // Verifica se já está autenticado no sessionStorage
    const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simula um pequeno delay para melhor UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
    setError('');
  };

  if (isAuthenticated) {
    return (
      <div>
        {/* Botão de logout no canto superior direito */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-lg text-sm font-medium"
          >
            🚪 Sair do Admin
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-sport-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Acesso Administrativo
            </h1>
            <p className="text-gray-600">
              Digite a senha para acessar o painel
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm font-medium">❌ {error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha de Administrador
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sport-blue focus:border-transparent"
                  placeholder="Digite a senha..."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full bg-sport-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Verificando...
                </>
              ) : (
                <>
                  <Lock size={20} />
                  Entrar no Painel
                </>
              )}
            </button>
          </form>

          {/* Info */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-blue-800 text-sm">
              <strong>💡 Para demonstração:</strong><br />
              Senha: <code className="bg-blue-100 px-2 py-1 rounded text-blue-900 font-mono">admin123</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProtection;