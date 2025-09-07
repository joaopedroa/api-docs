import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

// Conteúdo YAML da API Terceira
const apiSpec = {
  openapi: "3.0.0",
  info: {
    title: "API Terceira",
    description: "Documentação da terceira API do projeto",
    version: "1.0.0",
    contact: {
      name: "Suporte da API Terceira",
      email: "suporte-terceira@exemplo.com"
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  servers: [
    {
      url: "https://api-terceira.exemplo.com/v1",
      description: "Servidor de produção da API terceira"
    },
    {
      url: "https://staging-api-terceira.exemplo.com/v1",
      description: "Servidor de staging da API terceira"
    }
  ],
  paths: {
    "/orders": {
      get: {
        tags: ["Pedidos"],
        summary: "Listar pedidos",
        description: "Retorna uma lista de todos os pedidos",
        parameters: [
          {
            name: "status",
            in: "query",
            description: "Status do pedido",
            required: false,
            schema: {
              type: "string",
              enum: ["pending", "processing", "shipped", "delivered", "cancelled"]
            }
          },
          {
            name: "page",
            in: "query",
            description: "Número da página",
            required: false,
            schema: {
              type: "integer",
              default: 1
            }
          }
        ],
        responses: {
          "200": {
            description: "Lista de pedidos retornada com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Order"
                      }
                    },
                    pagination: {
                      $ref: "#/components/schemas/Pagination"
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Parâmetros inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Pedidos"],
        summary: "Criar pedido",
        description: "Cria um novo pedido",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateOrderRequest"
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Pedido criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Order"
                }
              }
            }
          },
          "400": {
            description: "Dados inválidos",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          }
        }
      }
    },
    "/orders/{id}": {
      get: {
        tags: ["Pedidos"],
        summary: "Obter pedido por ID",
        description: "Retorna os dados de um pedido específico",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do pedido",
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": {
            description: "Pedido encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Order"
                }
              }
            }
          },
          "404": {
            description: "Pedido não encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          }
        }
      },
      put: {
        tags: ["Pedidos"],
        summary: "Atualizar pedido",
        description: "Atualiza o status de um pedido",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do pedido",
            schema: {
              type: "integer"
            }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateOrderRequest"
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Pedido atualizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Order"
                }
              }
            }
          },
          "404": {
            description: "Pedido não encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Order: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID único do pedido",
            example: 1
          },
          customerName: {
            type: "string",
            description: "Nome do cliente",
            example: "João Silva"
          },
          customerEmail: {
            type: "string",
            format: "email",
            description: "Email do cliente",
            example: "joao@exemplo.com"
          },
          items: {
            type: "array",
            description: "Itens do pedido",
            items: {
              $ref: "#/components/schemas/OrderItem"
            }
          },
          total: {
            type: "number",
            format: "float",
            description: "Total do pedido",
            example: 199.98
          },
          status: {
            type: "string",
            enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
            description: "Status do pedido",
            example: "pending"
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Data de criação do pedido",
            example: "2023-01-01T00:00:00Z"
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Data da última atualização",
            example: "2023-01-01T00:00:00Z"
          }
        },
        required: ["id", "customerName", "customerEmail", "items", "total", "status", "createdAt"]
      },
      OrderItem: {
        type: "object",
        properties: {
          productId: {
            type: "integer",
            description: "ID do produto",
            example: 1
          },
          productName: {
            type: "string",
            description: "Nome do produto",
            example: "Produto Exemplo"
          },
          quantity: {
            type: "integer",
            description: "Quantidade",
            example: 2
          },
          price: {
            type: "number",
            format: "float",
            description: "Preço unitário",
            example: 99.99
          },
          subtotal: {
            type: "number",
            format: "float",
            description: "Subtotal",
            example: 199.98
          }
        },
        required: ["productId", "productName", "quantity", "price", "subtotal"]
      },
      CreateOrderRequest: {
        type: "object",
        properties: {
          customerName: {
            type: "string",
            description: "Nome do cliente",
            example: "João Silva"
          },
          customerEmail: {
            type: "string",
            format: "email",
            description: "Email do cliente",
            example: "joao@exemplo.com"
          },
          items: {
            type: "array",
            description: "Itens do pedido",
            items: {
              type: "object",
              properties: {
                productId: {
                  type: "integer",
                  example: 1
                },
                quantity: {
                  type: "integer",
                  example: 2
                }
              },
              required: ["productId", "quantity"]
            }
          }
        },
        required: ["customerName", "customerEmail", "items"]
      },
      UpdateOrderRequest: {
        type: "object",
        properties: {
          status: {
            type: "string",
            enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
            description: "Novo status do pedido",
            example: "processing"
          }
        },
        required: ["status"]
      },
      Pagination: {
        type: "object",
        properties: {
          page: {
            type: "integer",
            description: "Página atual",
            example: 1
          },
          limit: {
            type: "integer",
            description: "Itens por página",
            example: 10
          },
          total: {
            type: "integer",
            description: "Total de itens",
            example: 100
          },
          totalPages: {
            type: "integer",
            description: "Total de páginas",
            example: 10
          }
        }
      },
      Error: {
        type: "object",
        properties: {
          error: {
            type: "string",
            description: "Código do erro",
            example: "VALIDATION_ERROR"
          },
          message: {
            type: "string",
            description: "Mensagem de erro",
            example: "Os dados fornecidos são inválidos"
          },
          details: {
            type: "object",
            description: "Detalhes adicionais do erro",
            example: {
              field: "customerEmail",
              reason: "Email é obrigatório"
            }
          }
        }
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Token JWT para autenticação"
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};

