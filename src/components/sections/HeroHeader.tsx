'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HeroHeader.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useWindowSize } from '../../hooks/useWindowSize';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#obras', label: 'Obras' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#contato', label: 'Contato' },
];

const desktopBackgrounds = [
  {
    type: 'image',
    src: '/images/banner/banner-desktop-01.webp',
    alt: 'Drone profissional para topografia sobrevoando lavoura ao amanhecer',
  },
  {
    type: 'image',
    src: '/images/banner/banner-desktop-02.webp',
    alt: 'Topógrafo com estação total em campo de agricultura de precisão',
  },
  {
    type: 'image',
    src: '/images/banner/banner-desktop-03.webp',
    alt: 'Vista aérea de pátio ferroviário em grande obra de infraestrutura',
  },
  {
    type: 'image',
    src: '/images/banner/banner-desktop-04.webp',
    alt: 'Levantamento topográfico em área de rejeitos de mineração',
  },
  {
    type: 'image',
    src: '/images/banner/banner-desktop-05.webp',
    alt: 'Imagem aérea de bairro urbano com quadras e ruas, acompanhada de informações sobre regularização fundiária pelo programa Casa Legal.',
  },
  {
    type: 'image',
    src: '/images/banner/banner-desktop-06.webp',
    alt: 'Vista aérea de área rural com mineração e vegetação, acompanhada de texto sobre georreferenciamento de imóveis rurais.',
  },
];

const mobileBackgrounds = [
  {
    type: 'image',
    src: '/images/banner/banner-mobile-01.webp',
    alt: 'Drone de alta precisão sobrevoando uma lavoura para mapeamento agrícola',
  },
  {
    type: 'image',
    src: '/images/banner/banner-mobile-02.webp',
    alt: 'Topógrafo utilizando receptor GNSS RTK em campo de pivô central',
  },
  {
    type: 'image',
    src: '/images/banner/banner-mobile-03.webp',
    alt: 'Vista aérea de pátio de manobras para locação de eixos ferroviários',
  },
  {
    type: 'image',
    src: '/images/banner/banner-mobile-04.webp',
    alt: 'Topógrafo realizando levantamento planialtimétrico em área de mineração',
  },
  {
    type: 'image',
    src: '/images/banner/banner-mobile-05.webp',
    alt: 'Imagem aérea de bairro urbano com quadras e ruas, acompanhada de informações sobre regularização fundiária pelo programa Casa Legal.',
  },
  {
    type: 'image',
    src: '/images/banner/banner-mobile-06.webp',
    alt: 'Vista aérea de área rural com mineração e vegetação, acompanhada de texto sobre georreferenciamento de imóveis rurais.',
  },
];

export default function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 1023;
  const backgroundsToDisplay = isMobile
    ? mobileBackgrounds
    : desktopBackgrounds;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobile) {
      if (isMobileMenuOpen) {
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
      }
    }
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen, isMobile]);

  return (
    <section className="hero-header-section">
      <div className="top-bar">
        <div className="top-bar-logo">
          <Link href="/">
            <Image
              src="/images/logo-header.png"
              alt="Logo Inove Topografia"
              width={180}
              height={54}
              priority
            />
          </Link>
        </div>

        {!isMobile && (
          <div className="top-bar-contact">
            <a
              href="mailto:contato@inovesolucoestopografia.com.br"
              className="top-bar-info-item"
            >
              <FaEnvelope />
              <span>contato@inovesolucoestopografia.com.br</span>
            </a>
            <a
              href="https://wa.me/5562992874926"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-info-item"
            >
              <FaPhoneAlt />
              <span>(62) 99287-4926</span>
            </a>
          </div>
        )}

        {isMobile && (
          <button
            className={`hero-header-mobileMenuButton ${
              isMobileMenuOpen ? 'menu-open' : ''
            }`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      <div className="hero-background-carousel">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          allowTouchMove={true}
          className="hero-swiper"
        >
          {backgroundsToDisplay.map((item, index) => (
            <SwiperSlide key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
            <div className="mobile-nav-contact">
              <a
                href="mailto:contato@inovesolucoestopografia.com.br"
                className="mobile-nav-info-item"
              >
                <FaEnvelope />
                <span>contato@inovesolucoestopografia.com.br</span>
              </a>
              <a
                href="https://wa.me/5562992874926"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-info-item"
              >
                <FaPhoneAlt />
                <span>(62) 99287-4926</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
}
