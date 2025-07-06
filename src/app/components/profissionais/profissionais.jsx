import "./profissionais.css"

export default function Profissionais () {

    return (
        <div id="prof">
            <h1 id="prof-h1">Profissionais</h1>
            <div id="images">
                <div className="information-cards">
                    <img className="foto" src="/ana_julia_argentino.svg" alt="" /> 
                    <h2 id="ana-julia">Ana Julia Argentino</h2>
                    
                    <div id="graduacoes">
                        <p id="p1">Bacharelado em Direito pela<br/>Universidade Católica de<br/>Pernambuco;</p>

                        <p id="p2">Pós-graduanda em Direito<br/>Societário pelo Instituto Luiz<br/>Maio Moutinho;</p>
                    </div>
                </div>

                <div className="information-cards">
                    <img className="foto" src="/ana_julia_argentino.svg" alt="" /> 
                    <h2 id="ana-julia">Ana Julia Argentino</h2>
                    
                    <div id="graduacoes">
                        <p id="p1">Bacharelado em Direito pela<br/>Universidade Católica de<br/>Pernambuco;</p>

                        <p id="p2">Pós-graduanda em Direito<br/>Societário pelo Instituto Luiz<br/>Maio Moutinho;</p>
                    </div>
                </div>
            </div>

            <div id="espaco">
                
            </div>
        </div>
    );
}