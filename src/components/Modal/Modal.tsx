"use client";

import React from 'react';
import './Modal.css';
import Image from 'next/image';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  work: {
    image: string;
    title: string;
    location: string;
    description: string;
    category: string;
  } | null;
}

export default function Modal({ show, onClose, work }: ModalProps) {
  if (!show || !work) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        
        <Image src={work.image} alt={work.title} className="modal-image" />
        <div className="modal-text-content">
          <span className="modal-category">{work.category}</span>
          <h2 className="modal-title">{work.title}</h2>
          <p className="modal-location">{work.location}</p>
          <p className="modal-description">{work.description}</p>
        </div>
      </div>
    </div>
  );
}