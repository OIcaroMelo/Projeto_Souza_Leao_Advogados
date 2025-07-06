import "./direito_imobiliario_card.css"

export default function DireitoImobiliarioCard() {
    return (
        <div className="card" >
            <div id="content" >
                <img src="/direito_imobiliario_icon.svg" alt="Card" />
                <div id="title" >
                    <h1 id="imobiliario">Direito Imobiliário</h1>
                </div>
            </div>
            <div>
                <p>
                    Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.
                </p>
            </div>
        </div>
    );
}