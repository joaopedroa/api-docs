import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📚 Sobre o Produto',
      items: [
        'sobre-produto',
        'timeline-produto',
      ],
    },
    {
      type: 'category',
      label: '🔧 API Documentation',
      items: [
        'api-reference',
      ],
    },
    {
      type: 'category',
      label: '🗄️ Bases SOR',
      items: [
        'bases-sor',
        'colunas-sor',
      ],
    },
    {
      type: 'category',
      label: '📖 Tutorial',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: '📝 Guias Avançados',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
  ],
};

export default sidebars;
