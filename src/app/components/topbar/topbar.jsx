'use client';

import { useEffect, useState } from 'react';
import "./topbar.css"

export default function TopBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    useEffect(() => {
        const topicos = document.querySelectorAll('.topico');

        topicos.forEach(topico => {
            topico.addEventListener('click', () => {
                document.querySelector('.topico.ativo')?.classList.remove('ativo');
                document.querySelector('.traco.actived')?.classList.remove('actived');

                topico.classList.add('ativo');
                topico.querySelector('.traco')?.classList.add('actived');

                // Fecha o menu ao clicar em algum tópico no mobile
                setMenuAberto(false);
            });
        });
    }, []);

    return (
        <div id="topbar">
            <img id="icon" src="/souza_leao_icon.svg" alt="Logo" />

            <div id="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
                ☰
            </div>

            <div id="topics" className={menuAberto ? "aberto" : ""}>
                <div id="social">
                    <a href=""><img src="/linkedin.svg" alt="LinkedIn" /></a>
                    <a href=""><img src="/instagram.svg" alt="Instagram" /></a>
                </div>

                <div id="sections">
                    <div className="topico ativo">
                        <a href="#section-inicio"><h2 id="inicio">Início</h2></a>
                        <div className="traco actived"></div>
                    </div>

                    <div className="topico">
                        <a href="#section-atuacao"><h2 id="atuacao">Áreas de Atuação</h2></a>
                        <div className="traco"></div>
                    </div>

                    <div className="topico">
                        <a href="#section-profissionais"><h2 id="profissionais">Profissionais</h2></a>
                        <div className="traco"></div>
                    </div>

                    <div className="topico">
                        <a href="#section-footer"><h2 id="contatos">Contato</h2></a>
                        <div className="traco"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
