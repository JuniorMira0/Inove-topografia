"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WorksSection.css';
import Modal from '../Modal/Modal';
import { useWindowSize } from '../../hooks/useWindowSize';

const worksData = [
    {
        id: 1,
        image: '/images/obras/ferrovia-carajas.webp',
        title: 'Duplicação da Ferrovia Carajás',
        location: 'Pará, PA',
        description: 'Serviços de topografia para a expansão de uma das mais importantes vias de escoamento de minério do mundo, incluindo controle geométrico e apoio à engenharia.',
        category: 'Infraestrutura Ferroviária',
    },
    {
        id: 2,
        image: '/images/obras/baixada-santista.webp',
        title: 'Remodelação da Baixada Santista',
        location: 'São Paulo, SP',
        description: 'Atuação em projetos de modernização da malha ferroviária, com levantamentos cadastrais e locação de eixos para a remodelação de pátios e vias.',
        category: 'Logística Ferroviária',
    },
    {
        id: 3,
        image: '/images/obras/ferrovia-norte-sul.webp',
        title: 'Ferrovia Norte-Sul',
        location: 'Trecho TO-MA',
        description: 'Locação de eixo e controle geométrico de precisão em mais de 180 km de via, apoiando diretamente a implantação e duplicação da ferrovia.',
        category: 'Infraestrutura Ferroviária',
    },
    {
        id: 4,
        image: '/images/obras/metro-sp.webp',
        title: 'Metrô de São Paulo',
        location: 'São Paulo, SP',
        description: 'Serviços de topografia de precisão para obras de expansão do sistema metroviário, garantindo o controle geométrico de túneis e o monitoramento de estruturas.',
        category: 'Transporte Urbano',
    },
    {
        id: 5,
        image: '/images/obras/tegram.webp',
        title: 'TEGRAM - Terminal de Grãos',
        location: 'Maranhão, MA',
        description: 'Topografia para a implantação e expansão de pátios de manobra e infraestrutura logística em um dos maiores terminais de grãos do país.',
        category: 'Logística Portuária',
    },
    {
        id: 6,
        image: '/images/obras/grupo-demito.webp',
        title: 'Grupo J. Demito',
        location: 'TO, MA, MT',
        description: 'Desenvolvimento de projetos de agricultura de precisão, incluindo mapeamento de propriedades e otimização de linhas de plantio para aumento de eficiência operacional.',
        category: 'Agricultura de Precisão',
    },
    {
        id: 7,
        image: '/images/obras/epenge.webp',
        title: 'Epenge Mineradora',
        location: 'Tocantins, TO',
        description: 'Topografia de mina a céu aberto, realizando o mapeamento de cavas, frentes de lavra e pilhas de estéril, além do controle preciso de volumes de material.',
        category: 'Mineração',
    },
    {
        id: 8,
        image: '/images/obras/yamana-gold.webp',
        title: 'Yamana Gold',
        location: 'Goiás, GO',
        description: 'Apoio topográfico completo para operações de mineração de ouro, incluindo levantamentos para planejamento de lavra e monitoramento de estruturas geotécnicas.',
        category: 'Mineração',
    },
];

type Work = typeof worksData[0];

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
            <img src={work.image} alt={work.title} className="work-card-image" />
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
                <div className="works-container">
                    <h2 className="works-main-title">Obras realizadas</h2>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        className="works-carousel"
                        autoHeight={isMobile}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
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
            </section>

            <Modal
                show={showModal}
                onClose={handleCloseModal}
                work={selectedWork}
            />
        </>
    );
}