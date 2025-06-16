'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HeroHeader.css';

const navLinks = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#obras', label: 'Obras' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="hero-header-section">
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
