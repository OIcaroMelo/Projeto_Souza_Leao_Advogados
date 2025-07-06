import "./footer.css"

export default function Footer() {

    return (
        <div id="downbar">
            <h1 id="contato">
                Contato
            </h1>

            <div id="information">
                <div id="e-mail">
                    <div>
                        <img src="/email_icon.svg" alt="" />
                    </div>

                    <div>
                        <h1 id="email-title">
                            E-mail
                        </h1>
                        <p id="administrativo">
                            administrativo@souzaleaoadvogados.com
                        </p>
                    </div>
                </div>

                <div id="address">
                    <div>
                        <img src="/location_icon.svg" alt="" />
                    </div>

                    <div>
                        <h1 id="address-title">
                            Nosso Endereço
                        </h1>
                        <p id="endereco">
                            R. Bruno Veloso, 1280, <br /> Salas 1617, 1618 e 1619, <br /> Boa Viagem, Recife/PE <br />51021280
                        </p>
                    </div>
                </div>

                <div id="fone" >
                    <div>
                        <img src="/phone_icon.svg" alt="" />
                    </div>

                    <div>
                        <h1 id="phone-title">
                            Telefone
                        </h1>
                        <p id="telefone">
                            (81) 9 9930-0207
                        </p>
                    </div>
                </div>
            </div>

            <p id="copyright">
                Copyright ® 2025 - Todos os direitos reservados
            </p>
        </div>
    )
}