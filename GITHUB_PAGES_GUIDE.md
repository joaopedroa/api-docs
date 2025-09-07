# 🚀 Como Publicar no GitHub Pages

## 📋 Pré-requisitos

1. **Conta no GitHub**
2. **Git instalado** no seu computador
3. **Projeto funcionando** localmente

## 🔧 Passo 1: Configurar o Repositório

### 1.1 Criar repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Nome: `api-docs` (ou o nome que preferir)
4. Marque **"Public"** (necessário para GitHub Pages gratuito)
5. **NÃO** marque "Add a README file"
6. Clique em **"Create repository"**

### 1.2 Configurar Git localmente
```bash
# Na pasta do projeto (api-docs)
git init
git add .
git commit -m "Initial commit: API documentation with Docusaurus"
```

### 1.3 Conectar com o GitHub
```bash
# Substitua SEU_USUARIO pelo seu nome de usuário do GitHub
git remote add origin https://github.com/SEU_USUARIO/api-docs.git
git branch -M main
git push -u origin main
```

## ⚙️ Passo 2: Atualizar Configuração

### 2.1 Editar docusaurus.config.ts
Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub:

```typescript
// Linha 19
url: 'https://SEU_USUARIO.github.io',

// Linha 22
baseUrl: '/api-docs/',

// Linha 26
organizationName: 'SEU_USUARIO',

// Linha 27
projectName: 'api-docs',
```

### 2.2 Exemplo com usuário "joaosilva":
```typescript
url: 'https://joaosilva.github.io',
baseUrl: '/api-docs/',
organizationName: 'joaosilva',
projectName: 'api-docs',
```

## 🚀 Passo 3: Deploy Automático

### 3.1 Instalar plugin GitHub Pages
```bash
npm install --save-dev @docusaurus/plugin-pwa
```

### 3.2 Adicionar script de deploy
No `package.json`, adicione:
```json
{
  "scripts": {
    "deploy": "docusaurus deploy"
  }
}
```

### 3.3 Fazer deploy
```bash
npm run deploy
```

## 🔄 Passo 4: Deploy Manual (Alternativa)

### 4.1 Build do projeto
```bash
npm run build
```

### 4.2 Configurar GitHub Pages
1. Acesse seu repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione **"GitHub Actions"**
4. Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with Docusaurus
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 🌐 Passo 5: Acessar sua Documentação

Após o deploy, sua documentação estará disponível em:
```
https://SEU_USUARIO.github.io/api-docs/
```

## 🔧 Configurações Adicionais

### 5.1 Domínio personalizado (opcional)
Se quiser usar um domínio próprio:
1. Adicione um arquivo `CNAME` na pasta `static/`:
```
meudominio.com
```

2. Configure o DNS do seu domínio para apontar para o GitHub Pages

### 5.2 HTTPS (automático)
O GitHub Pages fornece HTTPS automaticamente.

## 🆘 Solução de Problemas

### Problema: 404 Not Found
**Solução**: Verifique se o `baseUrl` está correto no `docusaurus.config.ts`

### Problema: CSS não carrega
**Solução**: Verifique se o `url` está correto no `docusaurus.config.ts`

### Problema: Deploy falha
**Solução**: 
1. Verifique se o repositório é público
2. Verifique se o GitHub Pages está habilitado
3. Verifique se o `organizationName` e `projectName` estão corretos

## 📝 Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub
- [ ] `docusaurus.config.ts` configurado com seu usuário
- [ ] Deploy executado com sucesso
- [ ] Site acessível em `https://SEU_USUARIO.github.io/api-docs/`

## 🎉 Pronto!

Sua documentação da API está agora disponível publicamente no GitHub Pages!
