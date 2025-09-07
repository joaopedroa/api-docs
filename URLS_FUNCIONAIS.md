# 🌐 URLs Funcionais do Projeto

## ✅ URLs que funcionam corretamente:

### 🏠 Página Principal
- **URL**: http://localhost:3000
- **Descrição**: Página inicial com botões para navegação

### 📚 Documentação
- **URL**: http://localhost:3000/docs/intro
- **Descrição**: Página de introdução à documentação

### 🔧 API Reference
- **URL**: http://localhost:3000/docs/api-reference
- **Descrição**: Documentação completa da API com exemplos

### 🚀 Swagger UI
- **URL**: http://localhost:3000/swagger
- **Descrição**: Interface interativa do Swagger para testar endpoints

### 📝 Blog
- **URL**: http://localhost:3000/blog
- **Descrição**: Seção de blog (opcional)

## ❌ URLs que NÃO funcionam (removidas):

- ~~http://localhost:3000/docs/api/~~ (removida)
- ~~http://localhost:3000/docs/api/users~~ (removida)
- ~~http://localhost:3000/docs/api/users-id~~ (removida)

## 🎯 Como usar:

1. **Execute o servidor**:
   ```bash
   npm start
   ```

2. **Acesse as URLs funcionais**:
   - Página principal: http://localhost:3000
   - Swagger UI: http://localhost:3000/swagger
   - Documentação: http://localhost:3000/docs/api-reference

3. **Para adicionar seu Swagger**:
   - Substitua o arquivo `static/api/openapi.yaml`
   - Ou edite `src/pages/swagger.tsx` para usar URL externa

## 🔧 Estrutura atual:

```
docs/
├── intro.md              # Introdução
├── api-reference.md      # Documentação da API
└── tutorial-basics/      # Tutoriais do Docusaurus
```

**Nota**: A pasta `docs/api/` foi removida para evitar conflitos. Toda a documentação da API está agora em `docs/api-reference.md`.
