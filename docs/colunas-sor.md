# 📊 Documentação das Colunas SOR

Documentação detalhada de todas as colunas das tabelas das bases democratizadas SOR.

## 🏦 CREDIT_CONTRACTS

### **contracts** - Contratos de Crédito

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `contract_id` | VARCHAR(36) | ✅ | Identificador único do contrato (UUID) | `550e8400-e29b-41d4-a716-446655440000` |
| `customer_id` | VARCHAR(36) | ✅ | ID do cliente proprietário do contrato | `123e4567-e89b-12d3-a456-426614174000` |
| `institution_id` | VARCHAR(36) | ✅ | ID da instituição financeira | `inst_001_banco_brasil` |
| `product_type` | VARCHAR(50) | ✅ | Tipo do produto (PERSONAL_LOAN, CREDIT_CARD, etc.) | `PERSONAL_LOAN` |
| `contract_status` | VARCHAR(20) | ✅ | Status atual (ACTIVE, PAID_OFF, DEFAULTED, etc.) | `ACTIVE` |
| `principal_amount` | DECIMAL(15,2) | ✅ | Valor principal do empréstimo | `25000.00` |
| `interest_rate` | DECIMAL(5,4) | ✅ | Taxa de juros anual | `0.1299` |
| `term_months` | INTEGER | ✅ | Prazo em meses | `36` |
| `monthly_payment` | DECIMAL(15,2) | ✅ | Valor da parcela mensal | `850.50` |
| `start_date` | DATE | ✅ | Data de início do contrato | `2024-01-15` |
| `end_date` | DATE | ✅ | Data de vencimento | `2027-01-15` |
| `created_at` | TIMESTAMP | ✅ | Data de criação do registro | `2024-01-15 10:30:00` |
| `updated_at` | TIMESTAMP | ✅ | Data da última atualização | `2024-01-15 10:30:00` |

### **installments** - Parcelas e Vencimentos

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `installment_id` | VARCHAR(36) | ✅ | ID único da parcela | `inst_001_2024_01` |
| `contract_id` | VARCHAR(36) | ✅ | ID do contrato (FK) | `550e8400-e29b-41d4-a716-446655440000` |
| `installment_number` | INTEGER | ✅ | Número da parcela | `1` |
| `due_date` | DATE | ✅ | Data de vencimento | `2024-02-15` |
| `amount` | DECIMAL(15,2) | ✅ | Valor da parcela | `850.50` |
| `principal_amount` | DECIMAL(15,2) | ✅ | Valor principal da parcela | `650.00` |
| `interest_amount` | DECIMAL(15,2) | ✅ | Valor dos juros da parcela | `200.50` |
| `status` | VARCHAR(20) | ✅ | Status (PENDING, PAID, OVERDUE) | `PENDING` |
| `paid_date` | DATE | ❌ | Data do pagamento (se pago) | `2024-02-14` |
| `paid_amount` | DECIMAL(15,2) | ❌ | Valor efetivamente pago | `850.50` |

### **payments** - Histórico de Pagamentos

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `payment_id` | VARCHAR(36) | ✅ | ID único do pagamento | `pay_001_2024_02` |
| `contract_id` | VARCHAR(36) | ✅ | ID do contrato (FK) | `550e8400-e29b-41d4-a716-446655440000` |
| `installment_id` | VARCHAR(36) | ❌ | ID da parcela (se aplicável) | `inst_001_2024_01` |
| `payment_date` | DATE | ✅ | Data do pagamento | `2024-02-14` |
| `amount` | DECIMAL(15,2) | ✅ | Valor pago | `850.50` |
| `payment_method` | VARCHAR(50) | ✅ | Método de pagamento | `BANK_TRANSFER` |
| `transaction_id` | VARCHAR(100) | ❌ | ID da transação bancária | `TXN123456789` |
| `status` | VARCHAR(20) | ✅ | Status do pagamento | `CONFIRMED` |

## 👥 CUSTOMER_DATA

### **customers** - Dados dos Clientes

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `customer_id` | VARCHAR(36) | ✅ | ID único do cliente | `123e4567-e89b-12d3-a456-426614174000` |
| `cpf` | VARCHAR(11) | ✅ | CPF (apenas números) | `12345678901` |
| `name` | VARCHAR(255) | ✅ | Nome completo | `João da Silva Santos` |
| `birth_date` | DATE | ✅ | Data de nascimento | `1985-03-15` |
| `gender` | VARCHAR(10) | ✅ | Gênero | `MALE` |
| `marital_status` | VARCHAR(20) | ✅ | Estado civil | `MARRIED` |
| `occupation` | VARCHAR(100) | ✅ | Profissão | `ENGINEER` |
| `monthly_income` | DECIMAL(15,2) | ✅ | Renda mensal | `8000.00` |
| `email` | VARCHAR(255) | ✅ | Email principal | `joao.silva@email.com` |
| `phone` | VARCHAR(20) | ✅ | Telefone principal | `+5511999999999` |
| `created_at` | TIMESTAMP | ✅ | Data de cadastro | `2024-01-15 10:30:00` |

### **addresses** - Endereços

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `address_id` | VARCHAR(36) | ✅ | ID único do endereço | `addr_001_2024` |
| `customer_id` | VARCHAR(36) | ✅ | ID do cliente (FK) | `123e4567-e89b-12d3-a456-426614174000` |
| `address_type` | VARCHAR(20) | ✅ | Tipo (HOME, WORK, BILLING) | `HOME` |
| `street` | VARCHAR(255) | ✅ | Logradouro | `Rua das Flores, 123` |
| `neighborhood` | VARCHAR(100) | ✅ | Bairro | `Centro` |
| `city` | VARCHAR(100) | ✅ | Cidade | `São Paulo` |
| `state` | VARCHAR(2) | ✅ | Estado (UF) | `SP` |
| `zip_code` | VARCHAR(10) | ✅ | CEP | `01234567` |
| `country` | VARCHAR(50) | ✅ | País | `Brasil` |
| `is_primary` | BOOLEAN | ✅ | Endereço principal | `true` |

