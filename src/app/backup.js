import DireitoSocietarioCard from "./components/direito_societario_card/direito_societario_card"
import DireitoImobiliarioCard from "./components/direito_imobiliario_card/direito_imobiliario_card";
import Footer from "./components/footer/footer";
import TopBar from "./components/topbar/topbar";
import Inicio from "./components/inicio/inicio";
import AreasDeAtuacao from "./components/areas_de_atuacao/areas_de_atuacao";
import Profissionais from "./components/profissionais/profissionais";
import "./page.css"

export default function Home() {
  return (
    <div>
      <nav>
        <TopBar />
      </nav>

      <section id="section-inicio">
        <Inicio />
      </section>

      <section id="section-atuacao">
        <AreasDeAtuacao />
      </section>

      <section 
      id="section-profissionais">
        <Profissionais />
      </section>
      
      <section id="section-footer">
        <Footer />
      </section>
    </div>
  );
}
