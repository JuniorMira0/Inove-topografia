import React from 'react';
import './AboutUsSection.css';

export default function AboutUsSection() {
  return (
    <section id="sobre" className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content-wrapper">
          <h2 className="about-us-title">
            <span className="about-us-title-line"></span>Sobre Nós
          </h2>
          <p className="about-us-intro">
            A i9 Topografia e Georreferenciamento é sua especialista em
            Cartografia, Topografia e Geodésia, atuando com precisão em áreas
            urbanas e rurais. Com uma equipe altamente capacitada e o uso de
            modernos recursos tecnológicos como GPS RTK, Estações Totais e
            Drones, garantimos qualidade e eficiência em projetos para diversos
            setores, incluindo construção civil, ferrovias e rodovias.
          </p>

          <div className="about-us-columns">
            <div className="about-us-column">
              <h3 className="about-us-column-title">Missão</h3>
              <p className="about-us-column-text">
                Entregar soluções de topografia com excelência e precisão,
                utilizando tecnologia avançada para superar as expectativas dos
                nossos clientes e contribuir para o sucesso de seus
                empreendimentos.
              </p>
            </div>
            <div className="about-us-column">
              <h3 className="about-us-column-title">Visão</h3>
              <p className="about-us-column-text">
                Ser referência em inovação e confiabilidade no setor de
                topografia, reconhecida pela aplicação de tecnologia de ponta e
                conhecimento técnico, garantindo resultados precisos e
                eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
