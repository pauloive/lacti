'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './CookieBanner.css';

const CATEGORIAS = [
  {
    chave: 'analiticos',
    titulo: 'Cookies analíticos',
    descricao: 'Ajudam-nos a perceber como o website é utilizado, para o podermos melhorar.',
  },
  {
    chave: 'marketing',
    titulo: 'Cookies de marketing',
    descricao: 'Usados para apresentar conteúdos e anúncios relevantes para si.',
  },
];

const PREFERENCIAS_DEFEITO = { analiticos: false, marketing: false };

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);
  const [aPersonalizar, setAPersonalizar] = useState(false);
  const [preferencias, setPreferencias] = useState(PREFERENCIAS_DEFEITO);

  useEffect(() => {
    // sessionStorage: a escolha só é lembrada durante a visita atual.
    // Ao fechar o browser e voltar a abrir o site, a mensagem aparece de novo.
    const consentimento = sessionStorage.getItem('cookie_consent');
    if (!consentimento) {
      // Pequeno delay para não aparecer instantaneamente
      const timer = setTimeout(() => setVisivel(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function guardarConsentimento(dados) {
    sessionStorage.setItem(
      'cookie_consent',
      JSON.stringify({ essenciais: true, ...dados, data: new Date().toISOString() })
    );
    setVisivel(false);
    setAPersonalizar(false);
  }

  function aceitarTodos() {
    guardarConsentimento({ analiticos: true, marketing: true });
  }

  function rejeitarOpcional() {
    guardarConsentimento(PREFERENCIAS_DEFEITO);
  }

  function guardarPreferencias() {
    guardarConsentimento(preferencias);
  }

  function alternarPreferencia(chave) {
    setPreferencias((atual) => ({ ...atual, [chave]: !atual[chave] }));
  }

  if (!visivel) return null;

  return (
    <div className={`cookie-banner ${visivel ? 'cookie-banner--visivel' : ''}`}>
      <div className="cookie-banner-card">
        {!aPersonalizar ? (
          <>
            <div className="cookie-banner-cabecalho">
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
              <p className="cookie-banner-titulo">Cookies</p>
            </div>
            <p className="cookie-banner-descricao">
              Utilizamos cookies para melhorar a sua experiência e analisar o tráfego do website.{' '}
              <Link href="/politica-cookies" className="cookie-banner-link">
                Saiba mais
              </Link>
            </p>
            <div className="cookie-banner-acoes">
              <button onClick={aceitarTodos} className="cookie-btn cookie-btn--aceitar">
                Aceitar Todos
              </button>
              <button onClick={rejeitarOpcional} className="cookie-btn cookie-btn--rejeitar">
                Apenas Essenciais
              </button>
              <button
                onClick={() => setAPersonalizar(true)}
                className="cookie-btn cookie-btn--personalizar"
              >
                Personalizar
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-banner-cabecalho">
              <p className="cookie-banner-titulo">Personalizar cookies</p>
            </div>

            <div className="cookie-banner-categoria">
              <div className="cookie-banner-categoria-info">
                <p className="cookie-banner-categoria-titulo">Cookies essenciais</p>
                <p className="cookie-banner-categoria-descricao">
                  Necessários para o funcionamento do website. Estão sempre ativos.
                </p>
              </div>
              <label className="cookie-switch cookie-switch--bloqueado">
                <input type="checkbox" checked disabled aria-label="Cookies essenciais, sempre ativo" />
                <span className="cookie-switch-slider" />
              </label>
            </div>

            {CATEGORIAS.map((categoria) => (
              <div className="cookie-banner-categoria" key={categoria.chave}>
                <div className="cookie-banner-categoria-info">
                  <p className="cookie-banner-categoria-titulo">{categoria.titulo}</p>
                  <p className="cookie-banner-categoria-descricao">{categoria.descricao}</p>
                </div>
                <label className="cookie-switch">
                  <input
                    type="checkbox"
                    checked={preferencias[categoria.chave]}
                    onChange={() => alternarPreferencia(categoria.chave)}
                    aria-label={categoria.titulo}
                  />
                  <span className="cookie-switch-slider" />
                </label>
              </div>
            ))}

            <div className="cookie-banner-acoes">
              <button onClick={guardarPreferencias} className="cookie-btn cookie-btn--aceitar">
                Guardar Preferências
              </button>
              <button
                onClick={() => setAPersonalizar(false)}
                className="cookie-btn cookie-btn--rejeitar"
              >
                Voltar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
