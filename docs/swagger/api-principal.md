---
sidebar_position: 1
---

# API Principal

Documentação interativa da API principal usando Swagger UI.

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

<div style={{ padding: '1rem 0' }}>
  <SwaggerUI 
    url="/api/openapi.yaml"
    deepLinking={true}
    displayOperationId={false}
    defaultModelsExpandDepth={1}
    defaultModelExpandDepth={1}
    docExpansion="list"
    supportedSubmitMethods={['get', 'post', 'put', 'delete', 'patch']}
    tryItOutEnabled={true}
  />
</div>
