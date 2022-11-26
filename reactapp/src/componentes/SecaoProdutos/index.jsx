import React from "react";

import './produtos.css'

export default function SecaoProdutos(){
    return(
        <div className="secao secao-produtos">
            <div className="topo-produtos">
                <h2>NOSSOS PRODUTOS</h2>
                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>
            </div>

            <div className="cards-produtos">
                <div className="card">
                    <h3>Óculos de grau</h3>  
                    <img src="../../../public/assets/imagens/oculos01.png" alt="" />
                    <p>R$ 750,00</p>
                </div>

                <div className="card">
                    <h3>Óculos transition</h3>  
                    <img src="../../../public/assets/imagens/oculos02.png" alt="" />
                    <p>R$ 700,00</p>
                </div>

                <div className="card">
                    <h3>Óculos de sol</h3>  
                    <img src="../../../public/assets/imagens/oculos03.png" alt="" />
                    <p>R$ 500,00</p>
                </div>

                <div className="card">
                    <h3>Óculos infantil</h3>  
                    <img src="../../../public/assets/imagens/oculos04.png" alt="" />
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div className="descricao-produtos">
                <p>Todos nossos produtos incluem</p>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
)
}