'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './CookieBanner.css';

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const consentimento = localStorage.getItem('cookie_consent');
    if (!consentimento) {
      // Pequeno delay para não aparecer instantaneamente
      const timer = setTimeout(() => setVisivel(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function aceitarTodos() {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisivel(false);
  }

  function rejeitarOpcional() {
    localStorage.setItem('cookie_consent', 'essential_only');
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div className={`cookie-banner ${visivel ? 'cookie-banner--visivel' : ''}`}>
      <div className="cookie-banner-conteudo">
        <div className="cookie-banner-icone" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="9" r="1" fill="currentColor" />
            <circle cx="15" cy="8" r="1" fill="currentColor" />
            <circle cx="10" cy="14" r="1" fill="currentColor" />
            <circle cx="16" cy="13" r="0.8" fill="currentColor" />
            <circle cx="12" cy="17" r="0.8" fill="currentColor" />
          </svg>
        </div>
        <div className="cookie-banner-texto">
          <p className="cookie-banner-titulo">Este website utiliza cookies</p>
          <p className="cookie-banner-descricao">
            Utilizamos cookies para melhorar a sua experiência de navegação, personalizar conteúdos 
            e analisar o tráfego do website. Ao clicar em &quot;Aceitar Todos&quot;, consente a utilização de todos os cookies. 
            Pode optar por aceitar apenas os cookies essenciais.{' '}
            <Link href="/politica-cookies" className="cookie-banner-link">
              Saiba mais
            </Link>
          </p>
        </div>
        <div className="cookie-banner-acoes">
          <button onClick={aceitarTodos} className="cookie-btn cookie-btn--aceitar">
            Aceitar Todos
          </button>
          <button onClick={rejeitarOpcional} className="cookie-btn cookie-btn--rejeitar">
            Apenas Essenciais
          </button>
        </div>
      </div>
    </div>
  );
}
