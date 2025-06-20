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
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const navLinks = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#obras', label: 'Obras' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

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

const mobileBackgroundImages = [
  {
    src: '/images/hero-background-mobile.webp',
    alt: 'Topógrafo trabalhando visto de perto',
  },
  {
    src: '/images/hero-background-mobile-2.webp',
    alt: 'Detalhe de um drone em operação',
  },
  {
    src: '/images/hero-background-mobile-3.webp',
    alt: 'Vista vertical de uma ferrovia em construção',
  },
];

export default function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 1023;
  const imagesToDisplay = isMobile
    ? mobileBackgroundImages
    : desktopBackgroundImages;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="hero-header-section">
      <div className="top-bar">
        <div className="top-bar-logo">
          <Link href="/">
            <Image
              src="/images/Logo-header.png"
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
            >
              (62) 99287-4926
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
            <div className="hamburger-icon-container"></div>
          </button>
        )}
      </div>

      <div className="hero-background-carousel">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
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
