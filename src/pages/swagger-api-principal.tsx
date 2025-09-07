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

function SwaggerApiPrincipal() {
  useEffect(() => {
    // Carregar CSS do Swagger UI
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css';
    document.head.appendChild(link);

    // Carregar JavaScript do Swagger UI Bundle
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js';

    // Carregar JavaScript do Swagger UI Standalone Preset
    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js';

    script1.onload = () => {
      script2.onload = () => {
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
            tryItOutEnabled: false, // Modo somente leitura
            supportedSubmitMethods: [], // Remove métodos de teste
            validatorUrl: null // Remove validação online
          });
        }
      };
    };

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
      if (document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, []);

  return (
    <Layout title="API Principal - Swagger UI" description="Documentação da API Principal">
      <div style={{ padding: '20px' }}>
        <h1>API Principal</h1>
        <p>Documentação interativa da API principal usando Swagger UI.</p>

        <div style={{ marginTop: '20px' }}>
          <div id="swagger-ui"></div>
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

export default SwaggerApiPrincipal;
