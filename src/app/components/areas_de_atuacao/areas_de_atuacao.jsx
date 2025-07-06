import DireitoImobiliarioCard from "../direito_imobiliario_card/direito_imobiliario_card";
import DireitoSocietarioCard from "../direito_societario_card/direito_societario_card";
import "./areas_de_atuacao.css"

export default function AreasDeAtuacao() {

    return (
        <div id="areas-de-atuacao">
            <h1 id="areas">Áreas de Atuação</h1>
            <div id="cards-container">
                <DireitoSocietarioCard />
                <DireitoImobiliarioCard />
            </div>
            <img id="atuacao-icon" src="/atuacao_icon.svg" alt="" />
        </div>
    );
}