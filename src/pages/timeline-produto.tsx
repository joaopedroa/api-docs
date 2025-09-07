import React from 'react';
import Layout from '@theme/Layout';

// Dados da timeline do produto
const timelineData = [
  {
    id: 1,
    date: 'Janeiro 2024',
    title: 'Concepção do Projeto',
    description: 'Idealização e planejamento inicial do produto. Definição dos requisitos básicos e arquitetura inicial.',
    status: 'completed',
    category: 'planejamento',
    features: [
      'Definição da arquitetura do sistema',
      'Escolha das tecnologias (React, Node.js)',
      'Criação do backlog inicial'
    ]
  },
  {
    id: 2,
    date: 'Fevereiro 2024',
    title: 'Desenvolvimento MVP',
    description: 'Desenvolvimento da versão mínima viável com funcionalidades essenciais.',
    status: 'completed',
    category: 'desenvolvimento',
    features: [
      'Sistema de autenticação básico',
      'Interface principal do usuário',
      'Integração com banco de dados'
    ]
  },
  {
    id: 3,
    date: 'Março 2024',
    title: 'Primeira Versão Beta',
    description: 'Lançamento da versão beta para testes internos e validação com usuários piloto.',
    status: 'completed',
    category: 'testes',
    features: [
      'Testes de usabilidade',
      'Correção de bugs críticos',
      'Feedback dos usuários piloto'
    ]
  },
  {
    id: 4,
    date: 'Abril 2024',
    title: 'Integração de APIs',
    description: 'Implementação das integrações com APIs externas e serviços de terceiros.',
    status: 'completed',
    category: 'integracao',
    features: [
      'API de pagamentos',
      'Integração com serviços de email',
      'API de notificações push'
    ]
  },
  {
    id: 5,
    date: 'Maio 2024',
    title: 'Otimização de Performance',
    description: 'Melhorias de performance e otimização do sistema para suportar mais usuários.',
    status: 'completed',
    category: 'otimizacao',
    features: [
      'Cache inteligente',
      'Otimização de consultas',
      'CDN para assets estáticos'
    ]
  },
  {
    id: 6,
    date: 'Junho 2024',
    title: 'Lançamento Público',
    description: 'Lançamento oficial do produto para o público geral.',
    status: 'completed',
    category: 'lancamento',
    features: [
      'Campanha de marketing',
      'Suporte ao cliente',
      'Monitoramento em tempo real'
    ]
  },
  {
    id: 7,
    date: 'Julho 2024',
    title: 'Feedback e Melhorias',
    description: 'Coleta de feedback dos usuários e implementação de melhorias baseadas no uso real.',
    status: 'completed',
    category: 'melhorias',
    features: [
      'Análise de dados de uso',
      'Implementação de sugestões',
      'Melhorias na UX'
    ]
  },
  {
    id: 8,
    date: 'Agosto 2024',
    title: 'Nova Funcionalidade: Dashboard Avançado',
    description: 'Desenvolvimento e lançamento do dashboard avançado com analytics em tempo real.',
    status: 'completed',
    category: 'feature',
    features: [
      'Dashboard interativo',
      'Relatórios personalizáveis',
      'Exportação de dados'
    ]
  },
  {
    id: 9,
    date: 'Setembro 2024',
    title: 'Integração Mobile',
    description: 'Desenvolvimento e lançamento da versão mobile do produto.',
    status: 'completed',
    category: 'mobile',
    features: [
      'App mobile nativo',
      'Sincronização em tempo real',
      'Notificações push'
    ]
  },
  {
    id: 10,
    date: 'Outubro 2024',
    title: 'Segurança e Compliance',
    description: 'Implementação de medidas avançadas de segurança e conformidade com regulamentações.',
    status: 'completed',
    category: 'seguranca',
    features: [
      'Criptografia end-to-end',
      'Auditoria de segurança',
      'Conformidade LGPD'
    ]
  },
  {
    id: 11,
    date: 'Novembro 2024',
    title: 'IA e Automação',
    description: 'Integração de inteligência artificial para automação de processos e recomendações.',
    status: 'in-progress',
    category: 'ia',
    features: [
      'Chatbot inteligente',
      'Recomendações personalizadas',
      'Automação de workflows'
    ]
  },
  {
    id: 12,
    date: 'Dezembro 2024',
    title: 'Expansão Internacional',
    description: 'Preparação para expansão para mercados internacionais.',
    status: 'planned',
    category: 'expansao',
    features: [
      'Localização multi-idioma',
      'Conformidade internacional',
      'Infraestrutura global'
    ]
  },
  {
    id: 13,
    date: 'Q1 2025',
    title: 'Plataforma de Desenvolvedores',
    description: 'Lançamento da plataforma de desenvolvedores com APIs públicas e SDKs.',
    status: 'planned',
    category: 'dev-platform',
    features: [
      'APIs públicas',
      'SDKs para múltiplas linguagens',
      'Documentação interativa'
    ]
  }
];

