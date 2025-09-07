import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

function SwaggerSimple() {
  useEffect(() => {
    console.log('SwaggerSimple component mounted');
    
    // Carregar CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css';
    document.head.appendChild(link);

    // Carregar scripts sequencialmente
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initSwagger = async () => {
      try {
        console.log('Carregando scripts...');
        await loadScript('https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js');
        await loadScript('https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js');
        
        console.log('Scripts carregados, inicializando...');
        
        // @ts-ignore
        if (window.SwaggerUIBundle && window.SwaggerUIStandalonePreset) {
          console.log('Inicializando Swagger UI...');
          
          // @ts-ignore
          window.SwaggerUIBundle({
            spec: {
              openapi: "3.0.0",
              info: {
                title: "API Teste",
                version: "1.0.0"
              },
              paths: {
                "/test": {
                  get: {
                    summary: "Teste",
                    responses: {
                      "200": {
                        description: "OK"
                      }
                    }
                  }
                }
              }
            },
            dom_id: '#swagger-container',
            presets: [
              // @ts-ignore
              window.SwaggerUIBundle.presets.apis,
              // @ts-ignore
              window.SwaggerUIStandalonePreset
            ],
            layout: "StandaloneLayout"
          });
          
          console.log('Swagger UI inicializado com sucesso!');
        } else {
          console.error('SwaggerUIBundle não disponível');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    initSwagger();
  }, []);

  return (
    <Layout title="Swagger Simple" description="Teste simples do Swagger">
      <div style={{ padding: '20px' }}>
        <h1>Swagger UI Simples</h1>
        <p>Teste de carregamento do Swagger UI.</p>
        
        <div id="swagger-container" style={{ 
          minHeight: '400px', 
          border: '1px solid #ddd', 
          borderRadius: '4px', 
          padding: '20px',
          marginTop: '20px'
        }}>
          <p>Carregando Swagger UI...</p>
        </div>
      </div>
    </Layout>
  );
}

export default SwaggerSimple;
