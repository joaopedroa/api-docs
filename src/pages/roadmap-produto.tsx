import React, { useState } from 'react';
import Layout from '@theme/Layout';

// Dados do roadmap - EDITE AQUI com os dados reais do seu produto
const roadmapData = [
  {
    id: 1,
    quarter: 'Q1 2024',
    year: 2024,
    title: 'MVP',
    status: 'completed',
    description: 'Desenvolvimento da base da plataforma',
    keyFeature: 'API de consulta funcional',
    sprints: [
      {
        id: 's1',
        name: 'Sprint 1',
        status: 'completed',
        deliveries: [
          'Estrutura base da API REST',
          'Configuração do ambiente de desenvolvimento',
          'Primeira versão do endpoint de consulta'
        ]
      },
      {
        id: 's2',
        name: 'Sprint 2',
        status: 'completed',
        deliveries: [
          'Sistema de autenticação OAuth 2.0',
          'Middleware de validação de tokens',
          'Documentação da autenticação'
        ]
      },
      {
        id: 's3',
        name: 'Sprint 3',
        status: 'completed',
        deliveries: [
          'Integração com bureau de crédito',
          'Tratamento de erros e exceções',
          'Logs de auditoria'
        ]
      },
      {
        id: 's4',
        name: 'Sprint 4',
        status: 'completed',
        deliveries: [
          'Documentação inicial da API',
          'Testes de integração',
          'Deploy em ambiente de produção'
        ]
      }
    ]
  },
  {
    id: 2,
    quarter: 'Q2 2024',
    year: 2024,
    title: 'Performance',
    status: 'completed',
    description: 'Otimização e melhorias de velocidade',
    keyFeature: '150ms tempo de resposta',
    sprints: [
      {
        id: 's5',
        name: 'Sprint 5',
        status: 'completed',
        deliveries: [
          'Implementação de cache Redis',
          'Configuração de TTL para dados',
          'Monitoramento de hit rate'
        ]
      },
      {
        id: 's6',
        name: 'Sprint 6',
        status: 'completed',
        deliveries: [
          'Configuração de CDN global',
          'Otimização de assets estáticos',
          'Compressão de respostas'
        ]
      },
      {
        id: 's7',
        name: 'Sprint 7',
        status: 'completed',
        deliveries: [
          'Otimização de consultas SQL',
          'Índices de banco de dados',
          'Query performance tuning'
        ]
      },
      {
        id: 's8',
        name: 'Sprint 8',
        status: 'completed',
        deliveries: [
          'Sistema de monitoramento de performance',
          'Alertas automáticos',
          'Dashboard de métricas'
        ]
      }
    ]
  },
  {
    id: 3,
    quarter: 'Q3 2024',
    year: 2024,
    title: 'IA',
    status: 'completed',
    description: 'Inteligência artificial para análise de risco',
    keyFeature: '92% precisão no scoring',
    sprints: [
      {
        id: 's9',
        name: 'Sprint 9',
        status: 'completed',
        deliveries: [
          'Modelos de machine learning básicos',
          'Pipeline de treinamento',
          'Validação cruzada dos modelos'
        ]
      },
      {
        id: 's10',
        name: 'Sprint 10',
        status: 'completed',
        deliveries: [
          'Sistema de detecção de fraudes',
          'Algoritmos de anomalia',
          'Integração com API principal'
        ]
      },
      {
        id: 's11',
        name: 'Sprint 11',
        status: 'completed',
        deliveries: [
          'Algoritmos de scoring personalizado',
          'Ajuste fino dos parâmetros',
          'Testes A/B com clientes'
        ]
      },
      {
        id: 's12',
        name: 'Sprint 12',
        status: 'completed',
        deliveries: [
          'Dashboard de métricas de IA',
          'Relatórios de performance',
          'Sistema de retreinamento automático'
        ]
      }
    ]
  },
  {
    id: 4,
    quarter: 'Q4 2024',
    year: 2024,
    title: 'Mobile',
    status: 'in-progress',
    description: 'Aplicativos móveis nativos',
    keyFeature: '75% concluído',
    sprints: [
      {
        id: 's13',
        name: 'Sprint 13',
        status: 'completed',
        deliveries: [
          'App iOS nativo - estrutura base',
          'Integração com API principal',
          'Interface de usuário básica'
        ]
      },
      {
        id: 's14',
        name: 'Sprint 14',
        status: 'in-progress',
        deliveries: [
          'App Android nativo - desenvolvimento',
          'Sincronização offline',
          'Push notifications básicas'
        ]
      },
      {
        id: 's15',
        name: 'Sprint 15',
        status: 'planned',
        deliveries: [
          'Sincronização em tempo real',
          'Biometria e autenticação',
          'Testes de usabilidade'
        ]
      },
      {
        id: 's16',
        name: 'Sprint 16',
        status: 'planned',
        deliveries: [
          'Notificações push avançadas',
          'Analytics de uso',
          'Deploy nas stores'
        ]
      }
    ]
  },
  {
    id: 5,
    quarter: 'Q1 2025',
    year: 2025,
    title: 'Global',
    status: 'planned',
    description: 'Expansão para mercados internacionais',
    keyFeature: '5 idiomas suportados',
    sprints: [
      {
        id: 's17',
        name: 'Sprint 17',
        status: 'planned',
        deliveries: [
          'Análise de mercados internacionais',
          'Estratégia de localização',
          'Seleção de idiomas prioritários'
        ]
      },
      {
        id: 's18',
        name: 'Sprint 18',
        status: 'planned',
        deliveries: [
          'Localização multi-idioma',
          'Sistema de tradução automática',
          'Testes de localização'
        ]
      },
      {
        id: 's19',
        name: 'Sprint 19',
        status: 'planned',
        deliveries: [
          'Compliance internacional (LGPD, GDPR)',
          'Auditoria de segurança',
          'Certificações necessárias'
        ]
      },
      {
        id: 's20',
        name: 'Sprint 20',
        status: 'planned',
        deliveries: [
          'Infraestrutura global AWS',
          'Parcerias estratégicas',
          'Lançamento beta internacional'
        ]
      }
    ]
  },
  {
    id: 6,
    quarter: 'Q2 2025',
    year: 2025,
    title: 'Dev Platform',
    status: 'planned',
    description: 'Plataforma completa para desenvolvedores',
    keyFeature: '10+ linguagens de programação',
    sprints: [
      {
        id: 's21',
        name: 'Sprint 21',
        status: 'planned',
        deliveries: [
          'APIs públicas avançadas',
          'Rate limiting e throttling',
          'Documentação interativa'
        ]
      },
      {
        id: 's22',
        name: 'Sprint 22',
        status: 'planned',
        deliveries: [
          'SDKs para JavaScript e Python',
          'Exemplos de integração',
          'Testes automatizados'
        ]
      },
      {
        id: 's23',
        name: 'Sprint 23',
        status: 'planned',
        deliveries: [
          'SDKs para Java e C#',
          'Sandbox de testes integrado',
          'Simulador de cenários'
        ]
      },
      {
        id: 's24',
        name: 'Sprint 24',
        status: 'planned',
        deliveries: [
          'Marketplace de integrações',
          'Sistema de reviews',
          'Programa de parceiros'
        ]
      }
    ]
  },
  {
    id: 7,
    quarter: 'Q3 2025',
    year: 2025,
    title: 'Blockchain',
    status: 'planned',
    description: 'Integração com tecnologias Web3',
    keyFeature: 'Contratos inteligentes',
    sprints: [
      {
        id: 's25',
        name: 'Sprint 25',
        status: 'planned',
        deliveries: [
          'Integração com Ethereum',
          'Configuração de wallets',
          'Testes de conectividade'
        ]
      },
      {
        id: 's26',
        name: 'Sprint 26',
        status: 'planned',
        deliveries: [
          'Tokens de crédito personalizados',
          'Smart contracts básicos',
          'Interface de gestão'
        ]
      },
      {
        id: 's27',
        name: 'Sprint 27',
        status: 'planned',
        deliveries: [
          'DeFi integrations',
          'Protocolos de liquidação',
          'Sistema de staking'
        ]
      },
      {
        id: 's28',
        name: 'Sprint 28',
        status: 'planned',
        deliveries: [
          'NFTs para certificados digitais',
          'Marketplace de NFTs',
          'Sistema de verificação'
        ]
      }
    ]
  },
  {
    id: 8,
    quarter: 'Q4 2025',
    year: 2025,
    title: 'IA Avançada',
    status: 'planned',
    description: 'Inteligência artificial generativa',
    keyFeature: '98% precisão na análise',
    sprints: [
      {
        id: 's29',
        name: 'Sprint 29',
        status: 'planned',
        deliveries: [
          'Chatbot inteligente avançado',
          'Processamento de linguagem natural',
          'Integração com LLMs'
        ]
      },
      {
        id: 's30',
        name: 'Sprint 30',
        status: 'planned',
        deliveries: [
          'Geração automática de relatórios',
          'Templates personalizáveis',
          'Sistema de agendamento'
        ]
      },
      {
        id: 's31',
        name: 'Sprint 31',
        status: 'planned',
        deliveries: [
          'Análise de sentimento em tempo real',
          'Monitoramento de redes sociais',
          'Alertas de tendências'
        ]
      },
      {
        id: 's32',
        name: 'Sprint 32',
        status: 'planned',
        deliveries: [
          'Recomendações em linguagem natural',
          'Sistema de aprendizado contínuo',
          'Otimização de modelos'
        ]
      }
    ]
  }
];

