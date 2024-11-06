// server/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Permitir CORS para o frontend
app.use(cors());

// Conectar ao MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}??retryWrites=true&w=majority&appName=blackiesb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.log("Erro ao conectar ao MongoDB:", err));

// Definir uma rota para buscar dados
app.get('/api/dados', async (req, res) => {
    try {
        // Exemplo de buscar dados de uma coleção chamada "produtos"
        const Produtos = await produtos.find();
        res.json(Produtos);
    } catch (err) {
        res.status(500).send("Erro ao buscar dados");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
