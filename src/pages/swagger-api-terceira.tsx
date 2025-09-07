import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function SwaggerApiTerceira() {
  return (
    <Layout title="API Terceira - Swagger UI" description="Documentação interativa da terceira API">
      <div style={{ padding: '20px' }}>
        <h1>API Terceira</h1>
        <p>Documentação interativa da terceira API usando Swagger UI.</p>
        
        <div style={{ marginTop: '20px' }}>
          <SwaggerUI 
            url="/api-docs/api/api-terceira.yaml"
            deepLinking={true}
            displayOperationId={false}
            defaultModelsExpandDepth={1}
            defaultModelExpandDepth={1}
            docExpansion="list"
            supportedSubmitMethods={['get', 'post', 'put', 'delete', 'patch']}
            tryItOutEnabled={true}
          />
        </div>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2>📋 Informações da API</h2>
          <ul>
            <li><strong>Versão:</strong> 1.0.0</li>
            <li><strong>Especificação:</strong> OpenAPI 3.0</li>
            <li><strong>Base URL:</strong> <code>https://api-terceira.exemplo.com/v1</code></li>
          </ul>

          <h3>🔧 Como Usar</h3>
          <ol>
            <li><strong>Explore os endpoints</strong> na interface acima</li>
            <li><strong>Teste as chamadas</strong> diretamente no Swagger UI</li>
            <li><strong>Veja os exemplos</strong> de requisição e resposta</li>
            <li><strong>Baixe o arquivo OpenAPI</strong> para usar em outras ferramentas</li>
          </ol>

          <h3>📁 Arquivo OpenAPI</h3>
          <p>
            <a href="/api-docs/api/api-terceira.yaml" download>Download do arquivo YAML</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SwaggerApiTerceira;
