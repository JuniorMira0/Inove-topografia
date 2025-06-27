"use client";

import React, { useState, useEffect } from 'react';
import './ContactSection.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [formState, handleFormspreeSubmit] = useForm("xldnppoy");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (formState.succeeded) {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  }, [formState.succeeded]);

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
                <h3>Telefone / WhatsApp</h3>
                <a href="https://wa.me/5562992874926" target="_blank" rel="noopener noreferrer">(62) 99287-4926</a>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div className="info-text">
                <h3>E-mail</h3>
                <a href="mailto:contato@inovesolucoestopografia.com.br">contato@inovesolucoestopografia.com.br</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-column">
          <form onSubmit={handleFormspreeSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Seu Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Seu E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={formState.errors}
                className="form-error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Sua Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={formState.errors}
                className="form-error-message"
              />
            </div>
            <div className="form-submit-area">
                <button type="submit" className="submit-button" disabled={formState.submitting}>
                    Enviar Mensagem
                </button>
                {formState.succeeded && (
                    <p className="form-success-message">Mensagem enviada com sucesso!</p>
                )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}