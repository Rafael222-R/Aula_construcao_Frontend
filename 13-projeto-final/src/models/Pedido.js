const mongoose = require('mongoose')

const schema = new mongoose.Schema(
{
    funcionario: {
        type: mongoose.Types.ObjectId,
        ref: 'funcionario',
        required: true
    },
    cliente: {
        type: mongoose.Types.ObjectId,
        ref:'cliente',
        required: true
    },
  
    produtos: [{
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto', // Referência para o modelo Produto
            required: true
        },
        quantidade: {
            type: Number,
            required: true
        },
        preco: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }

        // quantidade: {
        //     type: Number,
        //     required: true,
        //     min: 1
        // }
   
//    valorTotal: {
//     type: Number,
//     required: true
//    }

   
} , {timestamps : true})

const Pedido = mongoose.model('pedido', schema)

module.exports = Pedido
