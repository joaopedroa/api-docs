import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
  return (
    <Layout title="API Swagger" description="Documentação interativa da API">
      <div style={{ padding: '2rem 0' }}>
        <div className="container">
          <h1>API Documentation - Swagger UI</h1>
          <p>Documentação interativa da API com Swagger UI</p>
          <SwaggerUI 
            url="/api/openapi.yaml"
            deepLinking={true}
            displayOperationId={false}
            defaultModelsExpandDepth={1}
            defaultModelExpandDepth={1}
            docExpansion="list"
            supportedSubmitMethods={['get', 'post', 'put', 'delete', 'patch']}
            tryItOutEnabled={true}
            requestInterceptor={(request) => {
              // Adicionar token de autenticação se necessário
              // request.headers.Authorization = 'Bearer SEU_TOKEN';
              return request;
            }}
            responseInterceptor={(response) => {
              return response;
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
