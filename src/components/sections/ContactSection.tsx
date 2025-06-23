"use client";

import React from 'react';
import './ContactSection.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info-column">
          <h2 className="contact-main-title">
            <span className="contact-title-line"></span>Contato
          </h2>
          <p className="contact-subtitle">
            Pronto para iniciar seu próximo projeto? Entre em contato conosco através dos canais abaixo ou preencha o formulário ao lado.
          </p>
          <div className="info-items-container">
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text">
                <h4>Telefone / WhatsApp</h4>
                <a href="https://wa.me/5562992874926" target="_blank" rel="noopener noreferrer">(62) 99287-4926</a>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div className="info-text">
                <h4>E-mail</h4>
                <a href="mailto:contato@inovesolucoestopografia.com.br">contato@inovesolucoestopografia.com.br</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-column">
          <form 
            action="https://formspree.io/f/xldnppoy"
            method="POST" 
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Seu Nome</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Seu E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Sua Mensagem</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}