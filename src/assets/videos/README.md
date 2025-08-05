# 📁 Pasta de Vídeos - Detecção Automática

## 🎯 Como Funciona

Esta pasta utiliza **detecção automática** de vídeos! Você só precisa adicionar seus arquivos aqui e eles aparecerão automaticamente na página "Melhores Momentos".

## 📂 Estrutura Recomendada

```
src/assets/videos/
├── video1.mp4
├── video2.webm
├── lance-incrivel.mp4
└── thumbnails/
    ├── video1.jpg
    ├── video2.jpg
    └── lance-incrivel.png
```

## 🎬 Formatos Suportados

### Vídeos:
- `.mp4` (recomendado)
- `.webm`
- `.mov`
- `.avi`

### Thumbnails:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## 📝 Regras de Nomenclatura

1. **Vídeos e thumbnails devem ter o mesmo nome**
   - ✅ `lance-incrivel.mp4` + `thumbnails/lance-incrivel.jpg`
   - ❌ `video1.mp4` + `thumbnails/thumbnail1.jpg`

2. **Use nomes descritivos**
   - ✅ `saque-espetacular.mp4`
   - ✅ `defesa-impossivel.mp4`
   - ❌ `video123.mp4`

3. **Evite caracteres especiais**
   - ✅ Use hífens: `melhor-lance.mp4`
   - ✅ Use underscores: `melhor_lance.mp4`
   - ❌ Evite espaços: `melhor lance.mp4`

## 🚀 Processo Automático

1. **Adicione o vídeo** na pasta `/src/assets/videos/`
2. **Adicione a thumbnail** na pasta `/src/assets/videos/thumbnails/`
3. **Recarregue a página** - o vídeo aparecerá automaticamente!

## 📊 Dados Gerados Automaticamente

- **Título**: Baseado no nome do arquivo (formatado automaticamente)
- **Descrição**: "Melhor momento capturado automaticamente"
- **Duração**: "00:30" (padrão)
- **Visualizações**: Número aleatório
- **Data**: Data atual

## 🔧 Exemplo Prático

**Arquivo**: `saque-espetacular.mp4`
**Resultado**:
- Título: "Saque Espetacular"
- Thumbnail: `thumbnails/saque-espetacular.jpg`
- Aparece automaticamente na página!

---

**💡 Dica**: Se não houver thumbnail correspondente, será usado um placeholder padrão.