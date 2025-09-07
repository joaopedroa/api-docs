# 🚀 Como Usar o Projeto de Documentação da API

## ✅ O que foi criado

1. **Projeto Docusaurus** configurado para documentação de API
2. **Swagger UI integrado** para documentação interativa
3. **Arquivo OpenAPI de exemplo** em `static/api/openapi.yaml`
4. **Páginas de documentação** com exemplos de endpoints

## 🔧 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar servidor de desenvolvimento
```bash
npm start
```

### 3. Acessar no navegador
- **Página principal**: http://localhost:3000
- **Swagger UI**: http://localhost:3000/swagger
- **Documentação da API**: http://localhost:3000/docs/api-reference

## 📁 Estrutura do projeto

```
api-docs/
├── static/
│   └── api/
│       └── openapi.yaml          # SEU ARQUIVO SWAGGER AQUI
├── src/
│   └── pages/
│       ├── index.tsx             # Página inicial
│       └── swagger.tsx           # Página do Swagger UI
├── docs/
│   ├── intro.md                  # Introdução
│   └── api-reference.md          # Documentação da API
└── docusaurus.config.ts          # Configuração principal
```

## 🔄 Como adicionar seu Swagger

### Opção 1: Substituir arquivo existente
1. Substitua o arquivo `static/api/openapi.yaml` pelo seu arquivo YAML/JSON
2. Execute `npm start` para ver as mudanças

### Opção 2: Usar URL externa
1. Edite o arquivo `src/pages/swagger.tsx`
2. Altere a linha:
   ```tsx
   url="/api/openapi.yaml"
   ```
   Para:
   ```tsx
   url="https://sua-api.com/swagger.json"
   ```

## 🎨 Personalização

### Alterar título e descrição
Edite `docusaurus.config.ts`:
```typescript
title: 'Sua API Documentation',
tagline: 'Documentação da sua API',
```

### Adicionar autenticação no Swagger
Edite `src/pages/swagger.tsx` e descomente a linha:
```tsx
request.headers.Authorization = 'Bearer SEU_TOKEN';
```

### Personalizar cores
Edite `src/css/custom.css`:
```css
:root {
  --ifm-color-primary: #sua-cor;
}
```

## 🚀 Deploy

### GitHub Pages
```bash
npm run deploy
```

### Build para produção
```bash
npm run build
npm run serve
```

## 📝 Exemplo de uso

1. **Execute o projeto**: `npm start`
2. **Acesse**: http://localhost:3000
3. **Clique em "Swagger UI"** para ver a documentação interativa
4. **Teste os endpoints** diretamente no navegador

## 🆘 Problemas comuns

### Erro de build
```bash
npm run clear
npm run build
```

### Swagger não carrega
- Verifique se o arquivo YAML está válido
- Confirme se o caminho está correto
- Teste o arquivo em https://editor.swagger.io/

### Página não atualiza
- Pare o servidor (Ctrl+C)
- Execute `npm start` novamente

## 📚 Recursos úteis

- [Documentação do Docusaurus](https://docusaurus.io/)
- [Swagger UI React](https://github.com/swagger-api/swagger-ui)
- [Editor Swagger Online](https://editor.swagger.io/)
