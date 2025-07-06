import "./direito_societario_card.css"

export default function DireitoSocietarioCard() {
    return (
        <div className="card" >
            <div id="content" >
                <img src="/direito_societario_icon.svg" alt="Card" />
                <div id="title" >
                    <h1 id="societario">Direito Societário</h1>
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