const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pacienteRoutes = require('./src/routes/pacienteRoutes');

const app = express();
// Habilita CORS para todas as origens
app.use(cors());

app.use(express.json());

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://mpclaudiany:mpclaudiany@cluster0.ycknr.mongodb.net/pacienteDB', {
  serverSelectionTimeoutMS:300000
})
.then(() => console.log('Conectado ao MongoDB com sucesso!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Endpoint de saúde
app.get('/health', (req, res) => {
  res.status(200).json({ status: 200, message: 'Servidor ativo!' });
});

// Configurando rotas
app.use('/api', pacienteRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
