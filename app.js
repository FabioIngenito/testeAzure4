const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal - Olá Mundo
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Olá Mundo - Node.js Express</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 50px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          p {
            font-size: 1.2em;
            margin: 20px 0;
          }
          .container {
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🌟 Olá Mundo! 🌟</h1>
          <p>Bem-vindo à aplicação Node.js com Express!</p>
          <p>Servidor rodando na porta ${PORT}</p>
          <p>Data: ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>
      </body>
    </html>
  `);
});

// Rota API simples
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Olá Mundo!',
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Rota com parâmetro
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`
    <html>
      <head>
        <title>Olá ${name}!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 50px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container {
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          }
          h1 {
            font-size: 3em;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>👋 Olá, ${name}!</h1>
          <p><a href="/" style="color: #fff; text-decoration: underline;">← Voltar</a></p>
        </div>
      </body>
    </html>
  `);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📡 API disponível em http://localhost:${PORT}/api/hello`);
  console.log(`👋 Teste com nome: http://localhost:${PORT}/hello/SeuNome`);
});

module.exports = app;
