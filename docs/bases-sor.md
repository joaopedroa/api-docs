# 🗄️ Bases Democratizadas SOR

Documentação completa das bases de dados Source of Record (SOR) disponíveis para consulta através do CreditCheck API.

## 📋 Visão Geral

As bases democratizadas SOR são fontes de dados centralizadas que contêm informações estruturadas sobre contratos de crédito, clientes e transações financeiras. Todas as bases seguem padrões de segurança e compliance com LGPD.

## 🔐 Informações de Acesso

### **Autenticação Necessária**
- **Token OAuth 2.0** obrigatório
- **Escopo**: `sor:read` para consultas
- **Rate Limit**: 1000 requests/hora por usuário

### **Endpoints Base**
```
GET /api/v1/sor/{database}/{table}
GET /api/v1/sor/{database}/{table}/{id}
```

## 📊 Bases Disponíveis

### 🏦 **CREDIT_CONTRACTS**
**Descrição**: Base principal de contratos de crédito ativos e históricos.

| Tabela | Descrição | Acesso Necessário | Última Atualização |
|--------|-----------|-------------------|-------------------|
| `contracts` | Contratos de crédito principais | `contracts:read` | 2024-01-15 |
| `installments` | Parcelas e vencimentos | `contracts:read` | 2024-01-15 |
| `payments` | Histórico de pagamentos | `payments:read` | 2024-01-15 |
| `guarantees` | Garantias e avais | `contracts:read` | 2024-01-15 |

**Conexão**: `sor-credit-contracts.creditcheck.com.br:5432`

---

### 👥 **CUSTOMER_DATA**
**Descrição**: Dados demográficos e comportamentais dos clientes.

| Tabela | Descrição | Acesso Necessário | Última Atualização |
|--------|-----------|-------------------|-------------------|
| `customers` | Dados pessoais dos clientes | `customers:read` | 2024-01-15 |
| `addresses` | Endereços e contatos | `customers:read` | 2024-01-15 |
| `documents` | Documentos e identificações | `customers:read` | 2024-01-15 |
| `preferences` | Preferências e configurações | `customers:read` | 2024-01-15 |

**Conexão**: `sor-customer-data.creditcheck.com.br:5432`

---

### 💳 **TRANSACTIONS**
**Descrição**: Histórico de transações e movimentações financeiras.

| Tabela | Descrição | Acesso Necessário | Última Atualização |
|--------|-----------|-------------------|-------------------|
| `transactions` | Transações financeiras | `transactions:read` | 2024-01-15 |
| `card_usage` | Uso de cartões de crédito | `transactions:read` | 2024-01-15 |
| `withdrawals` | Saques e movimentações | `transactions:read` | 2024-01-15 |
| `transfers` | Transferências entre contas | `transactions:read` | 2024-01-15 |

**Conexão**: `sor-transactions.creditcheck.com.br:5432`

---

### 📈 **RISK_ASSESSMENT**
**Descrição**: Dados de análise de risco e scoring.

| Tabela | Descrição | Acesso Necessário | Última Atualização |
|--------|-----------|-------------------|-------------------|
| `scores` | Scores de crédito | `risk:read` | 2024-01-15 |
| `risk_factors` | Fatores de risco | `risk:read` | 2024-01-15 |
| `alerts` | Alertas de risco | `risk:read` | 2024-01-15 |
| `models` | Modelos de scoring | `risk:read` | 2024-01-15 |

**Conexão**: `sor-risk-assessment.creditcheck.com.br:5432`

---

### 🏢 **INSTITUTIONAL**
**Descrição**: Dados institucionais e de parceiros.

| Tabela | Descrição | Acesso Necessário | Última Atualização |
|--------|-----------|-------------------|-------------------|
| `institutions` | Instituições parceiras | `institutional:read` | 2024-01-15 |
| `branches` | Agências e filiais | `institutional:read` | 2024-01-15 |
| `products` | Produtos financeiros | `institutional:read` | 2024-01-15 |
| `rates` | Taxas e tarifas | `institutional:read` | 2024-01-15 |

**Conexão**: `sor-institutional.creditcheck.com.br:5432`

## 🔧 Como Acessar

### **1. Obter Credenciais**
```bash
curl -X POST https://api.creditcheck.com.br/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "seu_client_id",
    "client_secret": "seu_client_secret",
    "grant_type": "client_credentials",
    "scope": "sor:read"
  }'
```

### **2. Consultar Tabela**
```bash
curl -X GET "https://api.creditcheck.com.br/api/v1/sor/CREDIT_CONTRACTS/contracts" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Accept: application/json"
```

### **3. Filtrar Dados**
```bash
curl -X GET "https://api.creditcheck.com.br/api/v1/sor/CREDIT_CONTRACTS/contracts?status=active&limit=100" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Accept: application/json"
```

## 📋 Escopos de Acesso

| Escopo | Descrição | Tabelas Incluídas |
|--------|-----------|-------------------|
| `contracts:read` | Leitura de contratos | contracts, installments, guarantees |
| `payments:read` | Leitura de pagamentos | payments, transactions |
| `customers:read` | Leitura de clientes | customers, addresses, documents |
| `transactions:read` | Leitura de transações | transactions, card_usage, withdrawals |
| `risk:read` | Leitura de risco | scores, risk_factors, alerts |
| `institutional:read` | Leitura institucional | institutions, branches, products |

## 🔒 Segurança e Compliance

### **Criptografia**
- **Em trânsito**: TLS 1.3
- **Em repouso**: AES-256
- **Chaves**: Rotação automática a cada 90 dias

### **Auditoria**
- **Logs**: Todas as consultas são logadas
- **Retenção**: 7 anos para compliance
- **Monitoramento**: 24/7 com alertas em tempo real

### **LGPD**
- **Anonimização**: Dados pessoais são anonimizados
- **Consentimento**: Baseado em consentimento explícito
- **Direito ao esquecimento**: Implementado via API

## 📞 Suporte

- **Documentação de Colunas**: [Ver documentação detalhada](colunas-sor)
- **API Reference**: [Swagger Documentation](/swagger-api-principal)
- **Suporte Técnico**: suporte@creditcheck.com.br
- **Status**: [status.creditcheck.com.br](https://status.creditcheck.com.br)

## 🔗 Links Relacionados

- [Documentação das Colunas](colunas-sor) - Detalhes de cada coluna das tabelas
- [API Reference](/swagger-api-principal) - Documentação completa da API
- [Guia de Integração](/docs/intro) - Como integrar com nossa API
