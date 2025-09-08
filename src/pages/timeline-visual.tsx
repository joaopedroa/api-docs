import React, { useState } from 'react';
import Layout from '@theme/Layout';

// Dados da timeline visual - EDITE AQUI com os dados reais do seu produto
const timelineData = [
  {
    id: 1,
    year: 2024,
    quarter: 'Q1',
    title: 'Fundação',
    description: 'Desenvolvimento da base da plataforma e funcionalidades essenciais',
    status: 'completed',
    position: 'above', // above ou below da linha
    icon: '🏗️',
    color: '#27ae60'
  },
  {
    id: 2,
    year: 2024,
    quarter: 'Q2',
    title: 'Performance',
    description: 'Otimização e melhorias de velocidade para máxima eficiência',
    status: 'completed',
    position: 'below',
    icon: '⚡',
    color: '#f39c12'
  },
  {
    id: 3,
    year: 2024,
    quarter: 'Q3',
    title: 'Inteligência',
    description: 'Implementação de IA para análise de risco e scoring',
    status: 'completed',
    position: 'above',
    icon: '🤖',
    color: '#3498db'
  },
  {
    id: 4,
    year: 2024,
    quarter: 'Q4',
    title: 'Mobile',
    description: 'Desenvolvimento de aplicativos móveis nativos',
    status: 'in-progress',
    position: 'below',
    icon: '📱',
    color: '#e74c3c'
  },
  {
    id: 5,
    year: 2025,
    quarter: 'Q1',
    title: 'Global',
    description: 'Expansão para mercados internacionais',
    status: 'planned',
    position: 'above',
    icon: '🌍',
    color: '#9b59b6'
  },
  {
    id: 6,
    year: 2025,
    quarter: 'Q2',
    title: 'Plataforma',
    description: 'Plataforma completa para desenvolvedores',
    status: 'planned',
    position: 'below',
    icon: '🔧',
    color: '#1abc9c'
  },
  {
    id: 7,
    year: 2025,
    quarter: 'Q3',
    title: 'Blockchain',
    description: 'Integração com tecnologias Web3 e DeFi',
    status: 'planned',
    position: 'above',
    icon: '⛓️',
    color: '#8e44ad'
  },
  {
    id: 8,
    year: 2025,
    quarter: 'Q4',
    title: 'IA Avançada',
    description: 'Inteligência artificial generativa e chatbots',
    status: 'planned',
    position: 'below',
    icon: '🧠',
    color: '#e67e22'
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

function TimelineVisual() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Obter anos únicos dos dados
  const availableYears = [...new Set(timelineData.map(item => item.year))].sort();

  const filteredData = timelineData.filter(item => item.year === selectedYear);

  const aboveItems = filteredData.filter(item => item.position === 'above');
  const belowItems = filteredData.filter(item => item.position === 'below');

  return (
    <Layout title="Timeline Visual" description="Timeline visual interativa do CreditCheck API">
      <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '20px', 
            color: '#2c3e50',
            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            🗺️ Timeline Visual
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#7f8c8d', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Acompanhe nossa jornada de inovação de forma visual e interativa
          </p>
        </div>

        {/* Filtro por Ano */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            backgroundColor: '#f8f9fa',
            padding: '15px 25px',
            borderRadius: '25px',
            border: '2px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <span style={{ 
              fontSize: '1.1rem', 
              fontWeight: '700', 
              color: '#2c3e50' 
            }}>
              📅 Ano:
            </span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '20px',
                backgroundColor: 'white',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minWidth: '120px'
              }}
            >
              {availableYears.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline Visual */}
        <div style={{ 
          position: 'relative',
          minHeight: '500px',
          marginBottom: '60px',
          padding: '40px 0'
        }}>
          {/* Linha horizontal central */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            right: '10%',
            height: '4px',
            background: 'linear-gradient(90deg, #e67e22 0%, #f39c12 50%, #d35400 100%)',
            borderRadius: '2px',
            transform: 'translateY(-50%)',
            boxShadow: '0 2px 8px rgba(230, 126, 34, 0.3)',
            zIndex: 1
          }}></div>

          {/* Container dos eventos */}
          <div style={{
            position: 'relative',
            height: '500px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            padding: '0 10%',
            alignItems: 'center'
          }}>
            {filteredData.map((item, index) => (
              <div key={item.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                height: '100%',
                justifyContent: item.position === 'above' ? 'flex-end' : 'flex-start'
              }}>
                {/* Linha vertical conectando ao evento */}
                <div style={{
                  position: 'absolute',
                  [item.position === 'above' ? 'bottom' : 'top']: '50%',
                  left: '50%',
                  width: '2px',
                  height: '80px',
                  backgroundColor: item.color,
                  transform: 'translateX(-50%)',
                  zIndex: 2
                }}></div>

                {/* Card do evento */}
                <div style={{
                  backgroundColor: 'white',
                  border: '2px solid',
                  borderColor: item.color,
                  borderRadius: '15px',
                  padding: '20px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '220px',
                  transform: hoveredItem === item.id ? 
                    (item.position === 'above' ? 'translateY(-8px) scale(1.02)' : 'translateY(8px) scale(1.02)') : 
                    'translateY(0)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  zIndex: 3,
                  marginBottom: item.position === 'above' ? '20px' : '0',
                  marginTop: item.position === 'below' ? '20px' : '0'
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}>
                  
                  {/* Ícone */}
                  <div style={{
                    fontSize: '2.2rem',
                    marginBottom: '12px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>

                  {/* Quarter */}
                  <div style={{
                    backgroundColor: item.color,
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}>
                    {item.quarter} {item.year}
                  </div>

                  {/* Título */}
                  <h3 style={{ 
                    margin: '0 0 6px 0', 
                    color: '#2c3e50',
                    fontSize: '1rem',
                    fontWeight: '700'
                  }}>
                    {item.title}
                  </h3>

                  {/* Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '0.9rem' }}>
                      {statusIcons[item.status]}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: statusColors[item.status],
                      fontWeight: '600',
                      textTransform: 'capitalize'
                    }}>
                      {item.status === 'completed' ? 'Concluído' : 
                       item.status === 'in-progress' ? 'Em Andamento' : 'Planejado'}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p style={{ 
                    color: '#666', 
                    margin: 0,
                    fontSize: '0.8rem',
                    lineHeight: '1.3'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '25px', 
          marginBottom: '50px' 
        }}>
          <div style={{ 
            backgroundColor: '#27ae60', 
            color: 'white', 
            padding: '25px', 
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(39, 174, 96, 0.3)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
              {timelineData.filter(item => item.status === 'completed').length}
            </h3>
            <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: '500' }}>Concluído</p>
          </div>
          <div style={{ 
            backgroundColor: '#f39c12', 
            color: 'white', 
            padding: '25px', 
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(243, 156, 18, 0.3)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
              {timelineData.filter(item => item.status === 'in-progress').length}
            </h3>
            <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: '500' }}>Em Andamento</p>
          </div>
          <div style={{ 
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '25px', 
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
              {timelineData.filter(item => item.status === 'planned').length}
            </h3>
            <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: '500' }}>Planejado</p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          padding: '50px',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center',
          marginTop: '60px',
          boxShadow: '0 15px 50px rgba(230, 126, 34, 0.3)'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Quer acompanhar nossa evolução?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '30px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Inscreva-se para receber atualizações sobre novos recursos e melhorias
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/docs/intro"
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
              📖 Começar Agora
            </a>
            <a 
              href="/swagger-api-principal"
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
              🔧 Ver API
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TimelineVisual;
