'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WorksSection.css';
import Modal from '../Modal/Modal';
import { useWindowSize } from '../../hooks/useWindowSize';
import Image from 'next/image';

const worksData = [
  {
    id: 1,
    image: '/images/works/Ferrovia-Carajas.webp',
    title: 'Duplicação da Ferrovia Carajás',
    location: 'Pará, PA',
    description:
      'Serviços de topografia para a expansão de uma das mais importantes vias de escoamento de minério do mundo, incluindo controle geométrico e apoio à engenharia.',
    category: 'Infraestrutura Ferroviária',
  },
  {
    id: 2,
    image: '/images/works/Baixada-Santista.webp',
    title: 'Remodelação da Baixada Santista',
    location: 'São Paulo, SP',
    description:
      'Atuação em projetos de modernização da malha ferroviária, com levantamentos cadastrais e locação de eixos para a remodelação de pátios e vias.',
    category: 'Logística Ferroviária',
  },
  {
    id: 3,
    image: '/images/works/Norte-Sul.webp',
    title: 'Ferrovia Norte-Sul',
    location: 'Trecho TO-MA',
    description:
      'Locação de eixo e controle geométrico de precisão em mais de 180 km de via, apoiando diretamente a implantação da ferrovia.',
    category: 'Infraestrutura Ferroviária',
  },
  {
    id: 4,
    image: '/images/works/metro-sp.webp',
    title: 'Metrô de São Paulo',
    location: 'São Paulo, SP',
    description:
      'Serviços de topografia de precisão para obras de expansão do sistema metroviário, garantindo o controle geométrico de túneis e o monitoramento de estruturas.',
    category: 'Transporte Urbano',
  },
  {
    id: 5,
    image: '/images/works/tegram.webp',
    title: 'TEGRAM - Terminal de Grãos',
    location: 'Maranhão, MA',
    description:
      'Topografia para a implantação e expansão de pátios de manobra e infraestrutura logística em um dos maiores terminais de grãos do país.',
    category: 'Logística Portuária',
  },
  {
    id: 6,
    image: '/images/works/J.Demito.webp',
    title: 'Grupo J. Demito',
    location: 'TO, MA, MT',
    description:
      'A Inove Soluções foi contratada para realizar uma série de levantamentos topográficos de alta precisão nas unidades industriais e áreas de mineração pertencentes ao Grupo JDemito — um dos maiores conglomerados agroindustriais do Brasil, com atuação em mineração, etanol, logística e corretivos agrícolas. Os trabalhos abrangeram mapeamento planialtimétrico, volumetria, georreferenciamento, apoio à engenharia civil e modelagem 3D das áreas industriais e operacionais.',
    category: 'Mineração',
  },
  {
    id: 7,
    image: '/images/works/mina-ceu.webp',
    title: 'Epenge Mineradora',
    location: 'Tocantins, TO',
    description:
      'Topografia de mina a céu aberto, realizando o mapeamento de cavas, frentes de lavra e pilhas de estéril, além do controle preciso de volumes de material.',
    category: 'Mineração',
  },
];

type Work = (typeof worksData)[0];

export default function WorksSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 768;

  const handleOpenModal = (work: Work) => {
    if (!isMobile) {
      setSelectedWork(work);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWork(null);
  };

  const renderCard = (work: Work) => (
    <div className="work-card">
      <div className="work-card-image-container">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="work-card-image"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
        />
      </div>
      <div className="work-card-content">
        <span className="work-card-category">{work.category}</span>
        <h3 className="work-card-title">{work.title}</h3>
        <p className="work-card-description">{work.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <section id="obras" className="works-section">
        <div className="works-content-box">
          <div className="works-container">
            <h2 className="works-main-title">Obras Realizadas</h2>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={!isMobile}
              pagination={{ clickable: true }}
              className="works-carousel"
              autoHeight={isMobile}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
                1280: { slidesPerView: 4, spaceBetween: 50 },
              }}
            >
              {worksData.map((work) => (
                <SwiperSlide key={work.id}>
                  <div
                    className="work-card-clickable"
                    onClick={() => handleOpenModal(work)}
                  >
                    {renderCard(work)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Modal show={showModal} onClose={handleCloseModal} work={selectedWork} />
    </>
  );
}
