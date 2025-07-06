import "./inicio.css"

export default function Inicio() {

    return (
        <div id="init">
            <div id="text-container">
                <div id="init-text">
                    <h2 id="init-title">
                        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.<br />Etiam eget ligula eu lectus<br />lobortis condimentum.
                    </h2>

                    <h3 id="init-p">
                        Aliquam nonummy auctor massa.<br />Pellentesque habitant morbi tristique<br />senectus et netus et malesuada fames ac<br />turpis egestas. Nulla at risus. 
                    </h3>
                </div>
            </div>

            <div id="init-shapes">
                <img id="shapes" src="/shapes.svg" alt="" />
            </div>
        </div>
    );
}