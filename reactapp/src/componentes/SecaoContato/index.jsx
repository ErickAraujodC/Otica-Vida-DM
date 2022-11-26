import React from "react";

import './contato.css'

export default function SobreContato(){
    return(
        <div className="secao-contato">
            <div className="secao">
                <h2>FALE CONOSCO</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
                <div className="box-ul-contato">
                    <div className="ul-contato">
                        <ul type="none">
                        <p>Contato</p>
                            <li>
                                <a href="https://www.google.com/maps/d/viewer?hl=pt-BR&gl=br&ie=UTF8&oe=UTF8&msa=0&mid=11FfX65S3fssz8eP-en5THYM9pUY&ll=-22.819652433545485%2C-43.49741100000002&z=11" target="_blank">
                                    <img src="../../../public/assets/imagens/local.png" alt="Logo localização" className="img-contato"/>
                                    <p>Nova Iguaçu, RJ</p>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+55(21)9999-9999">
                                    <img src="../../../public/assets/imagens/telefone.png" alt="Logo telefone" className="img-contato"/>
                                    <p>(21)9999-9999</p>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@oticavida.com" target="_blank">
                                    <img src="../../../public/assets/imagens/email.png" alt="Logo e-mail" className="img-contato"/>
                                    <p>contato@oticavida.com</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ul-redes-sociais">
                        <ul type="none">
                            <p>Nossas Redes Sociais</p>
                            <li>
                                <a href="https://www.facebook.com/oticavidarj/" target="_blank">
                                    <img src="../../../public/assets/imagens/fb.png" alt="Logo facebook" className="img-contato"/>
                                    <p>/oticavidarj/</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/oticavidarj/" target="_blank">
                                    <img src="../../../public/assets/imagens/ig.png" alt="Logo instagram" className="img-contato"/>
                                    <p>@oticavidarj/</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/oticavidarj/" target="_blank">
                                    <img src="../../../public/assets/imagens/tt.png" alt="Logo twitter" className="img-contato"/>
                                    <p>@oticavidarj/</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}