import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

// Conteúdo YAML da API Secundária
const apiSpec = {
  openapi: "3.0.0",
  info: {
    title: "API Secundária",
    description: "Documentação da API secundária do projeto",
    version: "1.0.0",
    contact: {
      name: "Suporte da API Secundária",
      email: "suporte-secundaria@exemplo.com"
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  servers: [
    {
      url: "https://api-secundaria.exemplo.com/v1",
      description: "Servidor de produção da API secundária"
    },
    {
      url: "https://staging-api-secundaria.exemplo.com/v1",
      description: "Servidor de staging da API secundária"
    }
  ],
  paths: {
    "/products": {
      get: {
        tags: ["Produtos"],
        summary: "Listar produtos",
        description: "Retorna uma lista de todos os produtos",
        parameters: [
          {
            name: "category",
            in: "query",
            description: "Categoria do produto",
            required: false,
            schema: {
              type: "string"
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
            description: "Lista de produtos retornada com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Product"
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
        tags: ["Produtos"],
        summary: "Criar produto",
        description: "Cria um novo produto",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateProductRequest"
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Produto criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product"
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
    "/products/{id}": {
      get: {
        tags: ["Produtos"],
        summary: "Obter produto por ID",
        description: "Retorna os dados de um produto específico",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do produto",
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": {
            description: "Produto encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product"
                }
              }
            }
          },
          "404": {
            description: "Produto não encontrado",
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
      Product: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID único do produto",
            example: 1
          },
          name: {
            type: "string",
            description: "Nome do produto",
            example: "Produto Exemplo"
          },
          description: {
            type: "string",
            description: "Descrição do produto",
            example: "Descrição do produto exemplo"
          },
          price: {
            type: "number",
            format: "float",
            description: "Preço do produto",
            example: 99.99
          },
          category: {
            type: "string",
            description: "Categoria do produto",
            example: "Eletrônicos"
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Data de criação do produto",
            example: "2023-01-01T00:00:00Z"
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Data da última atualização",
            example: "2023-01-01T00:00:00Z"
          }
        },
        required: ["id", "name", "price", "category", "createdAt"]
      },
      CreateProductRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Nome do produto",
            example: "Produto Exemplo"
          },
          description: {
            type: "string",
            description: "Descrição do produto",
            example: "Descrição do produto exemplo"
          },
          price: {
            type: "number",
            format: "float",
            description: "Preço do produto",
            example: 99.99
          },
          category: {
            type: "string",
            description: "Categoria do produto",
            example: "Eletrônicos"
          }
        },
        required: ["name", "price", "category"]
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
              field: "name",
              reason: "Nome é obrigatório"
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

function SwaggerApiSecundaria() {
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
    <Layout title="API Secundária - Swagger UI" description="Documentação da API Secundária">
      <div style={{ padding: '20px' }}>
        <h1>API Secundária</h1>
        <p>Documentação interativa da API secundária usando Swagger UI.</p>

        <div style={{ marginTop: '20px' }}>
          <div id="swagger-ui"></div>
        </div>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2>📋 Informações da API</h2>
          <ul>
            <li><strong>Versão:</strong> 1.0.0</li>
            <li><strong>Especificação:</strong> OpenAPI 3.0</li>
            <li><strong>Base URL:</strong> <code>https://api-secundaria.exemplo.com/v1</code></li>
          </ul>

          <h3>🔧 Como Usar</h3>
          <ol>
            <li><strong>Explore os endpoints</strong> na interface acima</li>
            <li><strong>Veja os exemplos</strong> de requisição e resposta</li>
            <li><strong>Baixe o arquivo OpenAPI</strong> para usar em outras ferramentas</li>
          </ol>

          <h3>📁 Arquivo OpenAPI</h3>
          <p>
            <a href="/api/api-secundaria.yaml" download>Download do arquivo YAML</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SwaggerApiSecundaria;
