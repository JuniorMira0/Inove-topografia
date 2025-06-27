'use client';

import React from 'react';
import './TechnologiesSection.css';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useWindowSize } from '../../hooks/useWindowSize';

const equipmentCategories = [
  {
    type: 'image',
    src: '/images/tech/estacao-total.webp',
    title: 'Estações Totais e GNSS',
    items: [
      'Estações Totais Robotizadas (Leica, Trimble)',
      'Receptores GNSS RTK (Trimble R12, Topcon Hiper)',
    ],
  },
  {
    type: 'image',
    src: '/images/tech/drone-rtk.webp',
    title: 'Drones (VANTs)',
    items: [
      'DJI Phantom 4 RTK',
      'DJI Mavic 3E',
      'Sensores para Mapeamento de Precisão',
    ],
  },
  {
    type: 'video',
    src: '/images/tech/video3D.mp4',
    title: 'Softwares de Processamento',
    items: ['Modelagem 3D para corredores e cálculo de volumes',
        'Processamento de imagens de drone (Fotogrametria)',
        'Análise espacial e geração de mapas temáticos (GIS)'],
  },
  {
    type: 'image',
    src: '/images/tech/nivel-precisao.webp',
    title: 'Equipamentos de Precisão',
    items: [
      'Níveis Eletrônicos de Alta Precisão',
      'Controladores de Campo (Topcon Horizon)',
    ],
  },
];

export default function TechnologiesSection() {
  const { width } = useWindowSize();
  const isSmallScreen = width !== undefined && width < 1024;

  const renderCard = (category: (typeof equipmentCategories)[0]) => (
    <div className="technology-card">
      {category.type === 'video' ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="technology-card-image"
          key={category.src}
        >
          <source src={category.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={category.src}
          alt={category.title}
          width={400}
          height={225}
          className="technology-card-image"
        />
      )}
      <div className="technology-card-content">
        <h3 className="technology-card-title">{category.title}</h3>
        <ul className="technology-card-list">
          {category.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="equipamentos" className="technologies-section">
      <div className="technologies-container">
        <h2 className="technologies-main-title">Tecnologias e Equipamentos</h2>
        <p className="technologies-intro">
          Utilizamos o que há de mais moderno em equipamentos de topografia e
          softwares de processamento para garantir a máxima precisão e
          eficiência em cada projeto.
        </p>

        {isSmallScreen ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="technologies-carousel"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {equipmentCategories.map((category) => (
              <SwiperSlide key={category.title}>
                {renderCard(category)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="technologies-grid">
            {equipmentCategories.map((category) => (
              <div key={category.title}>{renderCard(category)}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
