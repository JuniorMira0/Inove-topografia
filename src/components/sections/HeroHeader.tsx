'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HeroHeader.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useWindowSize } from '../../hooks/useWindowSize';

const navLinks = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#obras', label: 'Obras' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

// Lista de imagens para DESKTOP (formato paisagem)
const desktopBackgroundImages = [
  {
    src: '/images/hero-background-desktop.webp',
    alt: 'Topógrafo em campo aberto com montanhas',
  },
  {
    src: '/images/hero-background-desktop-2.webp',
    alt: 'Equipamento de topografia em detalhe ao pôr do sol',
  },
  {
    src: '/images/hero-background-desktop-3.webp',
    alt: 'Drone sobrevoando área de mineração',
  },
];

// Lista de imagens para MOBILE (formato retrato)
const mobileBackgroundImages = [
  {
    src: '/images/hero-background-mobile.webp',
    alt: 'Topógrafo trabalhando visto de perto',
  },
  { src: '/images/hero-background-mobile-2.webp',
    alt: 'Detalhe de um drone em operação'
  },
  {
    src: '/images/hero-background-mobile-3.webp',
    alt: 'Vista vertical de uma ferrovia em construção',
  },
];

export default function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // hook para determinar o tamanho da tela
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 1023;

  // Escolhendo qual array de imagens usar com base no tamanho da tela
  const imagesToDisplay = isMobile
    ? mobileBackgroundImages
    : desktopBackgroundImages;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="hero-header-section">
      <div className="hero-background-carousel">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          allowTouchMove={false}
          className="hero-swiper"
        >
          {imagesToDisplay.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hero-header-logoContainer">
        <Link href="/">
          <Image
            src="/images/Logo-header.png"
            alt="Logo i9 Topografia"
            width={256}
            height={77}
            priority
          />
        </Link>
      </div>

      <nav className="hero-header-navigation hero-header-desktopNav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>
                <span className="hero-header-navLinkText">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`hero-header-mobileMenuButton ${
          isMobileMenuOpen ? 'menu-open' : ''
        }`}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMobileMenuOpen}
      >
        <span className="hero-header-hamburgerLine"></span>
        <span className="hero-header-hamburgerLine"></span>
        <span className="hero-header-hamburgerLine"></span>
      </button>

      <div className="hero-header-content">
        <h1 className="hero-header-mainTitle">
          Soluções Inteligentes em Topografia
        </h1>
      </div>

      {isMobileMenuOpen && (
        <div className="hero-header-mobileNavPanel">
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={toggleMobileMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="hero-header-scrollIndicator">
        <Link
          href="#sobre"
          className="hero-header-scrollLink"
          aria-label="Rolar para próxima seção"
        >
          <span>&darr;</span>
        </Link>
      </div>
    </section>
  );
}
