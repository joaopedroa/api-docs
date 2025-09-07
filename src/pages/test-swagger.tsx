import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

function TestSwagger() {
  useEffect(() => {
    console.log('TestSwagger component mounted');
    
    // Verificar se o container existe
    const container = document.getElementById('swagger-test');
    if (container) {
      console.log('Container encontrado:', container);
      container.innerHTML = '<p>Container encontrado! Testando carregamento...</p>';
    } else {
      console.log('Container não encontrado');
    }

    // Testar carregamento de script
    const testScript = document.createElement('script');
    testScript.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js';
    testScript.onload = () => {
      console.log('Script carregado com sucesso');
      if (window.SwaggerUIBundle) {
        console.log('SwaggerUIBundle disponível');
        container.innerHTML = '<p>SwaggerUIBundle carregado com sucesso!</p>';
      } else {
        console.log('SwaggerUIBundle não disponível');
        container.innerHTML = '<p>SwaggerUIBundle não disponível</p>';
      }
    };
    testScript.onerror = () => {
      console.log('Erro ao carregar script');
      container.innerHTML = '<p>Erro ao carregar script</p>';
    };
    document.head.appendChild(testScript);
  }, []);

  return (
    <Layout title="Test Swagger" description="Teste do Swagger UI">
      <div style={{ padding: '20px' }}>
        <h1>Teste do Swagger UI</h1>
        <p>Esta página testa o carregamento do Swagger UI.</p>
        
        <div id="swagger-test" style={{ 
          minHeight: '200px', 
          border: '1px solid #ddd', 
          borderRadius: '4px', 
          padding: '20px',
          marginTop: '20px'
        }}>
          <p>Carregando teste...</p>
        </div>
      </div>
    </Layout>
  );
}

export default TestSwagger;