// Cores para diferentes categorias
const categoryColors = {
  planejamento: '#3498db',
  desenvolvimento: '#2ecc71',
  testes: '#f39c12',
  integracao: '#9b59b6',
  otimizacao: '#1abc9c',
  lancamento: '#e74c3c',
  melhorias: '#34495e',
  feature: '#e67e22',
  mobile: '#8e44ad',
  seguranca: '#c0392b',
  ia: '#16a085',
  expansao: '#27ae60',
  'dev-platform': '#2980b9'
};

// Ícones para diferentes categorias
const categoryIcons = {
  planejamento: '📋',
  desenvolvimento: '💻',
  testes: '🧪',
  integracao: '🔗',
  otimizacao: '⚡',
  lancamento: '🚀',
  melhorias: '🔧',
  feature: '✨',
  mobile: '📱',
  seguranca: '🔒',
  ia: '🤖',
  expansao: '🌍',
  'dev-platform': '👨‍💻'
};

function TimelineProduto() {
  const completedItems = timelineData.filter(item => item.status === 'completed');
  const inProgressItems = timelineData.filter(item => item.status === 'in-progress');
  const plannedItems = timelineData.filter(item => item.status === 'planned');

  return (
    <Layout title="Timeline do Produto" description="Histórico completo do desenvolvimento do produto">
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#2c3e50' }}>
            📈 Timeline do Produto
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#7f8c8d', maxWidth: '600px', margin: '0 auto' }}>
            Acompanhe toda a jornada do nosso produto, desde a concepção até onde estamos hoje
          </p>
        </div>

        {/* Estatísticas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px', 
          marginBottom: '40px' 
        }}>
          <div style={{ 
            backgroundColor: '#2ecc71', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>{completedItems.length}</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>Concluído</p>
          </div>
          <div style={{ 
            backgroundColor: '#f39c12', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>{inProgressItems.length}</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>Em Andamento</p>
          </div>
          <div style={{ 
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>{plannedItems.length}</h3>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>Planejado</p>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Linha vertical */}
          <div style={{
            position: 'absolute',
            left: '30px',
            top: '0',
            bottom: '0',
            width: '4px',
            backgroundColor: '#e0e0e0',
            borderRadius: '2px'
          }}></div>

          {timelineData.map((item, index) => (
            <div key={item.id} style={{ 
              position: 'relative', 
              marginBottom: '40px',
              marginLeft: '60px'
            }}>
              {/* Ponto da timeline */}
              <div style={{
                position: 'absolute',
                left: '-45px',
                top: '20px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: item.status === 'completed' ? '#2ecc71' : 
                               item.status === 'in-progress' ? '#f39c12' : '#3498db',
                border: '4px solid white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                {item.status === 'completed' ? '✓' : 
                 item.status === 'in-progress' ? '⚡' : '○'}
              </div>

              {/* Card do item */}
              <div style={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: '25px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}>
                {/* Header do card */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '15px' 
                }}>
                  <span style={{ 
                    fontSize: '24px', 
                    marginRight: '10px' 
                  }}>
                    {categoryIcons[item.category]}
                  </span>
                  <div>
                    <h3 style={{ 
                      margin: '0 0 5px 0', 
                      color: '#2c3e50',
                      fontSize: '1.3rem'
                    }}>
                      {item.title}
                    </h3>
                    <span style={{
                      backgroundColor: categoryColors[item.category],
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Descrição */}
                <p style={{ 
                  color: '#555', 
                  marginBottom: '15px',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>

                {/* Features */}
                <div>
                  <h4 style={{ 
                    margin: '0 0 10px 0', 
                    color: '#2c3e50',
                    fontSize: '1rem'
                  }}>
                    Principais entregas:
                  </h4>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: '20px',
                    color: '#666'
                  }}>
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ marginBottom: '5px' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backgroundColor: item.status === 'completed' ? '#d4edda' : 
                                 item.status === 'in-progress' ? '#fff3cd' : '#d1ecf1',
                  color: item.status === 'completed' ? '#155724' : 
                         item.status === 'in-progress' ? '#856404' : '#0c5460'
                }}>
                  {item.status === 'completed' ? 'Concluído' : 
                   item.status === 'in-progress' ? 'Em Andamento' : 'Planejado'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo atual */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '30px',
          borderRadius: '10px',
          marginTop: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            color: '#2c3e50', 
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            🎯 Onde Estamos Agora
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>✅ Conquistas</h3>
              <ul style={{ color: '#555', lineHeight: '1.6' }}>
                <li>Produto lançado e funcionando</li>
                <li>Base de usuários ativa</li>
                <li>Integrações implementadas</li>
                <li>Segurança e compliance</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>🚀 Próximos Passos</h3>
              <ul style={{ color: '#555', lineHeight: '1.6' }}>
                <li>Implementação de IA</li>
                <li>Expansão internacional</li>
                <li>Plataforma de desenvolvedores</li>
                <li>Novas funcionalidades</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TimelineProduto;