function SwaggerApiTerceira() {
  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const loadSwaggerUI = () => {
      if (!isMounted) return;

      // Verificar se já existe
      const existingContainer = document.getElementById('swagger-ui');
      if (existingContainer) {
        existingContainer.innerHTML = '';
      }

      // Carregar CSS do Swagger UI
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css';
      link.id = 'swagger-ui-css';
      document.head.appendChild(link);

      // Carregar JavaScript do Swagger UI Bundle
      const script1 = document.createElement('script');
      script1.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js';
      script1.id = 'swagger-ui-bundle';

      // Carregar JavaScript do Swagger UI Standalone Preset
      const script2 = document.createElement('script');
      script2.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js';
      script2.id = 'swagger-ui-standalone';

      const initializeSwagger = () => {
        if (!isMounted) return;

        // @ts-ignore
        if (window.SwaggerUIBundle && window.SwaggerUIStandalonePreset) {
          try {
            // @ts-ignore
            window.SwaggerUIBundle({
              spec: apiSpec,
              dom_id: '#swagger-ui',
              deepLinking: true,
              presets: [
                // @ts-ignore
                window.SwaggerUIBundle.presets.apis,
                // @ts-ignore
                window.SwaggerUIStandalonePreset
              ],
              plugins: [
                // @ts-ignore
                window.SwaggerUIBundle.plugins.DownloadUrl
              ],
              layout: "StandaloneLayout",
              tryItOutEnabled: false,
              supportedSubmitMethods: [],
              validatorUrl: null,
              docExpansion: "list",
              defaultModelsExpandDepth: 1,
              defaultModelExpandDepth: 1,
              displayRequestDuration: false,
              showExtensions: false,
              showCommonExtensions: false,
              filter: false,
              showRequestHeaders: false,
              showOperationId: false,
              displayOperationId: false,
              showMutatedRequest: false,
              onComplete: () => {
                if (!isMounted) return;
                setTimeout(() => {
                  const style = document.createElement('style');
                  style.textContent = `
                    .download-url-wrapper { display: none !important; }
                  `;
                  document.head.appendChild(style);
                }, 100);
              }
            });
          } catch (error) {
            console.error('Erro ao inicializar Swagger UI:', error);
            if (retryCount < maxRetries) {
              retryCount++;
              setTimeout(loadSwaggerUI, 1000);
            }
          }
        } else {
          if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(loadSwaggerUI, 1000);
          }
        }
      };

      script1.onload = () => {
        script2.onload = () => {
          setTimeout(initializeSwagger, 100);
        };
        script2.onerror = () => {
          if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(loadSwaggerUI, 1000);
          }
        };
      };

      script1.onerror = () => {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(loadSwaggerUI, 1000);
        }
      };

      document.head.appendChild(script1);
      document.head.appendChild(script2);
    };

    // Iniciar carregamento
    loadSwaggerUI();

    return () => {
      isMounted = false;
      // Cleanup
      const link = document.getElementById('swagger-ui-css');
      const script1 = document.getElementById('swagger-ui-bundle');
      const script2 = document.getElementById('swagger-ui-standalone');
      
      if (link && document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (script1 && document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
      if (script2 && document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, []);

  return (
    <Layout title="API Terceira - Swagger UI" description="Documentação da API Terceira">
      <div style={{ padding: '20px' }}>
        <h1>API Terceira</h1>
        <p>Documentação interativa da terceira API usando Swagger UI.</p>

        <div style={{ marginTop: '20px' }}>
          <div id="swagger-ui"></div>
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
            <li><strong>Veja os exemplos</strong> de requisição e resposta</li>
            <li><strong>Baixe o arquivo OpenAPI</strong> para usar em outras ferramentas</li>
          </ol>

          <h3>📁 Arquivo OpenAPI</h3>
          <p>
            <a href="/api/api-terceira.yaml" download>Download do arquivo YAML</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SwaggerApiTerceira;
