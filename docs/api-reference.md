---
sidebar_position: 2
---

# API Reference

Documentação completa da API com todos os endpoints disponíveis.

## 🔗 Base URL

```
https://api.exemplo.com/v1
```

## 🔐 Autenticação

Nossa API utiliza autenticação via Bearer Token (JWT). Inclua o token no header `Authorization`:

```bash
Authorization: Bearer SEU_TOKEN_AQUI
```

## 📋 Endpoints Disponíveis

### Usuários

#### GET /users

Lista todos os usuários com paginação.

**Parâmetros de Query:**
- `page` (integer, opcional): Número da página (padrão: 1)
- `limit` (integer, opcional): Itens por página (padrão: 10)

**Exemplo de Requisição:**
```bash
curl -X GET \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.exemplo.com/v1/users?page=1&limit=10"
```

**Resposta de Sucesso (200):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@exemplo.com",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

#### POST /users

Cria um novo usuário.

**Corpo da Requisição:**
```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com"
}
```

**Exemplo de Requisição:**
```bash
curl -X POST \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@exemplo.com"}' \
  https://api.exemplo.com/v1/users
```

**Resposta de Sucesso (201):**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "createdAt": "2023-01-01T00:00:00Z",
  "updatedAt": "2023-01-01T00:00:00Z"
}
```

#### GET /users/[id]

Obtém os dados de um usuário específico.

**Parâmetros de Path:**
- `id` (integer, obrigatório): ID único do usuário

**Exemplo de Requisição:**
```bash
curl -X GET \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  https://api.exemplo.com/v1/users/1
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "createdAt": "2023-01-01T00:00:00Z",
  "updatedAt": "2023-01-01T00:00:00Z"
}
```

#### PUT /users/[id]

Atualiza os dados de um usuário.

**Parâmetros de Path:**
- `id` (integer, obrigatório): ID único do usuário

**Corpo da Requisição:**
```json
{
  "name": "João Silva Santos",
  "email": "joao.santos@exemplo.com"
}
```

**Exemplo de Requisição:**
```bash
curl -X PUT \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva Santos", "email": "joao.santos@exemplo.com"}' \
  https://api.exemplo.com/v1/users/1
```

#### DELETE /users/[id]

Remove um usuário do sistema.

**Parâmetros de Path:**
- `id` (integer, obrigatório): ID único do usuário

**Exemplo de Requisição:**
```bash
curl -X DELETE \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  https://api.exemplo.com/v1/users/1
```

**Resposta de Sucesso (204):**
Sem conteúdo - usuário deletado com sucesso.

## 📊 Códigos de Status

| Código | Descrição |
|--------|-----------|
| 200 | Sucesso |
| 201 | Criado com sucesso |
| 400 | Dados inválidos |
| 401 | Não autorizado |
| 404 | Não encontrado |
| 409 | Conflito (ex: usuário já existe) |
| 500 | Erro interno do servidor |

## 🔧 Exemplos de Erro

### Erro de Validação (400)
```json
{
  "error": "VALIDATION_ERROR",
  "message": "Dados inválidos",
  "details": {
    "field": "email",
    "reason": "Email é obrigatório"
  }
}
```

### Usuário Não Encontrado (404)
```json
{
  "error": "NOT_FOUND",
  "message": "Usuário não encontrado",
  "details": {
    "id": 1,
    "reason": "Usuário com ID 1 não existe"
  }
}
```

### Conflito (409)
```json
{
  "error": "CONFLICT",
  "message": "Usuário já existe",
  "details": {
    "field": "email",
    "reason": "Email já está em uso"
  }
}
```

## 📝 Swagger/OpenAPI

Para uma documentação interativa completa, acesse:

- **Swagger UI**: [Ver documentação interativa](/api/openapi.yaml)
- **Arquivo OpenAPI**: [Download do arquivo YAML](/api/openapi.yaml)

## 🆘 Suporte

Precisa de ajuda? Entre em contato:

- **Email**: suporte@exemplo.com
- **GitHub**: [Issues](https://github.com/exemplo/api-docs/issues)
