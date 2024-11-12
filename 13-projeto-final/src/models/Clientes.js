const mongoose = require('mongoose')

const schema = new mongoose.Schema (

    { 
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        rg: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: String,
            required: true
        },
        status_cliente: {
            type: String,
            required: true
        },
        endereco: {
            cep: String,
            uf: String,
            localidade: String,
            bairro: String,
            logradouro: String,
            numero: String,
            complemento: String
        },
       

    }, { timestamps: true})   

const Cliente = mongoose.model("cliente", schema)

module.exports = Cliente