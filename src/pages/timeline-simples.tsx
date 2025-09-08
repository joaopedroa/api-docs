import React, { useState } from 'react';
import Layout from '@theme/Layout';

// Dados da timeline simples - EDITE AQUI com os dados reais do seu produto
const timelineData = [
  {
    id: 1,
    year: 2024,
    quarter: 'Q1',
    title: 'Fundação',
    description: 'API básica e autenticação',
    status: 'completed',
    color: '#27ae60'
  },
  {
    id: 2,
    year: 2024,
    quarter: 'Q2',
    title: 'Performance',
    description: 'Cache e otimizações',
    status: 'completed',
    color: '#f39c12'
  },
  {
    id: 3,
    year: 2024,
    quarter: 'Q3',
    title: 'IA',
    description: 'Scoring e detecção de fraudes',
    status: 'completed',
    color: '#3498db'
  },
  {
    id: 4,
    year: 2024,
    quarter: 'Q4',
    title: 'Mobile',
    description: 'Apps iOS e Android',
    status: 'in-progress',
    color: '#e74c3c'
  },
  {
    id: 5,
    year: 2025,
    quarter: 'Q1',
    title: 'Global',
    description: 'Expansão internacional',
    status: 'planned',
    color: '#9b59b6'
  },
  {
    id: 6,
    year: 2025,
    quarter: 'Q2',
    title: 'Plataforma',
    description: 'APIs públicas e SDKs',
    status: 'planned',
    color: '#1abc9c'
  }
];

function TimelineSimples() {
  const [selectedYear, setSelectedYear] = useState(2024);

  // Obter anos únicos dos dados
  const availableYears = [...new Set(timelineData.map(item => item.year))].sort();

  const filteredData = timelineData.filter(item => item.year === selectedYear);

  return (
    <Layout title="Timeline Simples" description="Timeline horizontal simples do CreditCheck API">
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '15px', 
            color: '#2c3e50',
            fontWeight: '700'
          }}>
            📈 Timeline do Produto
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#7f8c8d', 
            margin: 0
          }}>
            Evolução macro do CreditCheck API
          </p>
        </div>

        {/* Filtro por Ano */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '40px'
        }}>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            style={{
              padding: '12px 20px',
              border: '2px solid #e9ecef',
              borderRadius: '25px',
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

        {/* Timeline Horizontal Simples */}
        <div style={{ 
          position: 'relative',
          marginBottom: '60px'
        }}>
          {/* Linha horizontal */}
          <div style={{
            height: '4px',
            background: 'linear-gradient(90deg, #e67e22 0%, #f39c12 100%)',
            borderRadius: '2px',
            margin: '40px 0'
          }}></div>

          {/* Container dos itens */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
          }}>
            {filteredData.map((item, index) => (
              <div key={item.id} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                position: 'relative'
              }}>
                {/* Ponto na linha */}
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: item.color,
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  position: 'absolute',
                  top: '-6px',
                  zIndex: 2
                }}></div>

                {/* Card do item */}
                <div style={{
                  backgroundColor: 'white',
                  border: '2px solid',
                  borderColor: item.color,
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: '180px',
                  marginTop: '20px'
                }}>
                  {/* Quarter */}
                  <div style={{
                    backgroundColor: item.color,
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    marginBottom: '8px',
                    display: 'inline-block'
                  }}>
                    {item.quarter}
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
                    fontSize: '0.8rem',
                    color: item.status === 'completed' ? '#27ae60' : 
                           item.status === 'in-progress' ? '#f39c12' : '#3498db',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {item.status === 'completed' ? '✅ Concluído' : 
                     item.status === 'in-progress' ? '🚀 Em Andamento' : '📋 Planejado'}
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

        {/* Estatísticas Simples */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px', 
          marginBottom: '40px' 
        }}>
          <div style={{ 
            backgroundColor: '#27ae60', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>
              {timelineData.filter(item => item.status === 'completed').length}
            </h3>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>Concluído</p>
          </div>
          <div style={{ 
            backgroundColor: '#f39c12', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>
              {timelineData.filter(item => item.status === 'in-progress').length}
            </h3>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>Em Andamento</p>
          </div>
          <div style={{ 
            backgroundColor: '#3498db', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '2rem' }}>
              {timelineData.filter(item => item.status === 'planned').length}
            </h3>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>Planejado</p>
          </div>
        </div>

        {/* Call to Action Simples */}
        <div style={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '15px',
            margin: '0 0 15px 0'
          }}>
            Quer saber mais sobre nossa evolução?
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            marginBottom: '20px',
            margin: '0 0 20px 0'
          }}>
            Acesse nossa documentação completa
          </p>
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
              display: 'inline-block'
            }}
          >
            📖 Ver Documentação
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default TimelineSimples;
