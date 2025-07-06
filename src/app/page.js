'use client';

import { useEffect } from "react";
import DireitoSocietarioCard from "./components/direito_societario_card/direito_societario_card";
import DireitoImobiliarioCard from "./components/direito_imobiliario_card/direito_imobiliario_card";
import Footer from "./components/footer/footer";
import TopBar from "./components/topbar/topbar";
import Inicio from "./components/inicio/inicio";
import AreasDeAtuacao from "./components/areas_de_atuacao/areas_de_atuacao";
import Profissionais from "./components/profissionais/profissionais";
import "./page.css";

export default function Home() {

  useEffect(() => {
    const topbar = document.getElementById('topbar');
    const sectionInicio = document.getElementById('section-inicio');

    if (topbar && sectionInicio) {
      const altura = topbar.offsetHeight;
      sectionInicio.style.paddingTop = `${altura}px`;
    }

    const handleResize = () => {
      if (topbar && sectionInicio) {
        sectionInicio.style.paddingTop = `${topbar.offsetHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="page">
      <nav>
        <TopBar />
      </nav>

      <section id="section-inicio">
        <Inicio />
      </section>

      <section id="section-atuacao">
        <AreasDeAtuacao />
      </section>

      <section id="section-profissionais">
        <Profissionais />
      </section>
      
      <section id="section-footer">
        <Footer />
      </section>
    </div>
  );
}