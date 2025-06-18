"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './ServicesSection.css';

const servicesList = [
    {
        title: 'Locação e Monitoramento de Obras Civis',
        description: 'Acompanhamento de estruturas, marcação de fundações e eixos de rodovias e ferrovias.',
    },
    {
        title: 'Levantamento Planialtimétrico Cadastral',
        description: 'Base para projetos de loteamentos, pré-projetos viários e demarcação de áreas (urbano e rural).',
    },
    {
        title: 'Georreferenciamento e Cadastro',
        description: 'Georreferenciamento de imóveis, Cadastro Ambiental Rural (CAR), desmembramento e retificação de áreas.',
    },
    {
        title: 'Terraplenagem e Cálculo de Volumes',
        description: 'Medições precisas de volumes, conferência de projetos e levantamentos "As Built" de obras.',
    },
    {
        title: 'Topografia Aplicada à Ferrovia',
        description: 'Controle geométrico da via, locação de eixos ferroviários e implantação de pátios de manobra.',
    },
    {
        title: 'Agricultura de Precisão',
        description: 'Mapeamento rural, projetos de linhas de plantio/pulverização e otimização de áreas mecanizáveis.',
    },
    {
        title: 'Representação 2D, 3D e Cálculos',
        description: 'Criação de modelos tridimensionais, perfis longitudinais e secções de terrenos para todos os fins.',
    },
    {
        title: 'Nivelamentos de Precisão',
        description: 'Execução de nivelamento geométrico e trigonométrico para construção civil e montagem industrial.',
    },
];

export default function ServicesSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="servicos" className="services-section">
            <div className="services-image-column">
                <Image
                    src="/images/hero-background-mobile.webp"
                    alt="Topógrafo da i9 Topografia em campo com equipamento"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={85}
                />
            </div>
            <div className="services-text-column">
                <h2 className="services-main-title">
                    <span className="services-title-line"></span>Serviços
                </h2>
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div
                            className={`service-item ${openIndex === index ? 'active' : ''}`}
                            key={service.title}
                            onClick={() => handleToggle(index)}
                        >
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}