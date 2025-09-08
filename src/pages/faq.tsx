import React, { useState } from 'react';
import Layout from '@theme/Layout';

// Dados do FAQ - EDITE AQUI com as perguntas e respostas reais
const faqData = [
  {
    id: 1,
    question: 'O que é o CreditCheck API?',
    answer: 'O CreditCheck API é uma solução completa para consulta de contratos de crédito, oferecendo informações em tempo real sobre histórico de pagamentos, scores de risco e análise de crédito para clientes e instituições financeiras.'
  },
  {
    id: 2,
    question: 'Como funciona a autenticação?',
    answer: 'Utilizamos autenticação via API Key e OAuth 2.0. Cada cliente recebe uma chave única que deve ser incluída no header Authorization de todas as requisições. Para mais detalhes, consulte nossa documentação de autenticação.'
  },
  {
    id: 3,
    question: 'Qual é o tempo de resposta da API?',
    answer: 'Nossa API possui tempo de resposta médio de menos de 150ms, com 95% das consultas respondendo em menos de 200ms. Utilizamos cache distribuído e otimizações de banco de dados para garantir alta performance.'
  },
  {
    id: 4,
    question: 'Existe limite de requisições?',
    answer: 'Sim, temos diferentes planos com limites específicos: Plano Básico (1.000 req/hora), Plano Profissional (10.000 req/hora) e Plano Enterprise (100.000 req/hora). Para necessidades maiores, entre em contato conosco.'
  },
  {
    id: 5,
    question: 'Como integrar com minha aplicação?',
    answer: 'Oferecemos SDKs para JavaScript, Python, Java e .NET, além de documentação completa com exemplos de código. Nossa API REST é simples e segue padrões OpenAPI 3.0. O processo de integração leva em média 2-3 dias.'
  },
  {
    id: 6,
    question: 'Vocês oferecem suporte técnico?',
    answer: 'Sim! Oferecemos suporte técnico 24/7 para planos Profissional e Enterprise, com SLA de 4 horas para questões críticas. Também temos documentação completa, tutoriais e uma comunidade ativa de desenvolvedores.'
  },
  {
    id: 7,
    question: 'Como são protegidos os dados?',
    answer: 'Utilizamos criptografia AES-256 para dados em trânsito e em repouso, certificação ISO 27001, auditorias de segurança regulares e conformidade com LGPD. Todos os dados são armazenados em data centers certificados no Brasil.'
  },
  {
    id: 8,
    question: 'Os dados são compartilhados com terceiros?',
    answer: 'Não. Mantemos total confidencialidade dos dados dos clientes. Não vendemos, alugamos ou compartilhamos informações pessoais com terceiros, exceto quando exigido por lei ou com consentimento explícito do cliente.'
  },
  {
    id: 9,
    question: 'Quais são os planos disponíveis?',
    answer: 'Temos 3 planos principais: Básico (R$ 299/mês), Profissional (R$ 999/mês) e Enterprise (sob consulta). Todos incluem documentação completa, suporte básico e acesso a todas as funcionalidades da API.'
  },
  {
    id: 10,
    question: 'Existe período de teste gratuito?',
    answer: 'Sim! Oferecemos 30 dias de teste gratuito com acesso completo à API, incluindo 1.000 requisições por mês. Não é necessário cartão de crédito para iniciar o teste.'
  },
  {
    id: 11,
    question: 'A API está sempre disponível?',
    answer: 'Garantimos 99.9% de uptime com monitoramento 24/7. Temos redundância em múltiplos data centers e planos de contingência para garantir a disponibilidade do serviço.'
  },
  {
    id: 12,
    question: 'Posso testar a API antes de integrar?',
    answer: 'Sim! Oferecemos um ambiente de sandbox completo onde você pode testar todas as funcionalidades da API sem afetar dados reais. Acesse nossa documentação para obter as credenciais de teste.'
  }
];

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle item aberto/fechado
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Layout title="FAQ" description="Perguntas frequentes sobre o CreditCheck API">
      <div style={{ padding: '60px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '20px', 
            color: '#2c3e50',
            fontWeight: '300',
            letterSpacing: '1px'
          }}>
            Perguntas Frequentes
          </h1>
          <div style={{
            width: '80px',
            height: '3px',
            backgroundColor: '#e67e22',
            margin: '0 auto 20px auto'
          }}></div>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#7f8c8d', 
            margin: 0,
            fontWeight: '300'
          }}>
            Encontre respostas para as principais dúvidas sobre o CreditCheck API
          </p>
        </div>

        {/* Lista de FAQ */}
        <div style={{ marginBottom: '80px' }}>
          {faqData.map((item, index) => (
            <div key={item.id} style={{
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
              marginBottom: '1px',
              transition: 'all 0.3s ease'
            }}>
              {/* Pergunta */}
              <div 
                onClick={() => toggleItem(item.id)}
                style={{
                  padding: '30px 40px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: openItems.includes(item.id) ? '#f8f9fa' : 'white',
                  transition: 'all 0.3s ease',
                  borderLeft: openItems.includes(item.id) ? '4px solid #e67e22' : '4px solid transparent'
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: 0, 
                    color: '#2c3e50',
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    lineHeight: '1.4'
                  }}>
                    {item.question}
                  </h3>
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  color: '#7f8c8d',
                  transition: 'transform 0.3s ease',
                  transform: openItems.includes(item.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                  marginLeft: '20px'
                }}>
                  +
                </div>
              </div>

              {/* Resposta */}
              {openItems.includes(item.id) && (
                <div style={{
                  padding: '0 40px 30px 40px',
                  borderTop: '1px solid #e5e5e5',
                  backgroundColor: '#f8f9fa'
                }}>
                  <p style={{ 
                    color: '#495057', 
                    margin: 0,
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    fontWeight: '300'
                  }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '60px 40px',
          textAlign: 'center',
          border: '1px solid #e5e5e5'
        }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            marginBottom: '20px',
            margin: '0 0 20px 0',
            color: '#2c3e50',
            fontWeight: '300'
          }}>
            Não encontrou sua pergunta?
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '40px',
            margin: '0 0 40px 0',
            color: '#7f8c8d',
            fontWeight: '300'
          }}>
            Nossa equipe de suporte está pronta para ajudar
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/docs/intro"
              style={{
                backgroundColor: '#e67e22',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                fontWeight: '400',
                fontSize: '1rem',
                display: 'inline-block',
                border: '1px solid #e67e22',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#e67e22';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#e67e22';
                e.currentTarget.style.color = 'white';
              }}
            >
              Ver Documentação
            </a>
            <a 
              href="mailto:suporte@creditcheck.com"
              style={{
                backgroundColor: 'transparent',
                color: '#e67e22',
                padding: '15px 30px',
                textDecoration: 'none',
                fontWeight: '400',
                fontSize: '1rem',
                display: 'inline-block',
                border: '1px solid #e67e22',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#e67e22';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#e67e22';
              }}
            >
              Contatar Suporte
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FAQ;
