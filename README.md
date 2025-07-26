# Aplicação Olá Mundo - Node.js Express

Uma aplicação simples em Node.js usando Express para demonstrar o básico de rotas e servidor web.

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar a aplicação
```bash
# Modo normal
npm start

# Modo desenvolvimento (com nodemon)
npm run dev
```

## 📋 Rotas disponíveis

- **GET /**: Página principal com "Olá Mundo"
- **GET /api/hello**: API JSON com mensagem
- **GET /hello/:name**: Página personalizada com nome

## 🌐 Exemplos de uso

Após iniciar o servidor, acesse:

- http://localhost:3000 - Página principal
- http://localhost:3000/api/hello - API JSON
- http://localhost:3000/hello/Maria - Saudação personalizada

## 📦 Dependências

- **express**: Framework web para Node.js
- **nodemon**: Ferramenta de desenvolvimento (reinicia automaticamente)

## 🎯 Funcionalidades

- ✅ Servidor Express básico
- ✅ Rotas estáticas e dinâmicas
- ✅ Interface web responsiva
- ✅ API JSON
- ✅ Estilização CSS moderna
- ✅ Parâmetros de rota
