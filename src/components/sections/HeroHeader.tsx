'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HeroHeader.css';

const navLinks = [
  { href: '#sobre-nos', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#equipes', label: 'Equipes' },
  { href: '#obras', label: 'Obras' },
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
            height={75}
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
        className={`hero-header-mobileMenuButton ${isMobileMenuOpen ? 'menu-open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <span className="hero-header-hamburgerLine"></span>
        <span className="hero-header-hamburgerLine"></span>
        <span className="hero-header-hamburgerLine"></span>
      </button>

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
    </section>
  );
}