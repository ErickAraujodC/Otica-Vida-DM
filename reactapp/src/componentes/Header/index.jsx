import React from "react";

import './header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="logo-header">
                <img src="../../../public/assets/imagens/logo.png" alt="Logo site" />
            </div>

            <div className="links-header">
                <ul>
                    <li><a href="#produtos">PRODUTOS</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
            </div> 
        </div>
    )
}