# 📚 Documentação da API

Documentação completa da API construída com Docusaurus e integração com Swagger UI.

## 🚀 Acesso Rápido

- **🌐 Site**: [https://SEU_USUARIO.github.io/api-docs/](https://SEU_USUARIO.github.io/api-docs/)
- **📖 Documentação**: [Guia de Uso](INSTRUCOES.md)
- **🔧 Swagger APIs**: Disponível no sidebar da documentação

## 📋 Funcionalidades

- ✅ **Múltiplas APIs** organizadas no sidebar
- ✅ **Swagger UI interativo** via iframe (compatível com SSG)
- ✅ **Documentação em Markdown** com exemplos
- ✅ **Design responsivo** e moderno
- ✅ **Deploy automático** no GitHub Pages
- ✅ **Suporte a tema escuro/claro**
- ✅ **Arquivos OpenAPI** para download

## 🔧 Como Usar Localmente

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
- **Swagger APIs**: http://localhost:3000/docs/swagger/

## 📁 Estrutura do Projeto

```
api-docs/
├── docs/                    # Documentação em Markdown
│   ├── swagger/            # Páginas do Swagger UI
│   └── api-reference.md    # Referência da API
├── static/
│   └── api/               # Arquivos YAML/JSON do Swagger
├── src/
│   ├── pages/             # Páginas React
│   └── css/               # Estilos personalizados
└── .github/
    └── workflows/         # Deploy automático
```

## 🔄 Como Adicionar Novas APIs

1. **Criar arquivo YAML**: `static/api/sua-api.yaml`
2. **Criar página MD**: `docs/swagger/sua-api.md`
3. **Atualizar sidebar**: Editar `sidebars.ts`
4. **Fazer commit**: As mudanças serão deployadas automaticamente

Veja o [guia completo](COMO_ADICIONAR_APIS.md) para mais detalhes.

## 🚀 Deploy no GitHub Pages

### Deploy Automático (Recomendado)
1. Configure o repositório no GitHub
2. Atualize `docusaurus.config.ts` com seu usuário
3. Faça push para a branch `main`
4. O deploy acontece automaticamente

### Deploy Manual
```bash
npm run deploy
```

Veja o [guia completo](GITHUB_PAGES_GUIDE.md) para mais detalhes.

## 🎨 Personalização

### Cores e Tema
Edite `src/css/custom.css` para personalizar:
- Cores dos badges do Swagger
- Tema geral do site
- Estilos personalizados

### Configuração
Edite `docusaurus.config.ts` para:
- Alterar título e descrição
- Configurar navegação
- Ajustar configurações do GitHub Pages

## 📚 Documentação Adicional

- [📖 Guia de Uso](INSTRUCOES.md)
- [🔧 Como Adicionar APIs](COMO_ADICIONAR_APIS.md)
- [🚀 Deploy no GitHub Pages](GITHUB_PAGES_GUIDE.md)
- [🎨 Correções de CSS](CSS_FIXES.md)
- [🌐 URLs Funcionais](URLS_FUNCIONAIS.md)

## 🆘 Suporte

Se tiver problemas:

1. **Verifique os logs** do GitHub Actions
2. **Confirme as configurações** no `docusaurus.config.ts`
3. **Teste localmente** antes do deploy
4. **Consulte a documentação** do Docusaurus

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ usando Docusaurus e Swagger UI**