// Cores para diferentes status
const statusColors = {
  completed: '#27ae60',
  'in-progress': '#f39c12',
  planned: '#3498db'
};

// Ícones para diferentes status
const statusIcons = {
  completed: '✅',
  'in-progress': '🚀',
  planned: '📋'
};

function RoadmapProduto() {
  const [filter, setFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState(new Date().getFullYear());

  // Obter anos únicos dos dados
  const availableYears = [...new Set(roadmapData.map(item => item.year))].sort();

  const filteredData = roadmapData.filter(item => {
    const statusMatch = filter === 'all' || item.status === filter;
    const yearMatch = item.year === yearFilter;
    return statusMatch && yearMatch;
  });

  const completedItems = roadmapData.filter(item => item.status === 'completed' && item.year === yearFilter);
  const inProgressItems = roadmapData.filter(item => item.status === 'in-progress' && item.year === yearFilter);
  const plannedItems = roadmapData.filter(item => item.status === 'planned' && item.year === yearFilter);

  return (
    <Layout title="Roadmap do Produto" description="Planejamento estratégico e evolução do CreditCheck API">
      <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '15px', 
            color: '#2c3e50',
            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🗺️ Roadmap do Produto
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#7f8c8d', 
            maxWidth: '600px', 
            margin: '0 auto'
          }}>
            Evolução estratégica do CreditCheck API
          </p>
        </div>

        {/* Filtros */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          {/* Filtro por Ano */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#f8f9fa',
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #e9ecef'
          }}>
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600', 
              color: '#2c3e50' 
            }}>
              📅 Ano:
            </span>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(parseInt(e.target.value))}
              style={{
                padding: '6px 12px',
                border: 'none',
                borderRadius: '15px',
                backgroundColor: 'white',
                color: '#2c3e50',
                fontWeight: '500',
                fontSize: '0.9rem',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {availableYears.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Filtros de Status */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: filter === 'all' ? '#e67e22' : '#ecf0f1',
                color: filter === 'all' ? 'white' : '#2c3e50',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              Todos ({filteredData.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: filter === 'completed' ? '#27ae60' : '#ecf0f1',
                color: filter === 'completed' ? 'white' : '#2c3e50',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              Concluído ({completedItems.length})
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: filter === 'in-progress' ? '#f39c12' : '#ecf0f1',
                color: filter === 'in-progress' ? 'white' : '#2c3e50',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              Em Andamento ({inProgressItems.length})
            </button>
            <button
              onClick={() => setFilter('planned')}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: filter === 'planned' ? '#3498db' : '#ecf0f1',
                color: filter === 'planned' ? 'white' : '#2c3e50',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
            >
              Planejado ({plannedItems.length})
            </button>
          </div>
        </div>

        {/* Roadmap Horizontal */}
        <div style={{ 
          overflowX: 'auto',
          padding: '20px 0',
          marginBottom: '40px'
        }}>
          {filteredData.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '15px',
              border: '2px dashed #dee2e6'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📅</div>
              <h3 style={{ 
                color: '#6c757d', 
                marginBottom: '10px',
                fontSize: '1.5rem'
              }}>
                Nenhum item encontrado para {yearFilter}
              </h3>
              <p style={{ 
                color: '#6c757d', 
                fontSize: '1rem',
                margin: 0
              }}>
                Tente selecionar outro ano ou status
              </p>
            </div>
          ) : (
            /* Container dos cards */
            <div style={{
              display: 'flex',
              gap: '25px',
              minWidth: 'max-content',
              padding: '0 20px'
            }}>
              {filteredData.map((item, index) => (
              <div key={item.id} style={{ 
                flex: '0 0 320px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Card do roadmap */}
                <div style={{
                  backgroundColor: 'white',
                  border: '2px solid',
                  borderColor: statusColors[item.status],
                  borderRadius: '15px',
                  padding: '25px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  minHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}>
                  
                  {/* Header do card */}
                  <div style={{ marginBottom: '20px' }}>
                    {/* Quarter e Status */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <div style={{
                        backgroundColor: statusColors[item.status],
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {item.quarter}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '1.2rem'
                      }}>
                        {statusIcons[item.status]}
                      </div>
                    </div>

                    {/* Título */}
                    <h3 style={{ 
                      margin: '0 0 10px 0', 
                      color: '#2c3e50',
                      fontSize: '1.4rem',
                      fontWeight: '700'
                    }}>
                      {item.title}
                    </h3>

                    {/* Descrição */}
                    <p style={{ 
                      color: '#666', 
                      marginBottom: '20px',
                      fontSize: '0.95rem',
                      lineHeight: '1.5'
                    }}>
                      {item.description}
                    </p>

                    {/* Key Feature */}
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #e9ecef',
                      marginBottom: '20px'
                    }}>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#666',
                        marginBottom: '5px',
                        fontWeight: '500'
                      }}>
                        🎯 Destaque:
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: statusColors[item.status]
                      }}>
                        {item.keyFeature}
                      </div>
                    </div>
                  </div>

                  {/* Sprints */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      margin: '0 0 15px 0', 
                      color: '#2c3e50',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      🏃‍♂️ Sprints:
                    </h4>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '12px' 
                    }}>
                      {item.sprints.map((sprint, sprintIndex) => (
                        <div key={sprint.id} style={{
                          backgroundColor: '#f8f9fa',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef',
                          padding: '12px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#e9ecef';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                        }}>
                          {/* Header do Sprint */}
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px'
                          }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}>
                              <span style={{
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                color: '#2c3e50'
                              }}>
                                {sprint.name}
                              </span>
                              <span style={{
                                fontSize: '0.7rem',
                                color: statusColors[sprint.status],
                                fontWeight: '600'
                              }}>
                                {statusIcons[sprint.status]}
                              </span>
                            </div>
                            <div style={{
                              fontSize: '0.7rem',
                              color: statusColors[sprint.status],
                              fontWeight: '500',
                              textTransform: 'capitalize'
                            }}>
                              {sprint.status === 'completed' ? 'Concluído' : 
                               sprint.status === 'in-progress' ? 'Em Andamento' : 'Planejado'}
                            </div>
                          </div>
                          
                          {/* Entregas do Sprint */}
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px'
                          }}>
                            {sprint.deliveries.map((delivery, deliveryIndex) => (
                              <div key={deliveryIndex} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                fontSize: '0.75rem',
                                lineHeight: '1.3',
                                color: '#555'
                              }}>
                                <span style={{ 
                                  color: statusColors[sprint.status],
                                  marginRight: '6px',
                                  fontWeight: 'bold',
                                  fontSize: '0.8rem'
                                }}>•</span>
                                <span>{delivery}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>

        {/* Estatísticas Resumidas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px' 
        }}>
          <div style={{ 
            backgroundColor: '#27ae60', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(39, 174, 96, 0.3)'
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>{completedItems.length}</h3>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>Concluído</p>
          </div>
          <div style={{ 
            backgroundColor: '#f39c12', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)'
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>{inProgressItems.length}</h3>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>Em Andamento</p>
          </div>
          <div style={{ 
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>{plannedItems.length}</h3>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>Planejado</p>
          </div>
        </div>

        {/* Call to Action Simples */}
        <div style={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(230, 126, 34, 0.3)'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '15px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Quer acompanhar nossa evolução?
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            marginBottom: '20px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Acesse nossa documentação e comece a integrar hoje mesmo
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/docs/intro"
              style={{
                backgroundColor: 'white',
                color: '#e67e22',
                padding: '12px 24px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📖 Documentação
            </a>
            <a 
              href="/swagger-api-principal"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                border: '2px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🔧 API Reference
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RoadmapProduto;
