import React from "react";

import './sobre.css'

export default function SecaoSobre(){
    return(
        <div className="secao-sobre">
            <div className="secao">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                    Nossas Filiais
                    Hoje temos mais de 20 filiais pelo Brasil e na América
                    Atendimento flexível
                    Nossa equipe possui é treinada para te atender
                </p>
                <div className="box-sobre">
                    <div className="card-sobre">
                        <img src="../../../public/assets/imagens/loja.png" alt="" />
                    </div>
                    <div className="card-sobre">
                        <h4>NOSSAS FILIAIS</h4>
                        <p>
                            Hoje temos mais de 20 filiais pelo Brasil e pela América
                        </p>
                    </div>
                
                    <div className="card-sobre">
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe possui treinamento para de atender</p>
                    </div>

                    <div className="card-sobre">
                        <img src="../../../public/assets/imagens/atendimento.png" alt="" />
                    </div>
                               
                </div>
            </div>
        </div>
    )
}