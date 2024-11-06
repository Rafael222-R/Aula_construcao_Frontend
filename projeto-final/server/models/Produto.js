// server/models/Produto.js
const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
});

const Produtos = mongoose.model('Produtos', produtosSchema);

module.exports = Produtos;
