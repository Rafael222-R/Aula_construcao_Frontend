const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required:true
    },
    descricao: {
        type: String,
        require: true
    },
    salario: {
        type: String,
        required: true
    },
    habilidade:{
        type: String,
        require: true
    },
    status_cargo: {

        type: String,
        required:true
    },
    departamento: {

        type: String,
        required:true
    },
    nivel_hierarquico: {

        type: String,
        required:true
    },
    data_criacao: {

        type: String,
        required:true
    }
}, {timestamps: true})
 
const Cargo = mongoose.model('cargo', schema)

module.exports = Cargo