## 💳 TRANSACTIONS

### **transactions** - Transações Financeiras

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `transaction_id` | VARCHAR(36) | ✅ | ID único da transação | `txn_001_2024_02` |
| `customer_id` | VARCHAR(36) | ✅ | ID do cliente | `123e4567-e89b-12d3-a456-426614174000` |
| `contract_id` | VARCHAR(36) | ❌ | ID do contrato (se aplicável) | `550e8400-e29b-41d4-a716-446655440000` |
| `transaction_type` | VARCHAR(50) | ✅ | Tipo da transação | `PAYMENT` |
| `amount` | DECIMAL(15,2) | ✅ | Valor da transação | `850.50` |
| `currency` | VARCHAR(3) | ✅ | Moeda | `BRL` |
| `transaction_date` | TIMESTAMP | ✅ | Data/hora da transação | `2024-02-14 14:30:00` |
| `description` | VARCHAR(500) | ❌ | Descrição da transação | `Pagamento parcela 1` |
| `status` | VARCHAR(20) | ✅ | Status | `COMPLETED` |
| `external_id` | VARCHAR(100) | ❌ | ID externo | `BANK_TXN_123456` |

## 📈 RISK_ASSESSMENT

### **scores** - Scores de Crédito

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `score_id` | VARCHAR(36) | ✅ | ID único do score | `score_001_2024` |
| `customer_id` | VARCHAR(36) | ✅ | ID do cliente | `123e4567-e89b-12d3-a456-426614174000` |
| `score_type` | VARCHAR(50) | ✅ | Tipo do score | `FICO_SCORE` |
| `score_value` | INTEGER | ✅ | Valor do score (0-1000) | `750` |
| `score_band` | VARCHAR(20) | ✅ | Faixa do score | `GOOD` |
| `calculation_date` | DATE | ✅ | Data do cálculo | `2024-01-15` |
| `valid_until` | DATE | ✅ | Válido até | `2024-04-15` |
| `model_version` | VARCHAR(20) | ✅ | Versão do modelo | `v2.1` |

### **risk_factors** - Fatores de Risco

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `factor_id` | VARCHAR(36) | ✅ | ID único do fator | `factor_001_2024` |
| `customer_id` | VARCHAR(36) | ✅ | ID do cliente | `123e4567-e89b-12d3-a456-426614174000` |
| `factor_type` | VARCHAR(50) | ✅ | Tipo do fator | `PAYMENT_HISTORY` |
| `factor_value` | DECIMAL(10,4) | ✅ | Valor do fator | `0.85` |
| `weight` | DECIMAL(5,4) | ✅ | Peso no cálculo | `0.30` |
| `impact` | VARCHAR(20) | ✅ | Impacto (POSITIVE, NEGATIVE) | `POSITIVE` |
| `description` | VARCHAR(500) | ❌ | Descrição do fator | `Histórico de pagamentos em dia` |

## 🏢 INSTITUTIONAL

### **institutions** - Instituições Parceiras

| Coluna | Tipo | Obrigatório | Descrição | Exemplo |
|--------|------|-------------|-----------|---------|
| `institution_id` | VARCHAR(36) | ✅ | ID único da instituição | `inst_001_banco_brasil` |
| `name` | VARCHAR(255) | ✅ | Nome da instituição | `Banco do Brasil S.A.` |
| `cnpj` | VARCHAR(14) | ✅ | CNPJ | `00000000000191` |
| `type` | VARCHAR(50) | ✅ | Tipo (BANK, FINTECH, CREDIT_UNION) | `BANK` |
| `status` | VARCHAR(20) | ✅ | Status | `ACTIVE` |
| `api_endpoint` | VARCHAR(500) | ✅ | Endpoint da API | `https://api.bb.com.br/v1` |
| `created_at` | TIMESTAMP | ✅ | Data de cadastro | `2024-01-15 10:30:00` |

## 🔍 Consultas Úteis

### **Buscar Contratos por Cliente**
```sql
SELECT c.*, i.name as institution_name
FROM contracts c
JOIN institutions i ON c.institution_id = i.institution_id
WHERE c.customer_id = '123e4567-e89b-12d3-a456-426614174000'
AND c.contract_status = 'ACTIVE';
```

### **Histórico de Pagamentos**
```sql
SELECT p.*, i.installment_number, i.due_date
FROM payments p
LEFT JOIN installments i ON p.installment_id = i.installment_id
WHERE p.contract_id = '550e8400-e29b-41d4-a716-446655440000'
ORDER BY p.payment_date DESC;
```

### **Score Atual do Cliente**
```sql
SELECT s.*, c.name as customer_name
FROM scores s
JOIN customers c ON s.customer_id = c.customer_id
WHERE s.customer_id = '123e4567-e89b-12d3-a456-426614174000'
AND s.valid_until >= CURRENT_DATE
ORDER BY s.calculation_date DESC
LIMIT 1;
```

## 📞 Suporte

- **Bases SOR**: [Ver lista de bases](bases-sor)
- **API Reference**: [Swagger Documentation](/swagger-api-principal)
- **Suporte Técnico**: suporte@creditcheck.com.br
- **Dúvidas sobre Colunas**: dev@creditcheck.com.br

## 🔗 Links Relacionados

- [Bases Democratizadas SOR](bases-sor) - Lista completa de bases e tabelas
- [API Reference](/swagger-api-principal) - Documentação completa da API
- [Guia de Integração](/docs/intro) - Como integrar com nossa API
