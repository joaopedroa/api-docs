import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

// Conteúdo YAML da API Principal
const apiSpec = {
  openapi: "3.0.0",
  info: {
    title: "Minha API",
    description: "Documentação da API do meu projeto",
    version: "1.0.0",
    contact: {
      name: "Suporte da API",
      email: "suporte@exemplo.com"
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  servers: [
    {
      url: "https://api.exemplo.com/v1",
      description: "Servidor de produção"
    },
    {
      url: "https://staging-api.exemplo.com/v1",
      description: "Servidor de staging"
    }
  ],
  paths: {
    "/users": {
      get: {
        tags: ["Usuários"],
        summary: "Listar usuários",
        description: "Retorna uma lista de todos os usuários",
        parameters: [
          {
            name: "page",
            in: "query",
            description: "Número da página",
            required: false,
            schema: {
              type: "integer",
              default: 1
            }
          },
          {
            name: "limit",
            in: "query",
            description: "Número de itens por página",
            required: false,
            schema: {
              type: "integer",
              default: 10
            }
          }
        ],
        responses: {
          "200": {
            description: "Lista de usuários retornada com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/User"
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
          },
          "500": {
            description: "Erro interno do servidor",
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
        tags: ["Usuários"],
        summary: "Criar usuário",
        description: "Cria um novo usuário",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateUserRequest"
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Usuário criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
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
          },
          "409": {
            description: "Usuário já existe",
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
    "/users/{id}": {
      get: {
        tags: ["Usuários"],
        summary: "Obter usuário por ID",
        description: "Retorna os dados de um usuário específico",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do usuário",
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": {
            description: "Usuário encontrado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },
          "404": {
            description: "Usuário não encontrado",
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
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID único do usuário",
            example: 1
          },
          name: {
            type: "string",
            description: "Nome completo do usuário",
            example: "João Silva"
          },
          email: {
            type: "string",
            format: "email",
            description: "Email do usuário",
            example: "joao@exemplo.com"
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Data de criação do usuário",
            example: "2023-01-01T00:00:00Z"
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Data da última atualização",
            example: "2023-01-01T00:00:00Z"
          }
        },
        required: ["id", "name", "email", "createdAt"]
      },
      CreateUserRequest: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Nome completo do usuário",
            example: "João Silva"
          },
          email: {
            type: "string",
            format: "email",
            description: "Email do usuário",
            example: "joao@exemplo.com"
          }
        },
        required: ["name", "email"]
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
              field: "email",
              reason: "Email já está em uso"
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

function SwaggerApiPrincipalSimple() {
  useEffect(() => {
    console.log('Componente montado, iniciando carregamento...');
    
    // Função para carregar scripts
    const loadScript = (src: string, id: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.onload = () => {
          console.log(`Script ${id} carregado`);
          resolve();
        };
        script.onerror = () => {
          console.error(`Erro ao carregar script ${id}`);
          reject();
        };
        document.head.appendChild(script);
      });
    };

    // Função para carregar CSS
    const loadCSS = (href: string, id: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.id = id;
        link.onload = () => {
          console.log(`CSS ${id} carregado`);
          resolve();
        };
        document.head.appendChild(link);
      });
    };

    // Função principal de carregamento
    const loadSwaggerUI = async () => {
      try {
        console.log('Carregando CSS...');
        await loadCSS('https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css', 'swagger-ui-css');
        
        console.log('Carregando scripts...');
        await loadScript('https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js', 'swagger-ui-bundle');
        await loadScript('https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js', 'swagger-ui-standalone');
        
        console.log('Inicializando Swagger UI...');
        
        // @ts-ignore
        if (window.SwaggerUIBundle && window.SwaggerUIStandalonePreset) {
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
              console.log('Swagger UI carregado com sucesso!');
              // Aplicar CSS para esconder elementos
              const style = document.createElement('style');
              style.textContent = `
                .download-url-wrapper { display: none !important; }
                .swagger-ui .topbar { display: none !important; }
                .swagger-ui .topbar-wrapper { display: none !important; }
              `;
              document.head.appendChild(style);
            }
          });
        } else {
          console.error('SwaggerUIBundle ou SwaggerUIStandalonePreset não disponível');
        }
      } catch (error) {
        console.error('Erro ao carregar Swagger UI:', error);
      }
    };

    loadSwaggerUI();
  }, []);

  return (
    <Layout title="API Principal - Swagger UI" description="Documentação da API Principal">
      <div style={{ padding: '20px' }}>
        <h1>API Principal</h1>
        <p>Documentação interativa da API principal usando Swagger UI.</p>

        <div style={{ marginTop: '20px' }}>
          <div id="swagger-ui" style={{ minHeight: '400px', border: '1px solid #ddd', borderRadius: '4px', padding: '20px' }}>
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Carregando Swagger UI...</p>
              <div style={{ marginTop: '20px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #3498db',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2>📋 Informações da API</h2>
          <ul>
            <li><strong>Versão:</strong> 1.0.0</li>
            <li><strong>Especificação:</strong> OpenAPI 3.0</li>
            <li><strong>Base URL:</strong> <code>https://api.exemplo.com/v1</code></li>
          </ul>

          <h3>🔧 Como Usar</h3>
          <ol>
            <li><strong>Explore os endpoints</strong> na interface acima</li>
            <li><strong>Veja os exemplos</strong> de requisição e resposta</li>
            <li><strong>Baixe o arquivo OpenAPI</strong> para usar em outras ferramentas</li>
          </ol>

          <h3>📁 Arquivo OpenAPI</h3>
          <p>
            <a href="/api/openapi.yaml" download>Download do arquivo YAML</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SwaggerApiPrincipalSimple;
