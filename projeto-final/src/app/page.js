'use client'
import Pagina from '@/components/Pagina';
// client/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Fazendo a requisição GET para o backend
        fetch("/api/dados")
            .then(response => response.json())
            .then(data => setProdutos(data))
            .catch(err => console.error("Erro ao buscar produtos:", err));
    }, []);

    return (

      <Pagina titulo={'Lista de Produtos'}>


        
            
            <ul>
                {produtos.map(produto => (
                    <li key={produto._id}>
                        {produto.nome} - R${produto.preco}
                    </li>
                ))}
            </ul>
        

        </Pagina>
    );
}

export default App;
