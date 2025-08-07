# 🔒 Configuração de Segurança para Produção

## ⚠️ IMPORTANTE: Configuração Atual

**Status:** Configuração temporária para demonstração  
**Risco:** Permissões abertas no Firestore  
**Ação:** Implementar autenticação antes de produção

## 🚨 Problema Atual

### Firestore Rules (Temporário)
```javascript
// ATUAL - APENAS PARA DEMONSTRAÇÃO
match /videos/{document} {
  allow read: if true;
  allow write: if true; // ⚠️ INSEGURO!
}
```

### Riscos
- ❌ Qualquer pessoa pode adicionar/editar vídeos
- ❌ Sem controle de acesso
- ❌ Possível spam ou conteúdo inadequado
- ❌ Sem logs de auditoria

## ✅ Solução para Produção

### 1. Implementar Firebase Authentication

#### Instalar dependências
```bash
npm install firebase
```

#### Configurar Auth no Firebase Console
1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Vá em "Authentication" > "Sign-in method"
3. Ative "Email/Password"
4. Crie usuários administrativos

#### Atualizar firebase.ts
```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Adicionar
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // sua configuração
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Adicionar
export const storage = getStorage(app);
```

### 2. Criar Sistema de Login

#### AuthContext.tsx
```typescript
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### 3. Atualizar AdminProtection.tsx

```typescript
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './LoginForm';

interface AdminProtectionProps {
  children: React.ReactNode;
}

const AdminProtection: React.FC<AdminProtectionProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <LoginForm />;
  }

  return <>{children}</>;
};

export default AdminProtection;
```

### 4. Atualizar Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Leitura pública, escrita apenas para usuários autenticados
    match /videos/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Opcional: Restringir ainda mais por email específico
    match /videos/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
                      request.auth.token.email in [
                        'admin@sportftv.com',
                        'editor@sportftv.com'
                      ];
    }
  }
}
```

### 5. Implementar Roles (Opcional)

#### Adicionar custom claims
```javascript
// No Firebase Functions ou Admin SDK
const admin = require('firebase-admin');

// Definir role de admin
await admin.auth().setCustomUserClaims(uid, { admin: true });

// Firestore rules com roles
match /videos/{document} {
  allow read: if true;
  allow write: if request.auth != null && 
                  request.auth.token.admin == true;
}
```

## 📋 Checklist de Implementação

### Antes de Produção
- [ ] Implementar Firebase Authentication
- [ ] Criar usuários administrativos
- [ ] Atualizar AdminProtection com auth real
- [ ] Atualizar Firestore rules para exigir auth
- [ ] Testar login/logout
- [ ] Testar permissões
- [ ] Implementar logs de auditoria
- [ ] Configurar backup automático

### Configurações de Segurança
- [ ] Ativar 2FA para contas admin
- [ ] Configurar alertas de segurança
- [ ] Implementar rate limiting
- [ ] Configurar CORS adequadamente
- [ ] Revisar regras de Storage

## 🛠️ Comandos Úteis

### Deploy das regras
```bash
firebase deploy --only firestore:rules
```

### Testar regras localmente
```bash
firebase emulators:start --only firestore
```

### Backup do Firestore
```bash
gcloud firestore export gs://[BUCKET_NAME]
```

## 📞 Próximos Passos

1. **Imediato:** Implementar autenticação básica
2. **Curto prazo:** Adicionar roles e permissões
3. **Médio prazo:** Implementar auditoria e logs
4. **Longo prazo:** Adicionar 2FA e monitoramento avançado

---

**⚠️ LEMBRETE:** As regras atuais são temporárias e inseguras. Implemente autenticação antes de usar em produção!