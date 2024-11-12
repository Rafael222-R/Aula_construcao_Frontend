const Pedido = require('../models/Pedido');
const Produto = require('../models/Produtos');

async function criar(req, res) {
    try {
        const { funcionario, cliente, produtos } = req.body;

        // Calcular o valor total do pedido
        let valorTotal = 0;

        for (const item of produtos) {
            const produto = await Produto.findById(item.produto); // Busca o produto pelo ID
            if (!produto) {
                return res.status(404).json({ mensagem: "Produto não encontrado!" });
            }
            valorTotal += item.quantidade * produto.preco;
        }

        // Criar o pedido com os dados recebidos
        const novoPedido = new Pedido({
            funcionario,
            cliente,
            produtos,
            total: valorTotal,
        });

        const pedidoCriado = await novoPedido.save();
        res.status(201).json(pedidoCriado);
    } catch (error) {
        console.error("Erro ao criar pedido:", error);
        res.status(500).json({ mensagem: "Erro ao criar o pedido" });
    }
}

async function buscarTodos(req, res) {
    try {
        const pedidos = await Pedido.find()
            .populate({
                path: 'funcionario',
                select: 'nome'
            })
            .populate({
                path: 'cliente',
                select: 'nome'
            })
            .populate({
                path: "produtos.produto", // Corrigido para "produtos.produto"
                select: "nome"
            });

        res.json(pedidos);
    } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
        res.status(500).json({ mensagem: "Erro ao buscar pedidos" });
    }
}

async function buscarPorID(req, res) {
    try {
        const pedido = await Pedido.findById(req.params.id)
            .populate({
                path: 'funcionario',
                select: 'nome'
            })
            .populate({
                path: 'cliente',
                select: 'nome'
            })
            .populate({
                path: "produtos.produto",
                select: "nome"
            });

        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao buscar pedido:", error);
        res.status(500).json({ mensagem: "Erro ao buscar pedido" });
    }
}

async function atualizar(req, res) {
    try {
        const pedidoAtualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pedidoAtualizado) {
            res.json({
                mensagem: "Pedido atualizado com sucesso!",
                pedidoAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao atualizar pedido:", error);
        res.status(500).json({ mensagem: "Erro ao atualizar pedido" });
    }
}

async function excluir(req, res) {
    try {
        const pedidoExcluido = await Pedido.findByIdAndDelete(req.params.id);
        if (pedidoExcluido) {
            res.json({
                mensagem: "Pedido excluído com sucesso!",
                pedidoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Pedido não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao excluir pedido:", error);
        res.status(500).json({ mensagem: "Erro ao excluir pedido" });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
