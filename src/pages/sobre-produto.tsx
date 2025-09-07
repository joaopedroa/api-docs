import React from 'react';
import Layout from '@theme/Layout';

function SobreProduto() {
  return (
    <Layout title="Sobre o CreditCheck API" description="Conheça nossa solução de consulta de contratos de crédito">
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 50%, #d35400 100%)',
          padding: '60px 40px',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏦💳</div>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            CreditCheck API
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '800px', 
            margin: '0 auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            A solução mais completa e segura para consulta e análise de contratos de crédito no Brasil
          </p>
        </div>

        {/* Problema e Solução */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '30px',
          marginBottom: '50px'
        }}>
          <div style={{
            backgroundColor: '#fff5f5',
            padding: '30px',
            borderRadius: '10px',
            border: '1px solid #fed7d7'
          }}>
            <h2 style={{ color: '#e53e3e', marginBottom: '20px' }}>🚨 O Problema</h2>
            <ul style={{ color: '#555', lineHeight: '1.8' }}>
              <li>Consultas manuais demoradas e propensas a erros</li>
              <li>Falta de padronização entre diferentes fontes de dados</li>
              <li>Dificuldade para analisar grandes volumes de contratos</li>
              <li>Riscos de compliance e segurança de dados</li>
              <li>Integração complexa com sistemas legados</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#f0fff4',
            padding: '30px',
            borderRadius: '10px',
            border: '1px solid #c6f6d5'
          }}>
            <h2 style={{ color: '#38a169', marginBottom: '20px' }}>✅ Nossa Solução</h2>
            <ul style={{ color: '#555', lineHeight: '1.8' }}>
              <li>API unificada para consulta de contratos</li>
              <li>Resposta em tempo real (200ms ou menos)</li>
              <li>Análise inteligente com IA</li>
              <li>Compliance total com LGPD</li>
              <li>Integração simples e documentada</li>
            </ul>
          </div>
        </div>

        {/* Funcionalidades Principais */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            color: '#2c3e50',
            fontSize: '2.5rem'
          }}>
            🚀 Funcionalidades Principais
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '25px' 
          }}>
            {[
              {
                icon: '🔍',
                title: 'Consulta Instantânea',
                description: 'Acesse informações de contratos em tempo real com nossa API otimizada'
              },
              {
                icon: '🤖',
                title: 'Análise com IA',
                description: 'Inteligência artificial para análise de risco e scoring de crédito'
              },
              {
                icon: '🔒',
                title: 'Segurança Total',
                description: 'Criptografia end-to-end e compliance com LGPD garantidos'
              },
              {
                icon: '📊',
                title: 'Relatórios Detalhados',
                description: 'Dashboards e relatórios personalizáveis para análise de dados'
              },
              {
                icon: '🔗',
                title: 'Integração Simples',
                description: 'SDKs para múltiplas linguagens e documentação interativa'
              },
              {
                icon: '⚡',
                title: 'Alta Performance',
                description: 'Suporte a milhões de consultas com 99.9% de uptime'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  fontSize: '1.3rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas e Números */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '15px',
          marginBottom: '50px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            color: '#2c3e50',
            fontSize: '2.5rem'
          }}>
            📈 Nossos Números
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              { number: '2M+', label: 'Contratos Consultáveis' },
              { number: '< 200ms', label: 'Tempo de Resposta' },
              { number: '99.9%', label: 'Uptime' },
              { number: '50+', label: 'Instituições Parceiras' },
              { number: '24/7', label: 'Suporte Técnico' },
              { number: '100%', label: 'Compliance LGPD' }
            ].map((metric, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#e67e22',
                  marginBottom: '10px'
                }}>
                  {metric.number}
                </div>
                <div style={{ 
                  color: '#666',
                  fontSize: '1.1rem'
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Casos de Uso */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            color: '#2c3e50',
            fontSize: '2.5rem'
          }}>
            💼 Casos de Uso
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {[
              {
                title: 'Instituições Financeiras',
                description: 'Bancos e fintechs utilizam nossa API para consultar contratos de crédito de clientes em tempo real, agilizando processos de análise de risco e aprovação de crédito.',
                icon: '🏦'
              },
              {
                title: 'Corporações',
                description: 'Empresas de grande porte integram nossa solução para monitorar contratos de fornecedores e parceiros, garantindo compliance e reduzindo riscos.',
                icon: '🏢'
              },
              {
                title: 'Consultorias',
                description: 'Consultorias financeiras e de compliance utilizam nossa API para auditorias e análises detalhadas de contratos de crédito de seus clientes.',
                icon: '📋'
              },
              {
                title: 'Fintechs',
                description: 'Startups do setor financeiro aproveitam nossa infraestrutura robusta para oferecer serviços de consulta de crédito sem precisar construir do zero.',
                icon: '🚀'
              }
            ].map((useCase, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                  {useCase.icon}
                </div>
                <h3 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  fontSize: '1.4rem'
                }}>
                  {useCase.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          padding: '50px',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Pronto para começar?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '30px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Integre nossa API em minutos e comece a consultar contratos de crédito hoje mesmo
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/swagger-api-principal"
              style={{
                backgroundColor: 'white',
                color: '#e67e22',
                padding: '15px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
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
              🔧 Ver Documentação da API
            </a>
            <a 
              href="/timeline-produto"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
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
              📈 Conheça Nossa História
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SobreProduto;
