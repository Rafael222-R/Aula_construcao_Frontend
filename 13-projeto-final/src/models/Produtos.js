const mongoose = require("mongoose")

const schema = new mongoose.Schema (
    {

    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        require: false
    },
    codigo_barras : {
        type: String,
        require: true
    },
    peso: {
        type : Number,
        require: true
    },
    preco : {
        type : Number,
        require: true
    },
    categoria : {
        type : String,
        require: true
    },
    fabricante : {
        type : String,
        require: true
    },
    foto : {
        type : String,
        require: true
    }
}, { timestamps: true})


const Produto = mongoose.model('Produto', schema)




module.exports = Produto