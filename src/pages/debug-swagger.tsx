import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

function DebugSwagger() {
  const [debugInfo, setDebugInfo] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const addDebugInfo = (info: string) => {
    console.log(info);
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  useEffect(() => {
    addDebugInfo('Componente montado');
    
    const container = document.getElementById('swagger-debug');
    if (container) {
      addDebugInfo('Container encontrado');
    } else {
      addDebugInfo('Container NÃO encontrado');
    }

    // Testar carregamento de CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css';
    link.onload = () => addDebugInfo('CSS carregado');
    link.onerror = () => addDebugInfo('ERRO ao carregar CSS');
    document.head.appendChild(link);

    // Testar carregamento de script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js';
    script.onload = () => {
      addDebugInfo('Script carregado');
      if (window.SwaggerUIBundle) {
        addDebugInfo('SwaggerUIBundle disponível');
        setIsLoading(false);
      } else {
        addDebugInfo('SwaggerUIBundle NÃO disponível');
      }
    };
    script.onerror = () => addDebugInfo('ERRO ao carregar script');
    document.head.appendChild(script);

    // Timeout para parar loading
    setTimeout(() => {
      setIsLoading(false);
      addDebugInfo('Timeout atingido');
    }, 10000);
  }, []);

  return (
    <Layout title="Debug Swagger" description="Debug do Swagger UI">
      <div style={{ padding: '20px' }}>
        <h1>Debug do Swagger UI</h1>
        <p>Esta página mostra informações de debug do carregamento do Swagger UI.</p>
        
        <div style={{ 
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}>
          <h3>Informações de Debug:</h3>
          <div style={{ 
            maxHeight: '300px', 
            overflowY: 'auto',
            fontFamily: 'monospace',
            fontSize: '12px',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>
            {debugInfo.map((info, index) => (
              <div key={index} style={{ marginBottom: '5px' }}>
                {info}
              </div>
            ))}
          </div>
        </div>

        <div id="swagger-debug" style={{ 
          minHeight: '200px', 
          border: '1px solid #ddd', 
          borderRadius: '4px', 
          padding: '20px',
          marginTop: '20px'
        }}>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            <p>Carregamento concluído</p>
          )}
        </div>

        <div style={{ 
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#e8f4f8',
          borderRadius: '4px',
          border: '1px solid #bee5eb'
        }}>
          <h3>Teste de URLs:</h3>
          <p>Teste estas URLs:</p>
          <ul>
            <li><a href="/swagger-simple">Swagger Simples</a></li>
            <li><a href="/test-swagger">Test Swagger</a></li>
            <li><a href="/swagger-api-principal">API Principal</a></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default DebugSwagger;
